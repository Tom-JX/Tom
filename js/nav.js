// 获取网络请求
fetch("/data/nav.json")
    .then(res => res.json())
    .then(data => {
        rederSlideNav(data)
    })
    .catch(error => {
        console.log(error)   // 修复①：error 不是 data
    })
//视图适配
function rederSlideNav(data) {
    const slideUl = document.querySelector(".slide ul")   // 修复②：单个元素

    //清空现有内容
    slideUl.innerHTML = ""   // 修复③：innerHTML

    //动态生成slide导航项
    data.forEach(navItem => {
        const li = document.createElement("li")
        // 修复④⑤：name + iconfont
        li.innerHTML = `<a href="#">${navItem.name}<i class="iconfont iconfont-arrow-right-big"></i></a>`

        // 修复⑥：nav.json 的字段是 children（含 name/img/url）
        if (navItem.children && navItem.children.length > 0) {
            const slideList = document.createElement("div")
            slideList.className = "slide-list"
            const ul = document.createElement("ul")
            navItem.children.forEach(product => {
                const productLi = document.createElement("li")
                productLi.innerHTML = `
                    <a href="#">
                        <img src="${product.img}" alt="">
                        <span>${product.name}</span>   <!-- 修复⑦：去掉多余 } -->
                    </a>`
                ul.appendChild(productLi)
            })
            slideList.appendChild(ul)
            li.appendChild(slideList)
        }
        slideUl.appendChild(li)
    })
}
