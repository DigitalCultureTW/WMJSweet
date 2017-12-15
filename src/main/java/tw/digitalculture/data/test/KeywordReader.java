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
package tw.digitalculture.data.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Read Keywords from Database, for making Word Cloud.
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class KeywordReader {

    private static final String CONN_STR = String.format("jdbc:mariadb://localhost:3306/%s?user=%s&password=%s",
            "wm", "wm", "wm123");

    public static Connection getConn() throws SQLException {
        return DriverManager.getConnection(CONN_STR);
    }

    public static ResultSet readData(String table) throws SQLException {
        try (Connection conn = DriverManager.getConnection(CONN_STR);
                Statement stmt = conn.createStatement();) {
            stmt.execute("Select * from " + table);
            return stmt.getResultSet();
        }
    }

    public static void main(String[] args) throws SQLException {
        String result = "";
        ResultSet rs = readData("syslog");
        while (rs.next()) {
            if ("query".equals(rs.getString("type"))) {
                String keyword = rs.getString("data");
                result += keyword.split("\\(")[0] + ", ";
            }
        }
        System.out.println(result);
    }
}
