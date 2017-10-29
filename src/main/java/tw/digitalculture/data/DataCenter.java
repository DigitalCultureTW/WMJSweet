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
import javax.json.Json;
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

//    public static void main(String[] args) {
//        JsonObject data = Json.createObjectBuilder()
//                .add("client", "local")
//                .add("text", "清水").build();
//        new DataCenter((dc) -> {
//            dc.getResult(data, 20, (Result result) -> {
//                System.out.println("Result = " + result.record_set.size());
//                result.record_set.forEach((t) -> {
//                    System.out.println("* " + t.img_url);
//                });
//            });
//        });
//    }
    public DataCenter(Consumer<DataCenter> callback) {
        this.queries = new ArrayList<>();
        this.ideasql = new IdeaSQL();
        this.twdc = new TWDC((TWDC t) -> {
            if (t != null) {
                this.queries.add(t);
                System.out.println("TWDC added");
                this.queries.add(ideasql);
                System.out.println("IdeaSQL added");
                callback.accept(this);
            } else {
                callback.accept(null);
            }
        });
    }

    int count, n;

    public void getResult(JsonObject data, int limit, Consumer<Result> callback) {
        count = 0;
        n = limit;
        Result result = new Result(data.getString("client"), data.getString("text"));
        System.out.println("Query string = " + result.query_str);
//        System.out.println("queries.size = " + queries.size());
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
}
