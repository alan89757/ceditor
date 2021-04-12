import ParentRouter from "./parentRouter.js"; // 继承一个父类

class HashRouter extends ParentRouter{
  constructor(config) {
    super(config);
    window.addEventListener("hashchange", this.refresh.bind(this)); // 监听路由hash是否变化
    window.addEventListener("load", this.refresh.bind(this));  // 加载完了初始化组件
  }
  // hash变化，刷新页面
  refresh() {
    let currentCompontName = "";
    let path = window.location.hash;
    let indexOf = path.indexOf("?");
    path = indexOf > -1 ? path.slice(1, indexOf) : path.slice(1);
    // let path = window.location.hash.slice(1);  // /monday
    // 1.更新historyRoutes数据, 新增add或者替换replace

    // 3.前进和后退不要操作路由了
    if(!this._forwardOrBack) {
      // 4.区分新增还是替换路由
      if(this._replaceRouter) { // 替换
        this._historyRoutes[this._currentIndex] = this.path;
      } else { // 新增
        this._historyRoutes.push(path);  // 存储路由
        this._currentIndex++;     // 路由数加1
      }
    }
    // 2.下面是组件渲染
    // 找到当前需要渲染的组件名称
    for (let i = 0; i < this._routes.length; i++) {
      if(this._routes[i].path === path) {
        currentCompontName = this._routes[i].name;
        break;
      }
    }
    if(!currentCompontName) return false;  // 当前渲染组件为空就不往下走了
    let nodeList = document.querySelectorAll("[data-component-name]");
    for (let j = 0; j < nodeList.length; j++) {
      if(nodeList[j].dataset["componentName"] === currentCompontName) {
        nodeList[j].style.display = "block";
      } else {
        nodeList[j].style.display = "none";
      }
    }
    this._forwardOrBack = false;  // 操作完了要变为false，不然后面的路由添加不进来了
  }
  // 后退
  back() {
    if(this._currentIndex > 0) { // 路由数量大于0才能后退
      this._forwardOrBack = true;
      this._currentIndex--;
      let path = this._historyRoutes[this._currentIndex];
      window.location.hash = path;
    }
  }
  // 后退
  forward() {
    if(this._currentIndex < this._historyRoutes.length -1) { // 路由数量大于0才能后退
      this._forwardOrBack = true;
      this._currentIndex++;
      let path = this._historyRoutes[this._currentIndex];
      window.location.hash = path;
    }
  }
  push(option) {
    this._changeHash(option, option.query);  // 传递path和query就行了，拼接成?a=1&b=2
  }
  replace(option) {
    this._replaceRouter = true;
    this._changeHash(option, option.query); // 拿到hash，在调用refresh
  }
  _changeHash(option, query) {
    let currentPath = option.path;
    if(!currentPath) { // path不存在，需要去_routes去找下path
      for (let i = 0; i < this._routes.length; i++) {
        if(this._routes[i].name === option.name) {
          currentPath = this._routes[i].path;
          break;
        }
      }
    }
    if(!currentPath) return false;
    if(!query) { // 没有查询参数直接刷新
      window.location.hash = currentPath;
      return false;
    } else {
      query = this.getTargetParams(query);
      window.location.hash = currentPath + query;
    }
  }
  
}

export default HashRouter;