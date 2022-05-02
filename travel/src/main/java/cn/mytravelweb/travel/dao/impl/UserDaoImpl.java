package cn.mytravelweb.travel.dao.impl;

import cn.mytravelweb.travel.dao.UserDao;
import cn.mytravelweb.travel.domain.User;
import cn.mytravelweb.travel.utils.JDBCUtils;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserDaoImpl implements UserDao {

    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());

    @Override
    public User findByUsername(String username) {
        User user = null;
        try {
            String sql = "select * from tab_user where username = ?";

            user = template.queryForObject(sql, new BeanPropertyRowMapper<User>(User.class), username);

        } catch (DataAccessException e) {
            e.printStackTrace();
        }

        return user;
    }

    @Override
    public void save(User user) {
        String sql = "insert into tab_user(username, password, name, birthday, sex, telephone, email)"
                + "values(?,?,?,?,?,?,?)";

        template.update(
                sql,
                user.getUsername(),
                user.getPassword(),
                user.getName(),
                user.getBirthday(),
                user.getGender(),
                user.getTel(),
                user.getEmail()
        );


    }
}
