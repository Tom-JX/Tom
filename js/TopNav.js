//网络请求获取数据：fetch
let toNavData = []
fetch("../data/navList.json")
    .then(res => res.json())
    .then(data => {
        toNavData = data
        renDerNavBar(data)
    })

// 视图渲染
function renDerNavBar(data) {
    const navBar = document.querySelector(".nav-bar ul");

    //   清空现有内容
    navBar.innerHTML = ""

    //添加第一个特殊项
    const firstLi = document.createElement("li")
    firstLi.innerHTML = ''
    navBar.appendChild(firstLi)

    data.forEach((navItem, index) => {
        const li = document.createElement("li")
        li.innerHTML = `<a href="#">${navItem.name}</a>`
        //判断有没有子项
        if (navItem.list && navItem.list.length > 0) {
            const navBarList = document.createElement("div");
            navBarList.className = "nav-bar-list";


            const wrap = document.createElement("div")
            wrap.className = "wrap"


            const ul = document.createElement("ul")
            navItem.list.forEach(product => {
                const productLi = document.createElement("li")
                productLi.innerHTML = `
                                <a href="#">
                                    <div class="img-box">
                                    <img src="${product.img}" alt="">
                                    </div>
                                    <p class="name">${product.title}</p>
                                    <p class="price">${product.price}</p>
                                    </a>
                                        `
                ul.appendChild(productLi)
            })
            wrap.appendChild(ul)
            navBarList.appendChild(wrap)
            li.appendChild(navBarList)
        }
        navBar.appendChild(li)
    })

}   
