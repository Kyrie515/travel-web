package cn.mytravelweb.travel.utils;

import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.util.Properties;

public class JDBCUtils {

    //JDBCUtils主要两个功能
    /*
    * 1.返回Connection对象
    * 2.返回DataSource对象
    * */
    private static DataSource ds;

    static {
        try {
            InputStream is = JDBCUtils.class.getClassLoader().getResourceAsStream("druid.properties");

            Properties pro = new Properties();

            pro.load(is);

            ds = DruidDataSourceFactory.createDataSource(pro);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Connection getConnection() throws Exception {
        return ds.getConnection();
    }

    public static DataSource getDataSource() {
        return ds;
    }

}
