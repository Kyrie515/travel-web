package cn.mytravelweb.travel.web.servlet;

import cn.mytravelweb.travel.domain.ResultInfo;
import cn.mytravelweb.travel.domain.User;
import cn.mytravelweb.travel.service.UserService;
import cn.mytravelweb.travel.service.impl.UserServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.beanutils.BeanUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;


@WebServlet("/registerServlet")
public class RegisterUserServlet extends HttpServlet {
    @Override
    public void init() throws ServletException {

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //1.获取数据
        Map<String, String[]> parameterMap = req.getParameterMap();
        //2.封装数据
        User user = new User();
        try {
            BeanUtils.populate(user, parameterMap);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        System.out.println(user);
        //3.调用service完成注册
        UserService userService = new UserServiceImpl();
        boolean flag = userService.register(user);

        if (flag == false) {
            req.getRequestDispatcher("/failServlet");
            System.out.println("登录失败");
        }else {
            req.getRequestDispatcher("/successServlet");
            System.out.println("登录成功");
        }


    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }
}
