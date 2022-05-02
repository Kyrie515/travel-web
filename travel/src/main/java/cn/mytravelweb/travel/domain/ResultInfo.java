package cn.mytravelweb.travel.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResultInfo {
    private boolean flag;//后端数据处理正常返回false，异常返回true
    private Object data;//后端返回结果数据对象
    private String errorMessage;//后端返回错误信息

}
