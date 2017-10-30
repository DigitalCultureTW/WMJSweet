/*
 * Copyright (C) 2017 Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package tw.digitalculture.data;

import tw.digitalculture.data.query.TWDC;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import javax.json.JsonObject;
import tw.digitalculture.data.interfaces.Query;
import tw.digitalculture.model.Record_Query;
import tw.digitalculture.model.Result;
import tw.digitalculture.data.query.IdeaSQL;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class DataCenter {

    TWDC twdc;
    IdeaSQL ideasql;
    List<Query<Record_Query>> queries;

    public DataCenter(Consumer<DataCenter> callback) {
        this.queries = new ArrayList<>();
        this.ideasql = new IdeaSQL();
        this.twdc = new TWDC((TWDC t) -> {
            if (t != null) {
                this.queries.add(t);
                System.out.println("TWDC added");
            } else {
                System.out.println("*** TWDC failed");
            }
            this.queries.add(ideasql);
            System.out.println("IdeaSQL added");
            callback.accept(this);
        });
    }

    int count, n;

    public void getResult(JsonObject data, int limit, Consumer<Result> callback) {
        count = 0;
        n = limit;
        Result result = new Result(data.getString("client"), data.getString("text"));
        System.out.println("Query string = " + result.query_str);
        queries.forEach((Query<Record_Query> source) -> {
            count++;
            if (n > 0) {
                source.query(result.query_str, n, (List<Record_Query> t) -> {
                    System.out.println(source.id + ":" + t.size());
                    n -= t.size();
                    t.forEach((Record_Query rq) -> {
                        result.record_set.add(rq);
                    });
                    if (count == queries.size()) {
                        callback.accept(result);
                    }
                });
            } else {
                callback.accept(result);
            }
        });
    }

    public void getResult(JsonObject data, int limit, String data_source, Consumer<Result> callback) {
        Result result = new Result(data.getString("client"), data.getString("text"));
        System.out.println("Query string = " + result.query_str);
        queries.forEach((Query<Record_Query> source) -> {
            if (source.getClass().getSimpleName().equals(data_source)) {
                source.query(result.query_str, limit, (List<Record_Query> t) -> {
                    System.out.println(source.id + ":" + t.size());
                    n -= t.size();
                    t.forEach((Record_Query rq) -> {
                        result.record_set.add(rq);
                    });
                    callback.accept(result);
                });
            }
        });
    }
}
