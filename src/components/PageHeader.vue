<template>
    <div class="header-con fixed">
        <div class="navigation-bar">
            <div class="nav-con">
                <div class="nav-item nav-item-left"><span>Home</span></div>
                <div class="nav-item"><span>Staking</span></div>
                <div class="nav-item"></div>
                <div class="nav-item"><span>MarketPlace</span></div>
                <div class="nav-item nav-item-right" @click="toggleMenus('community')">
                    <span>Community</span>
                    <div class="toggle-icon-con">
                        <img v-if="nav_active=='community'" src="../assets/header/pc-up.png" alt="">
                        <img v-else src="../assets/header/pc-down.png" alt="">
                    </div>
                    <ul class="child-ul" :class="nav_active=='community'?'is_show':''">
                        <li class="child-nav">Twitter</li>
                        <li class="child-nav">Discord</li>
                        <li class="child-nav">Instagram</li>
                        <li class="child-nav">Facebook</li>
                        <li class="child-nav">Reddit</li>
                        <li class="child-nav">Telegram</li>
                        <li class="child-nav">Blog</li>
                    </ul>
                </div>
            </div>
            <div class="logo">
                <img src="../assets/header/header-logo.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    name:'PageHeader',
    props: {
        nowActive: {
        type: String,
        default: 'home'
        }
    },
    setup(props) {
        const nav_active = ref(null)
        onMounted(()=>{
            nav_active.value = props.nowActive
        })
        function toggleMenus(nav) {
            if(nav_active.value==null){
                nav_active.value = nav
            }else{
                if(nav_active.value == nav){
                    nav_active.value = null
                }else{
                    nav_active.value = nav
                }
            }
        }

        return {nav_active,toggleMenus}
    },
}
</script>
<style lang="less" scoped>
.header-con{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 24px;
    z-index: 99;
    font-family: BlenderPro-Heavy, BlenderPro;
    .navigation-bar{
        background: url(../assets/header/header-bg.png) no-repeat;
        background-size:100% 100%;
        width: 1335px;
        height: 73px;
        position: relative;
        .nav-con{
            height: 62px;
            display: flex;
            align-items: center;
            .nav-item{
                flex: 1;
                cursor: pointer;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 30px;
                position: relative;
                font-size: 18px;
                font-weight: 800;
                span{
                    color: #6C9EC5;
                }
                &.active{
                    border-bottom: 2px solid #0661dc;
                }
                .toggle-icon-con{
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .child-ul{
                    z-index: 99;
                    position: absolute;
                    top: 55px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #111111;
                    padding: 0 20px;
                    max-height: 0;
                    -webkit-transition: max-height 0.5s cubic-bezier(0.48, 0.43, 0.29, 1.3);
                    transition: max-height 0.5s cubic-bezier(0.48, 0.43, 0.29, 1.3);
                    overflow: hidden;
                    .child-nav:first-child{
                        padding-top: 20px;
                    }
                    .child-nav{
                        padding-bottom: 20px;
                        white-space: nowrap;
                    }
                    &.is_show{
                        max-height: 35vh;
                    }
                }
            }
            .nav-item-left{
                margin-left: 40px;
            }
            .nav-item-right{
                margin-right: 40px;
            }
        }
        .logo{
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 11px;
            transform: translateX(-50%);
            height: 62px;
            display: flex;
            align-items: flex-end;
            img{
                width: 171px;
            }
        }
    }
}
</style>