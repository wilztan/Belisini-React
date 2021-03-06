
/**
*
* This Class is used to give every api call to be standardised.
* All fetch are defined by written url below
* It reduces unchanged API url later on
*
*/

export default class ApiRoute {
  static url = {
    MAIN:'http://127.0.0.1:8000/api/',
    PRODUCT_PATH:'product',
    SEARCH_FORM_NAME:'/queryname/',
    LOGIN:'login',
    REGISTER:'register',
    PROFILE:'profile',
    PRODUCT_RESOURCE:'item',
    PERSONAL_PRODUCT:'getMyProduct',
    PERSONAL_TRANSACTION:'sold',
    PERSONAL_ORDER:'order',
    ADD_TO_CART:'',
    TRANSACTION:'transaction'
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

  static getMyProduct(){
    return this.url.MAIN+this.url.PERSONAL_PRODUCT;
  }

  static getUserTransaction(){
    return this.getTransaction()+'/'+this.url.PERSONAL_TRANSACTION;
  }

  static getUserOrder(){
    return this.getTransaction()+'/'+this.url.PERSONAL_ORDER;
  }

  static getTransaction(){
    return this.url.MAIN+this.url.TRANSACTION;
  }
}
