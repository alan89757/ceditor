import React from "react";
import { render  } from "react-dom";
// import App from "./router/router";
// import App from "./example/basic";  // 路由基本用法
// import App from "./example/url-params";  // 路由基本用法
// import App from "./example/nesting";  // 路由嵌套(子路由)
// import App from "./auth-workflow/index";  // 路由加权限控制, context写法可以借鉴，可以模拟路由拦截
// import App from "./example/custom-link";  // 自定义路由，可自定义导航路由，active
// import App from "./example/preventing-transitions";  // 跳转prompt确认
// import App from "./example/no-match";  // 路由没匹配到，默认404，最好写到最后
// import App from "./example/recursive-paths";  // 路由递归，找朋友，useRouteMatch匹配路由，看是否有权限,useParams获取参数
// import App from "./example/sidebar";  // 左侧导航路由，配置路由
// import App from "./example/animated-transitions";  // 动画导航
// import App from "./example/route-config";  // // 子路由配置
// import App from "./example/modal-gallery";  // // 路由弹框
// import App from "./example/static-router";  // // 静态路由
import App from "./example/query-parameters";  // // 路由传参


render(<App />, document.getElementById("root"));