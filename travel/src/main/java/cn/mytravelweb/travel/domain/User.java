package cn.mytravelweb.travel.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private String username;

    private String password;

    private String email;

    private String name;

    private String tel;

    private String gender;

    private String birthday;


}
