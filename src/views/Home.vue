<template>
  <div class="home">
    <page-header></page-header>
    <pc-index></pc-index>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PcIndex from '../components/PcIndex.vue';
export default {
  name: 'Home',
  components:{
    PageHeader,
    PcIndex,
  },
  setup(){
    
  },
}
</script>
<style lang="less">
.home{
  background: #000000;
  font-family: BlenderPro-Heavy, BlenderPro;
  
}
</style>
