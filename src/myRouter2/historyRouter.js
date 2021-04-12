import ParentRouter from "./parentRouter";

class HistoryRouter extends ParentRouter {
  constructor(config) {
    super(config);
    window.addEventListener("popstate", this.refresh.bind(this), false);
    window.addEventListener("load", this.refresh.bind(this), false);
  }
  // 路由变化，更新组件
  refresh() {
    let path = window.location.pathname;
    let currentComponent = "";
    // 找到当前的组件名称 路由名称和组件名称是对应的
    for (let i = 0; i < this._routes.length; i++) {
      if(this._routes[i].path === path) {
        currentComponent = this._routes[i].name;  // 当前组件名称
        break;
      }
    }
    let nodeList = document.querySelectorAll("[data-component-name]");
    for (let j = 0; j < nodeList.length; j++) {
      if(nodeList[j].dataset.componentName === currentComponent) {
        nodeList[j].style.display = "block";
      } else {
        nodeList[j].style.display = "none";
      }
    }
    this._replaceRouter = false;
    // 
  }
  back() {
    window.history.back();
  }
  forward() {
    window.history.forward();
  }
  // 新增路由
  push(option) {
    this.changeRouter(option);
  }
  // 替换路由
  replace(option) {
    this._replaceRouter = true;
    this.changeRouter(option);
  }
  changeRouter(option) {
    let url = "";
    if(option.path) { // 有path
      if(!option.query) {
        url = option.path;
      } else {
        let search = this.getTargetParams(option.query);
        url = option.path + search;
      }
    } else { // 没有path
      if(!option.name) { // 没有path，没有pathname，直接return false;
        return false;
      } else { //有pathname，找path
        let currentPath = "";
        for (let i = 0; i < this._routes.length; i++) {
          if(this._routes[i].name === option.name) {
            currentPath = this._routes[i].path;
            break;
          }
        }
        // 无path，直接返回空
        if(!currentPath) { return false; }
        if(!option.query) { // 无query，直接更新路由
          url = currentPath;
        } else {
          // 有query，拼接参数
          let search = this.getTargetParams(option.query);
          url = currentPath + search;
        }
      }
    }
    if(!url) return false;
    this._replaceRouter ? window.history.replaceState(url, "", url) : window.history.pushState(url, "", url);
    this.refresh();
  }
}

export default HistoryRouter;