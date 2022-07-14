export default class AuthToken {
    static setToken(token) {
      localStorage.setItem('token', token);
    }
  
    static deleteToken() {
      localStorage.removeItem('token');
    }
  
    static getToken() {
      return localStorage.getItem('token');
    }
  
    static isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  }
  