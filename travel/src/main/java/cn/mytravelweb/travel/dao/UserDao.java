package cn.mytravelweb.travel.dao;

import cn.mytravelweb.travel.domain.User;

public interface UserDao {
    /**
     *
     * @param username 被查询的用户对象
     * @return 是否存在
     */
    User findByUsername(String username);


    /**
     *
     * @param user 保存到数据库里的对象
     */
    void save(User user);

}
