//获取网路请求

fetch("../data/appliance.json")
    .then(res => res.json())
    .then(data => {
        rendrAppliance(data);

    })
    .catch(error => {
        console.log(error);

    })
function rendrAppliance(data) {
    if (!data || data.lenght === 0) return;
    const applianceData =data[0];

    //右侧

    const elcRight = document.querySelector(".elc-right");
    if(elcRight && applianceData.list){
        elcRight.innerHTML = ""
        //列表生成产品
        applianceData.list.forEach((product)=>{
            const itemDiv =document.createElement("div")
            itemDiv.className="item"
            itemDiv.innerHTML = `
                    <a href="#">
                                <img class="item-img" src="${product.img}" alt="">
                                <p class="item-name">${product.title}</p>
                                <p class="item-desc">${product.desc}</p>
                                <p class="item-price">${product.price}</p>
                            </a>
            `
            elcRight.appendChild(itemDiv)
        })
        //添加剩余模块

        const elcBox =document.createElement("div")
        elcBox.className = "elc-box"
        elcBox.innerHTML = `
                <div class="item-last">
                                <div></div>
                                <div></div>
                            </div>
        `
        elcRight.appendChild(elcBox)
    }
}