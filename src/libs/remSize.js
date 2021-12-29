function remSize() {
    let designSize = 1920;
    let winw = document.documentElement.clientWidth||window.innerWidth;
    if(winw<750){
        winw = 750;
    }
    let scale = 100/designSize;
    let rem = scale*winw;
    document.documentElement.style.fontSize=rem+'px';
}
remSize()
window.onresize = function () {
    remSize();
}