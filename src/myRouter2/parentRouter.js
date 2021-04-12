export default class ParentRouter {
  constructor(config) {
    this._routes = config.routes || []; // 初始化的所有路由
    this._currentIndex = -1; // 当前路由的索引
    this._historyRoutes = [];  // 存储历史路由
    this._forwardOrBack = false;  // 是否前进和后退，不要更新路由信息
    this._replaceRouter = false; // 区分是新增还是替换路由
  }
  getTargetParams(query) {
    let search = "";
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        search += `${key}=${query[key]}&`;
      }
    }
    return search ? "?"+ search.replace(/&$/g, "") : ""; // 去掉最后一个&
  }
}