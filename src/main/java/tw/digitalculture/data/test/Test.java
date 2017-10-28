/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.digitalculture.data.test;

import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class Test {

    public static void main(String[] args) {
        JsonObject jo = Json.createObjectBuilder()
                .add("firstName", "John").build();
    }
}
