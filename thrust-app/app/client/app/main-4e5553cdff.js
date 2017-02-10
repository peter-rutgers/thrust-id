!function(){"use strict";angular.module("thrust-app",["ngAnimate","ngCookies","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(t,n){function o(){return Boolean(n.get("thrust_connected"))}function e(){n.remove("thrust_connected"),t.go("home")}var r=this;r.isActive=o,r.logout=e}t.$inject=["$state","$cookies"];var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:t,controllerAs:"nav"};return n}angular.module("thrust-app").directive("thrustNavbar",t)}(),function(){"use strict";function t(t,n){function o(o,e,r,i){"undefined"==typeof r&&n.error(o,i),t.error("Error: "+o,e)}function e(o,e,r,i){"undefined"==typeof r&&n.info(o,i),t.info("Info: "+o,e)}function r(o,e,r,i){"undefined"==typeof r&&n.success(o,i),t.info("Success: "+o,e)}function i(o,e,r,i){"undefined"==typeof r&&n.warning(o,i),t.warn("Warning: "+o,e)}var u={showToasts:!0,error:o,info:e,success:r,warning:i,log:t.log,debug:t.debug};return u}angular.module("thrust-app").factory("logger",t),t.$inject=["$log","toastr"]}(),function(){"use strict";function t(t,n){function o(o,e){function r(t){return t.data}function i(t){n.error("XHR Failed for Login."),n.log(t.data)}return t.post("/api/auth/login",{name:o,password:e}).then(r)["catch"](i)}var e={login:o};return e}t.$inject=["$http","logger"],angular.module("thrust-app").factory("authService",t)}(),function(){"use strict";function t(t,n,o){function e(){i.showMenu=!1,console.log(n.getObject("thrust_connected")),n.getObject("thrust_connected")&&o.info("Connected!")}function r(){}var i=this;i.showMenu=!1,i.user="",i.password="",i.loginSubmit=r,e()}t.$inject=["$state","$cookies","logger"],angular.module("thrust-app").controller("LoginController",t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/login/login.html",controller:"LoginController",controllerAs:"login"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("thrust-app").config(t)}(),function(){"use strict";function t(t,n,o){t.debugEnabled(!0),n.defaults.useXDomain=!0,delete n.defaults.headers.common["X-Requested-With"],o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-bottom-right",o.preventDuplicates=!1,o.progressBar=!0}t.$inject=["$logProvider","$httpProvider","toastrConfig"],angular.module("thrust-app").config(t)}();
//# sourceMappingURL=main-4e5553cdff.js.map