//获取网络请求

fetch("../data/phone.json")
    .then(res => res.json())
    .then(data => {
        renderPhone(data)

    })
    .then(error => {
        console.log(error);

    })

function renderPhone(data) {
    if (!data || data.lenght === 0) return;
    //获取数据
    const phoneData = data[0]
    //更新右侧产品的列表

    const phoneBoxRight = document.querySelector(".phone-box-right");
    if (phoneBoxRight && phoneData.list) {
        phoneBoxRight.innerHTML = "";
        phoneData.list.forEach((product) => {
            itemDiv = document.createElement("div")
            itemDiv.className = "item"
            itemDiv.innerHTML = `
                        <a href="#">
                                <img class="item-img"src="${product.img}" alt="">
                                <p class="item-name">${product.title}</p>
                                <p class="item-desc">${product.desc}</p>
                                <p class="item-price">${product.price}</p>
                            </a>
                            `
            phoneBoxRight.appendChild(itemDiv)
        });

    }
}