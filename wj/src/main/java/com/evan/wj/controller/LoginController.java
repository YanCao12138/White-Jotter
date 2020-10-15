package com.evan.wj.controller;

import com.evan.wj.result.Result;                 //响应码
import org.springframework.stereotype.Controller; //
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import com.evan.wj.pojo.User;   //接收前端的js对象

import java.util.Objects;

@Controller
public class LoginController {

    @CrossOrigin
    @PostMapping(value = "api/login")
    @ResponseBody
    public Result login(@RequestBody User requestUser) {
        // 对html 标签进行转义，防止XSS攻击
        String username = requestUser.getUsername();
        username = HtmlUtils.htmlEscape(username);

        if(!Objects.equals("admin", username) || !Objects.equals("123456", requestUser.getPassword()))
        {
            String message = "账号密码错误";
            System.out.println(message);
            return new Result(400);
        }
        else
        {
            return new Result(200);
        }
    }

}
