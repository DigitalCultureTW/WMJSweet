/*
 * The MIT License
 *
 * Copyright 2017 Jonathan Chang, Chun-yien <ccy@musicapoetica.org>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
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
