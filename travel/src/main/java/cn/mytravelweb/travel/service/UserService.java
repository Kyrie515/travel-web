package cn.mytravelweb.travel.service;

import cn.mytravelweb.travel.domain.User;

public interface UserService {

    /**
     *
     * @param user 注册的user对象
     * @return 是否注册完成
     */
    boolean register(User user);
}
