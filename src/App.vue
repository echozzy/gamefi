<template>
  <router-view/>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}
img{
  width: 100%;
}
.fixed {
  position: fixed;
}
.flex {
  display: flex;
}
.flex-fc {
  display: flex;
  flex-direction: column;
}
.flex-jc {
  display: flex;
  justify-content: center;
}
.flex-ac {
  display: flex;
  align-items: center;
}
.flex-jac {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 1200px){
  .hidden-lg-and-d {
      display: none!important;
  }
}
@media only screen and (min-width: 1200px){
  .hidden-lg-and-u {
      display: none!important;
  }
}
@media only screen and (max-width: 768px){
  .hidden-xs-and-d {
      display: none!important;
  }
}
@media only screen and (min-width: 768px){
  .hidden-xs-and-u {
      display: none!important;
  }
}
</style>
