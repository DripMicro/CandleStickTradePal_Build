(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[17],{373:function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var n=a(8),o=r(a(0)),c=a(16);a(5),a(65);var l=r(a(18));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e.prototype.constructor=e,t)}function u(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],0<=t.indexOf(a)||(n[a]=e[a]);return n}var m=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(n.Router,{history:this.history,children:this.props.children})},t}(o.Component),f=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(n.Router,{history:this.history,children:this.props.children})},t}(o.Component),d=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},g=function(e){return e},h=o.forwardRef;void 0===h&&(h=g);var y=h((function(e,t){var a=e.innerRef,r=e.navigate,n=e.onClick,c=u(e,["innerRef","navigate","onClick"]),l=c.target,s=i({},c,{onClick:function(t){try{n&&n(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=g!==h&&t||a,o.createElement("a",s)})),v=h((function(e,t){var a=e.component,r=void 0===a?y:a,s=e.replace,m=e.to,f=e.innerRef,v=u(e,["component","replace","to","innerRef"]);return o.createElement(n.__RouterContext.Consumer,null,(function(e){e||l(!1);var a=e.history,n=p(d(m,e.location),e.location),u=n?a.createHref(n):"",y=i({},v,{href:u,navigate:function(){var t=d(m,e.location),r=c.createPath(e.location)===c.createPath(p(t));(s||r?a.replace:a.push)(t)}});return g!==h?y.ref=t||f:y.innerRef=f,o.createElement(r,y)}))})),b=function(e){return e},w=o.forwardRef;void 0===w&&(w=b);var P=w((function(e,t){var a=e["aria-current"],r=void 0===a?"page":a,c=e.activeClassName,s=void 0===c?"active":c,m=e.activeStyle,f=e.className,g=e.exact,h=e.isActive,y=e.location,P=e.sensitive,E=e.strict,N=e.style,R=e.to,S=e.innerRef,j=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(n.__RouterContext.Consumer,null,(function(e){e||l(!1);var a=y||e.location,c=p(d(R,a),a),u=c.pathname,I=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=I?n.matchPath(a.pathname,{path:I,exact:g,sensitive:P,strict:E}):null,x=!!(h?h(O,a):O),C="function"==typeof f?f(x):f,k="function"==typeof N?N(x):N;x&&(C=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(C,s),k=i({},k,m));var _=i({"aria-current":x&&r||null,className:C,style:k,to:c},j);return b!==w?_.ref=t||S:_.innerRef=S,o.createElement(v,_)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return n.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return n.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return n.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return n.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return n.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return n.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return n.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return n.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return n.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return n.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return n.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return n.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return n.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return n.withRouter}}),t.BrowserRouter=m,t.HashRouter=f,t.Link=v,t.NavLink=P},472:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(20),c=a(481),l=a(213),i=a(214),s=a(480),u=a(373),m=a(26);a(46);const f=n.a.createElement(l.a,{icon:i.a});t.default=()=>{Object(m.c)();const[e,t]=s.a.useMessage(),[a,l]=Object(r.useState)(!1),[i,d]=Object(r.useState)(""),[p,g]=Object(r.useState)(""),[h,y]=Object(r.useState)(!1),v=(e,t)=>{1===e?d(t):2===e&&g(t)};return a?n.a.createElement(u.Redirect,{to:"/intro"}):n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex align-items-center auth px-0"},n.a.createElement("div",{className:"row w-100 mx-0"},n.a.createElement("div",{className:"col-lg-4 mx-auto"},n.a.createElement("div",{className:"card text-left py-5 px-5 px-sm-5",style:{backgroundColor:"#1a1a34"}},n.a.createElement("h4",{className:"mb-4"},"Hello! let's get started"),n.a.createElement("h6",{className:"font-weight-light mb-4"},"Sign in to continue."),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-12"},n.a.createElement("input",{type:"email",value:i,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",placeholder:"Email or username",onChange:e=>v(1,e.target.value)}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-12"},n.a.createElement("div",{className:"input-group",style:{backgroundColor:"rgb(26, 26, 52)"}},h?n.a.createElement("input",{type:"text",value:p,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>v(2,e.target.value),placeholder:"Password"}):n.a.createElement("input",{type:"password",value:p,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>v(2,e.target.value),placeholder:"Password"}),n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{onClick:()=>{y(!h)},style:{cursor:"pointer",zIndex:"1",color:"#d1d1d1"}},f)))))),n.a.createElement("div",{className:"mt-3"},n.a.createElement("button",{onClick:()=>{if(i&&""!==i&&void 0!==i)if(p&&void 0!==p)if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i)){if(i||p){e={username:"",email:i,pAss:p};console.log(e),c.a.post("/api/users/login",e).then(e=>{console.log(e),"User Not Found"===e.data?s.a.warning(e.data):"Password Dont Matched"===e.data?s.a.warning("Your account or password is incorrect.If you don't remember your password, Forgot Password now"):"Your period is finished. Please register again"===e.data?s.a.warning(e.data):(console.log(e.data),localStorage.setItem("level",e.data.level),localStorage.setItem("Auth",2),localStorage.setItem("Username",e.data.username),localStorage.setItem("Email",e.data.email),localStorage.setItem("Password",e.data.password),console.log(localStorage.getItem("Password")),localStorage.setItem("UserId",e.data.userId),localStorage.setItem("FirstName",e.data.firstName),localStorage.setItem("Lastname",e.data.lastname),l(!0),s.a.config({top:"60px",duration:2}),s.a.success("Successfully login"))})}}else{var e={username:i,eMail:"",pAss:p};c.a.post("/api/users/login",e).then(e=>{"User Not Found"===e.data||"Password Dont Matched"===e.data||"Your period is finished. Please register again"===e.data?s.a.warning(e.data):(console.log(e.data),localStorage.setItem("level",e.data.level),localStorage.setItem("Auth",2),localStorage.setItem("Username",e.data.username),localStorage.setItem("Password",e.data.password),console.log(localStorage.getItem("Password")),localStorage.setItem("Email",e.data.email),localStorage.setItem("UserId",e.data.userId),localStorage.setItem("FirstName",e.data.firstName),localStorage.setItem("Lastname",e.data.lastname),l(!0),s.a.config({top:"60px",duration:2}),s.a.success("Successfully login"))})}else s.a.warning("Invalid password");else s.a.warning("Invaild email")},className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"},"SIGN IN")),n.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},n.a.createElement(o.b,{to:"/forget_pass"},"Forgot password?")),n.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account?"," ",n.a.createElement(o.b,{to:"/register",className:"text-primary"},"Register")))))))}},65:function(e,t,a){"use strict";a.r(t);t.default=function(e,t){}}}]);
//# sourceMappingURL=17.de02a7ea.chunk.js.map