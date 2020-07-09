/**
* 定义通用的抛出错误类
*/

// 通用错误
class ThrowError extends Error{
  constructor(msg='服务器错误', code=99999, status=500){
    super()
    this.msg = msg
    this.code = code
    this.status = status
  }
}

// 缺少必填参数
class ParamsError extends ThrowError{
  constructor(param=''){
    super('缺少必传参数参数：'+param, 10006, 400)
  }
}

// 用户不存在
class ExsitError extends ThrowError{
  constructor(){
    super('用户已存在', 10008, 404)
  }
}

// 用户已存在
class NotExsitError extends ThrowError{
  constructor(){
    super('用户不存在', 10012, 406)
  }
}

// 密码错误
class PasswordError extends ThrowError{
  constructor(){
    super('密码不正确', 10014, 401)
  }
}

// 参数校验不正确
class ValidatorError extends ThrowError{
  constructor(message){
    super(message, 10016, 407)
  }
}

// token有问题
class TokenError extends ThrowError{
  constructor(){
    super('token失效', 10018, 401)
  }
}

// 权限不足
class AuthError extends ThrowError{
  constructor(){
    super('权限不足', 10022, 403)
  }
}

module.exports = {
  ThrowError,
  ParamsError,
  ExsitError,
  NotExsitError,
  PasswordError,
  ValidatorError,
  TokenError,
  AuthError
}