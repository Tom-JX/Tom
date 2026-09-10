// 获取页脚数据
fetch("../data/footer.json")
    .then(res => res.json())
    .then(data => {
        renderFooter(data);
    })
    .catch(error => {
        console.log(error);
    })

// 渲染页脚栏目
function renderFooter(data) {
    if (!data || data.length === 0) return;
    const footerLink = document.querySelector(".footer-link");
    if (!footerLink) return;

    // 清空
    footerLink.querySelectorAll("ul").forEach(ul => ul.remove());

    // 遍历 5 个栏目，每个生成一个 ul
    data.forEach(column => {
        const ul = document.createElement("ul");

        // 栏目标题
        const titleLi = document.createElement("li");
        titleLi.textContent = column.title;
        ul.appendChild(titleLi);

        // 栏目下的链接
        column.links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url || "#";
            a.textContent = link.name;
            li.appendChild(a);
            ul.appendChild(li);
        });

        // 插入到 footer-aside 前面
        footerLink.insertBefore(ul, footerLink.querySelector(".footer-aside"));
    });
}
