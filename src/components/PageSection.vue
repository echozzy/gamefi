<template>
  <div class="view-container">
    <div class="top-breathing-con">
      <div class="top-breathing">
        <div class="bg-left breathing">
          <div class="top">
            <div class="background-left-top"><img src="../assets/home/bg/background_left_top.png" alt=""></div>
          </div>
          <div class="bottom flex">
            <div class="background-left-line"><img src="../assets/home/bg/background_left_line.png" alt=""></div>
            <div class="item2 flex-fc">
              <div class="background-left-num"><img src="../assets/home/bg/background_left_num.png" alt=""></div>
              <div class="background-left-num2"><img src="../assets/home/bg/background_left_num.png" alt=""></div>
              <div class="background-left-midbox"><img src="../assets/home/bg/background_left_midbox.png" alt=""></div>
              <div class="background-left-role"><img src="../assets/home/bg/background_left_role.png" alt=""></div>
            </div>
            <div class="item1 flex-fc">
              <div class="background-left-x"><img src="../assets/home/bg/background_left_x.png" alt=""></div>
              <div class="background-left-rule"><img src="../assets/home/bg/background_left_rule.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="mid"></div>
        <div class="bg-right breathing">
          <img src="../assets/home/bg-right.png" alt="">
        </div>
      </div>
    </div>
    <div
      class="section-container"
      ref="sectiondom"
      :style="
        `transform: translateY(` +
        translateY +
        `vh); transition-duration: 1000ms;`
      "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref,onMounted } from "vue";
export default {
  name: "PageSection",
  props: {},
  setup(){
    const sectiondom = ref(null)
    onMounted(() => {
      window.addEventListener("mousewheel", handleScroll, true);
      maxHeight.value = -(sectiondom.value.children.length-1)*100
    })
    const translateY = ref(0)
    const isScroll = ref(false)
    const maxHeight = ref(0)
    function handleScroll(e) {
      if (isScroll.value) {
        return;
      }
      isScroll.value = true;
      setTimeout(() => {
        isScroll.value = false;
      }, 1000);
      // 向哪个方向滚动
      if (e.deltaY > 0) {
        //   向下滚动
        if(translateY.value <= maxHeight.value){
          return
        }
        translateY.value -= 100;
      } else {
        // 向上滚动
        if (translateY.value >= 0) {
          return;
        }
        translateY.value += 100;
      }
    }
    return {
      handleScroll,sectiondom,translateY
    }
  }
};
</script>

<style lang="less">
.top-breathing-con{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .top-breathing{
    width: 1920px;
    display: flex;
    align-items: center;
    position: relative;
    .bg-left{
      width: 320px;
      z-index: 1;
      margin-left: 30px;
      height: 100%;
    }
    .mid{
      width: 1270px;
    }
    .bg-right{
      width: 320px;
      z-index: 1;
      margin-right: 30px;
      height: 100%;
    }
    .breathing{
      display: flex;
      flex-direction: column;
      position: relative;
      .top{
        display: flex;
        justify-content: center;
        .background-left-top{
          width: 181px;
          display: flex;
          animation: opacity-change 10s ease-in-out 1s infinite;
          -webkit-animation: opacity-change 10s ease-in-out 1s infinite;
          -moz-animation: opacity-change 10s ease-in-out 1s infinite;
          -o-animation: opacity-change 10s ease-in-out 1s infinite;
        }
        margin-bottom: 36px;
      }
      .bottom{
        justify-content: space-between;
        flex-direction: row-reverse;
        .background-left-line{
          height: 774px;
          right: 0;
          animation: opacity-change 10s ease-in-out 3s infinite;
          -webkit-animation: opacity-change 10s ease-in-out 3s infinite;
          -moz-animation: opacity-change 10s ease-in-out 3s infinite;
          -o-animation: opacity-change 10s ease-in-out 3s infinite;
          img{
            height: 100%;
          }
        }
        .item1{
          margin-top: 20px;
          .background-left-x{
            display: flex;
            width: 31px;
            height: 73px;
            animation: opacity-change 10s ease-in-out 9s infinite;
            -webkit-animation: opacity-change 10s ease-in-out 9s infinite;
            -moz-animation: opacity-change 10s ease-in-out 9s infinite;
            -o-animation: opacity-change 10s ease-in-out 9s infinite;
          }
          .background-left-rule{
            display: flex;
            margin-top: 161px;
            width: 52px;
            height: 328px;
            animation: opacity-change 10s ease-in-out 7s infinite;
            -webkit-animation: opacity-change 10s ease-in-out 7s infinite;
            -moz-animation: opacity-change 10s ease-in-out 7s infinite;
            -o-animation: opacity-change 10s ease-in-out 7s infinite;
          }
        }
        .item2{
          .background-left-num,.background-left-num2{
            display: flex;
            width: 96px;
            height: 33px;
            align-self: flex-end;
          }
          .background-left-num{
            margin-top: 80px;
            animation: opacity-change 10s ease-in-out 2s infinite;
            -webkit-animation: opacity-change 10s ease-in-out 2s infinite;
            -moz-animation: opacity-change 10s ease-in-out 2s infinite;
            -o-animation: opacity-change 10s ease-in-out 2s infinite;
          }
          .background-left-num2{
            margin-top: 80px;
            animation: opacity-change 10s ease-in-out 6s infinite;
            -webkit-animation: opacity-change 10s ease-in-out 6s infinite;
            -moz-animation: opacity-change 10s ease-in-out 6s infinite;
            -o-animation: opacity-change 10s ease-in-out 6s infinite;
          }
          .background-left-midbox{
            width: 164px;
            height: 120px;
            margin-top: 99px;
            animation: opacity-change 10s ease-in-out 4s infinite;
            -webkit-animation: opacity-change 10s ease-in-out 4s infinite;
            -moz-animation: opacity-change 10s ease-in-out 4s infinite;
            -o-animation: opacity-change 10s ease-in-out 4s infinite;
          }
          .background-left-role{
            margin-top: 112px;
            margin-left: 23px;
            width: 43px;
            height: 110px;
            animation: opacity-change 10s ease-in-out 8s infinite;
            -webkit-animation: opacity-change 10s ease-in-out 8s infinite;
            -moz-animation: opacity-change 10s ease-in-out 8s infinite;
            -o-animation: opacity-change 10s ease-in-out 8s infinite;
          }
        }
      }
    }
  }
  @keyframes opacity-change {
    0% {
      opacity: 1
    }
    10% {
      opacity: .7
    }
    23% {
      opacity: .3
    }
    40% {
      opacity: .8
    }
    70% {
      opacity: .1
    }
    80% {
      opacity: .8
    }
    90% {
      opacity: .5
    }
    100% {
      opacity: 1
    }
  }
}
.view-container {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background: url(../assets/home/bg.png) no-repeat;
  background-size: 1900px 97%;
  background-attachment:fixed;
  background-position:center;
  position: relative;
  .section-container {
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    .section {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
    }
  }
}
</style>