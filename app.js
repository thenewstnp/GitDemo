function login(userName, userPassword) {
    if (!userName || !userPassword) {
        return {
            code: 1,
            masg: "用户名或密码不能为空"
        }
    } else {
        return {
            code: 0,
            masg: "登录成功"
        }
    }
}