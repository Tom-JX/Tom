【data 数据文件夹说明】

本文件夹的 6 个 JSON 文件的数据全部抓取自小米商城官网（https://www.mi.com/shop，2026-09-09 采集，真实数据）。

1. nav.json —— 分类树（侧边"全部商品分类"菜单）
   [ { id, name, img, children: [ {id, name, img} ] } ]
   10 个一级分类，共 238 个子分类；img 指向 imgs/nav/、imgs/channel/

2. navList.json —— 顶部一级分类列表（渲染导航/分类栏）
   [ { id, name, img, url } ] 共 10 项

3. channel.json —— 频道与服务入口
   {
     "categories": [ {id, name, img, children} ],   // 10 个频道
     "topbar": [ {id, name, img} ],                 // 顶栏6入口（保障服务/企业团购/F码/米粉卡/以旧换新/话费充值）
     "cart": { name, iconfont: "iconfont-cart", url } // 购物车（用 iconfont）
   }

4. banner.json —— 首页轮播图
   [ { id, title, img, url } ] 共 6 张（img 指向 imgs/banner/）

5. phone.json —— 手机商品列表
   [ { id(官网product_id), name, price, oldPrice, img, url } ] 共 19 件（真实价格，img 指向 imgs/phone/）

6. appliance.json —— 家电商品列表
   [ { id, name, price, oldPrice, img, url } ] 共 23 件（真实价格，img 指向 imgs/appliance/）

图片都在 imgs/ 下：
  imgs/banner/    6 张轮播大图
  imgs/channel/   10 个一级分类图标 + 6 个顶栏入口图标
  imgs/phone/     19 张手机商品图
  imgs/appliance/ 23 张家电商品图
  imgs/nav/       238 张子分类图标

使用示例（渲染手机列表）：
  fetch("data/phone.json").then(r => r.json()).then(list => {
    list.forEach(p => {
      const card = document.createElement("a");
      card.href = p.url;
      card.innerHTML = `<img src="${p.img}"><h3>${p.name}</h3><p>${p.price}</p>`;
      document.body.appendChild(card);
    });
  });

注意：价格字段为官网当前价格（如 "10999元起" 表示起售价），仿站展示时可直接使用；
活动价/众筹价类字段（oldPrice）仅部分商品有。数据为 2026-09-09 快照。
