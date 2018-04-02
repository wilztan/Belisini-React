
/**
*
* This Application stores cookies for token authentication.
* Cookies for Authentication are modified within this class
* Call this class to modify cookies
*
*/

export default class AuthChecker{

  static setUserCookie(cookies){
    var storedcookie = "PassportToken="+cookies+'; Path=/';
    document.cookie =storedcookie;
  }

  static getUserCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  static deleteUserCookie(name){
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "/login";
  }
}
