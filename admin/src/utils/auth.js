// 创建权限方法
import Cookie from "js-cookie"
const TokenKey = "Admin-Token"

export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookie.set(TokenKey, token)
}
export function removeToken() {
  return Cookie.remove(TokenKey)
}
