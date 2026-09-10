//获取网络请求
fetch("/data/channel.json")
    .then(res => res.json())
    .then(data => {
        renderChannel(data)
    })
    .catch(error => {
        console.log(error);
    })
//视图适配


function renderChannel(data) {
    const channelUl = document.querySelector(".ad-aside ul")
    //清空内容
    channelUl.innerHTML = "";

    //动态生成

    data.topbar.forEach(channel => {
        const li = document.createElement("li")
        li.innerHTML = `
                        <a href="#">
                            <img src="${channel.img}" alt="">
                            <p>${channel.name}</p>
                        </a>
        `
        channelUl.appendChild(li)
    });
}
