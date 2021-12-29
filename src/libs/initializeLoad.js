function initializeAnimation(closeTime=5000) {
    document.querySelector('body').setAttribute('style', 'overflow:hidden;')
    let imgList = document.getElementsByTagName('img');//图片集合
    let imgCount = imgList.length;//图片总数
    let imgLoad = 1;//加载完成的图片数量
    for (let i = 0; i < imgCount; i++) {
        imgList[i].onload =function (){
            imgLoad++;
            if (imgLoad === imgCount) {
                document.querySelector('body').setAttribute('style', 'overflow:auto;')
                document.body.removeChild(document.getElementById('load_animation'))
            }
        }
    }
    // 一段时间后关闭加载动画
    setTimeout(function () {
        let load_animation = document.getElementById('load_animation')
        if (load_animation != null) { 
            document.querySelector('body').setAttribute('style', 'overflow:auto;')
            document.body.removeChild(load_animation)
        }
    }, closeTime);
}

export default initializeAnimation