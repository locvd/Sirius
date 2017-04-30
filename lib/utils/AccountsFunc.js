/**
 * Created by locvd on 2017/04/30.
 */

let myLogoutFunc = function (error, state) {
  console.log('myLogoutFunc ' + state)
};

let mySubmitFunc = function (error, state) {
  console.log('mySubmitFunc ' + state)

};

let myPreSubmitFunc = function (error, state) {
  console.log('myPreSubmitFunc ' + state)
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};

let myPostSubmitFunc = function (error, state) {
  console.log('myPostSubmitFunc ' + state)
};

let AccountFunc = {
  myLogoutFunc: myLogoutFunc,
  mySubmitFunc: mySubmitFunc,
  myPreSubmitFunc: myPreSubmitFunc,
  myPostSubmitFunc: myPostSubmitFunc
};

export default AccountFunc;