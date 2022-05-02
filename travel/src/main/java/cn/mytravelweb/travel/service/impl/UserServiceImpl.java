package cn.mytravelweb.travel.service.impl;

import cn.mytravelweb.travel.dao.UserDao;
import cn.mytravelweb.travel.dao.impl.UserDaoImpl;
import cn.mytravelweb.travel.domain.User;
import cn.mytravelweb.travel.service.UserService;

public class UserServiceImpl implements UserService {
    UserDao dao = new UserDaoImpl();
    @Override
    public boolean register(User user) {
        //1.根据用户名查询用户对象如果有直接return false没有就说明可用。
        User username = dao.findByUsername(user.getUsername());
        if(username != null) {
            //用户名存在
            return false;
        }
        dao.save(user);
        return true;
    }
}
