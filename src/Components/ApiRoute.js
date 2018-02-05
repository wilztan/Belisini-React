export default class ApiRoute {
  constructor() {}

  static url = {
    MAIN:'http://127.0.0.1:8000/api/',
    PRODUCT_PATH:'product',
    SEARCH_FORM_NAME:'/queryname/',
    LOGIN:'login',
    REGISTER:'register',
    PROFILE:'profile',
    PRODUCT_RESOURCE:'item',
  };

  static getMainRoute() {
    return this.url.MAIN;
  }

  static getProductPath(){
    return this.url.MAIN+this.url.PRODUCT_PATH;
  }

  static getLoginPath(){
    return this.url.MAIN+this.url.LOGIN;
  }

  static getRegisterPath(){
    return this.url.MAIN+this.url.REGISTER;
  }
  static getProfilePath(){
    return this.url.MAIN+this.url.PROFILE;
  }

  static getProductResourcePath(){
    return this.url.MAIN+this.url.PRODUCT_RESOURCE;
  }
}
