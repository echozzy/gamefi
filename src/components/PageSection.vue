<template>
  <div class="view-container">
    <div class="top-breathing-con">
      <div class="top-breathing">
        <div class="bg-left breathing">
          <img src="../assets/home/bg-left.png" alt="">
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
    }
    .mid{
      width: 1270px;
    }
    .bg-right{
width: 320px;
    z-index: 1;
    margin-right: 30px;
    }
    .breathing{
      animation: opacity-change 3s ease-in-out infinite;
      -webkit-animation: opacity-change 3s ease-in-out infinite;
    }
    @keyframes opacity-change {
      0% {
        opacity: 0.4;
      }
      25%{
        opacity: 0.8;
      }
      50% {
        opacity: 1;
      }
      75%{
        opacity: 0.8;
      }
      100% {
        opacity: 0.4;
      }
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