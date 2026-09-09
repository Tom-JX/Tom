/* 
    获取网络请求的数据
*/
let bannerData = []
let currentBannerIndex = 0;
let bannerTimer = null;
fetch("../data/banner.json")
    .then(res => res.json())
    .then(data => {
        initBanner(data);
        bannerData = data
    })
    .catch(error => {
        console.log(error);

    })


/* 
    初始化轮播图
*/

function initBanner(data) {
    const bannerImgs = document.querySelectorAll(".banner-img");
    const indicators = document.querySelectorAll(".indicator");

    //设置图片源
    /* 
        视图渲染方式：
        1.视图驱动
        2.数据驱动
    */
    bannerImgs.forEach((img, index) => {
        if (data[index]) {
            img.src = data[index].img;
        }
    })
    //设置第一张图片为激活状态
    bannerImgs[0].classList.add("active");
    indicators[0].classList.add("active");

    //添加指示器事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            //跳转对应图片
            toToBanner(index);
        })
    })

    //启动自动轮播
    statrAutoPlay();

    //鼠标悬停 暂停轮播

    const  bannerContianer = document.querySelector(".banner-container")
    bannerContianer.addEventListener("mouseenter",stopAutoPlay);
    bannerContianer.addEventListener("mouseleave",statrAutoPlay)

}
/* 
    跳转到指定图片
*/

function toToBanner(index) {
    if (index === currentBannerIndex) return;

    const bannerImgs = document.querySelectorAll(".banner-img");
    const indicators = document.querySelectorAll(".indicator");

    //移除当前激活的状态
    bannerImgs[currentBannerIndex].classList.remove("active");
    indicators[currentBannerIndex].classList.remove("active");

    //设置新的激活状态

    currentBannerIndex = index;
    bannerImgs[currentBannerIndex].classList.add("active");
    indicators[currentBannerIndex].classList.add("active");

}

/* 
    切换下一张
*/
    function nextBanner(){
        const nextIndex = (currentBannerIndex + 1) % bannerData.length;
        toToBanner(nextIndex)
    }


//启动自动轮播

function statrAutoPlay(){
    if(bannerTimer)clearInterval(bannerTimer);
    bannerTimer = setInterval(nextBanner,3000);  //3秒


}


//停止轮播

function stopAutoPlay(){
    if(bannerTimer){
        clearInterval(bannerTimer)
        bannerTimer = null
    }
}