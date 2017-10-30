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

import javax.json.Json;
import javax.json.JsonObject;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import tw.digitalculture.model.Result;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class DataCenterTest {

    private static DataCenter instance;

    public DataCenterTest() {
    }

    @BeforeClass
    public static void setUpClass() {
        new DataCenter((DataCenter dc) -> {
            instance = dc;
        });
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {

    }

    @After
    public void tearDown() {
    }

    /**
     * Test of getResult method, of class DataCenter.
     */
    @Test
    public void testGetResult_3args() {
        System.out.println("getResult");
        int limit = 20;

        JsonObject data = Json.createObjectBuilder()
                .add("client", "local")
                .add("text", "清水").build();

        instance.getResult(data, limit, (Result result) -> {
            System.out.println("Result = " + result.record_set.size());
//            result.record_set.forEach((Record_Query rq) -> {
//                System.out.println("* " + rq.img_url);
//            });
        });
    }

    /**
     * Test of getResult method, of class DataCenter.
     */
    @Test
    public void testGetResult_4args() {
        System.out.println("getResult");
        JsonObject data = Json.createObjectBuilder()
                .add("client", "local")
                .add("text", "清水").build();
        int limit = 0;
        String data_source = "TWDC";
        instance.getResult(data, limit, data_source, (Result result) -> {
            System.out.println("Result = " + result.record_set.size());
        });
    }

}
