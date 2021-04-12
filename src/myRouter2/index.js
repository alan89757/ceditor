import HashRouter from "./hashRouter.js";
import HistoryRouter from "./historyRouter.js";

class Router {
  constructor(config) {  // 实例初始化路由配置,先不区分hash还是history
    if(config.mode === "hash") {
      this._router = new HashRouter(config); // 实例化hash路由，监听hashChange事件
    } else {
      this._router = new HistoryRouter(config); // 实例化history路由， 监听popstate事件
    }
  }
  // 后退 done
  back() {
    this._router.back();  // 调用路由实例的后退
  }
  // 前进 done
  forward() {
    this._router.forward();  // 调用路由实例的前进
  }
  // go done
  go(n) {
    window.history.go(n);
  }
  // 新增路由，有两种情况，传path或者pathname
  push(option) {
    this._router.push(option);
  }
  // 替换路由
  replace(option) {
    this._router.replace(option);
  }
}

export default Router;