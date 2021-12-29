<template>
    <div class="pc-index">
        <page-section>
        <section class="section">
            <div class="banner-con">
            <div class="banner-img"><img src="../assets/home/banner.png" alt=""></div>
            <div class="banner-mask">
                <div class="download-con flex-fc">
                <div class="download-top">
                    <img src="../assets/home/banner-logo.png" alt="">
                </div>
                <div class="download-bottom flex">
                    <div class="app-store">
                    <img src="../assets/home/app-store.png" alt="">
                    </div>
                    <div class="google-play">
                    <img src="../assets/home/google-play.png" alt="">
                    </div>
                </div>
                </div>
                <div class="banner-down">
                <img src="../assets/home/banner-down.png" alt="">
                </div>
            </div>
            </div>
        </section>
        <section class="section">
            <div class="section-item video-con flex-fc flex-ac">
                <div class="title">
                    <img class="toptext" src="../assets/home/video-toptext.png" alt="">
                <!-- <p>READY TO FIGHT</p> -->
                </div>
                <div class="item-video" @click="play_video">
                <div class="video-bg" v-show="isplay">
                    <img src="../assets/home/video-bg.png" alt="">
                </div>
                <div class="video-play-con">
                    <video class="video-play" poster="../assets/home/video-img.png" ref="video_play">
                    <source src="../assets/home/video-test.mp4" type="video/mp4">
                    </video>
                    <div class="play-btn-con">
                    <div v-show="isplay" class="play-btn">></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="section-item play-con flex-fc flex-ac">
            <div class="title">
                <p class="title-bg">PLAY THE GAME</p>
                <p class="title-top">HOW TO PLAY THE GAME</p>
            </div>
            <div class="item-play">
                <swiper
                :modules="modules"
                :autoplay="true"
                :navigation="swiper_options.navigation"
                :pagination="swiper_options.pagination"
                >
                <swiper-slide>
                    <div class="game-play-img">
                    <img src="../assets/home/game-play-img.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="game-play-img">
                    <img src="../assets/home/game-play-img.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="game-play-img">
                    <img src="../assets/home/game-play-img.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="game-play-img">
                    <img src="../assets/home/game-play-img.png" alt="">
                    </div>
                </swiper-slide>
                <div class="pagination-con">
                    <div class="swiper-button-prev"><img src="../assets/home/swiper-button-prev.png" alt=""></div>
                    <div class="pagination"></div>
                    <div class="swiper-button-next"><img src="../assets/home/swiper-button-next.png" alt=""></div>
                </div>
                </swiper>
                <div class="game-play-btn">
                <img src="../assets/home/game-play-btn.png" alt="">
                </div>
            </div>
            </div>
        </section>
        <section class="section">
            <div class="section-item role-con flex-fc flex-ac">
            <div class="title">
                <p class="title-bg">PLAY THE GAME</p>
                <p class="title-top">HOW TO PLAY THE GAME</p>
            </div>
            <div class="item-role-con">
                <swiper
                :modules="modules"
                :autoplay="true"
                :navigation="swiper_options.navigation"
                :pagination="swiper_options.pagination"
                >
                <swiper-slide>
                    <div class="swiper-item">
                    <div class="role-item"><img src="../assets/home/role1.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role2.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role3.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role4.png" alt=""></div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-item">
                    <div class="role-item"><img src="../assets/home/role1.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role2.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role3.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role4.png" alt=""></div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-item">
                    <div class="role-item"><img src="../assets/home/role1.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role2.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role3.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role4.png" alt=""></div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-item">
                    <div class="role-item"><img src="../assets/home/role1.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role2.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role3.png" alt=""></div>
                    <div class="role-item"><img src="../assets/home/role4.png" alt=""></div>
                    </div>
                </swiper-slide>
                <div class="pagination-con">
                    <div class="swiper-button-prev"><img src="../assets/home/swiper-button-prev.png" alt=""></div>
                    <div class="pagination"></div>
                    <div class="swiper-button-next"><img src="../assets/home/swiper-button-next.png" alt=""></div>
                </div>
                </swiper>
            </div>
            </div>
        </section>
        <section class="section">
            <div class="shiba-con">
            <div class="shiba-txt-left flex-fc">
                <div class="txt-title">
                <div class="title-top">
                    <img src="../assets/home/shiba-title.png" alt="">
                </div>
                <p class="title-bottom">SHIBA TOKEN(SHIB)</p>
                </div>
                <div class="txt-content">
                    <div class="content-top">
                    &nbsp;&nbsp;&nbsp;&nbsp;To help reverse the devastating spread of Covid-19 in India, VB has since utilized SHIB in the largest crypto donation in history, and then actually burned 40% of its total supply to a dead wallet, ensuring our long-term success and stability. In the words of Ryoshi, “Thank you to the woofmeister for enabling true decentralization. Now we truly begin.”
                    </div>
                    <div class="content-mid"></div>
                    <div class="content-bottom">&nbsp;&nbsp;&nbsp;&nbsp;To help reverse the devastating spread of Covid-19 in India, VB has since utilized SHIB in the largest crypto donation in history.</div>
                </div>
            </div>
            <div class="shiba-txt-right">
                <img src="../assets/home/shiba-right-img.png" alt="">
            </div>
            <div class="left-icon1">
                <img src="../assets/home/shiba-left-icon1.svg" alt="">
            </div>
            <div class="left-icon2">
                <img src="../assets/home/shiba-left-icon2.png" alt="">
            </div>
            <div class="right-icon1">
                <img src="../assets/home/shiba-right-icon1.png" alt="">
            </div>
            <div class="right-icon2">
                <img src="../assets/home/shiba-right-icon2.png" alt="">
            </div>
            </div>
        </section>
        <section class="section">
            <div class="section-item links-con flex-fc flex-ac">
            <div class="title">
                <p class="title-bg">PLAY THE GAME</p>
                <p class="title-top">HOW TO PLAY THE GAME</p>
            </div>
            <div class="item-links-con flex-fc">
                <div class="links-item-con">
                <div class="links-item"><img src="../assets/home/links-item1.png" alt=""></div>
                <div class="links-item links-item-mid"><img src="../assets/home/links-item2.png" alt=""></div>
                <div class="links-item"><img src="../assets/home/links-item3.png" alt=""></div>
                </div>
                <div class="links-inp-con flex-fc">
                <div class="inp-title">ARE YOU READY TO START YOUR JOURNEY?</div>
                <div class="inp-con">
                    <input class="inp" type="email" placeholder="Enter Meail Address">
                    <div class="inp-btn" @click="subscribe">SUBMIT</div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section class="section">
            <div class="community-con flex-fc">
            <div class="community-logo flex"><img src="../assets/home/community-logo.png" alt=""></div>
            <div class="community-download flex">
                <div class="community-download-app flex">
                <img src="../assets/home/community-download-app.png" alt="">
                </div>
                <div class="community-download-google flex">
                <img src="../assets/home/community-download-google.png" alt="">
                </div>
            </div>
            <div class="community-item-con flex">
                <div class="community-icon">
                <img src="../assets/home/community-icon1.png" alt="">
                </div>
                <div class="community-icon">
                <img src="../assets/home/community-icon2.png" alt="">
                </div>
                <div class="community-icon">
                <img src="../assets/home/community-icon3.png" alt="">
                </div>
                <div class="community-icon">
                <img src="../assets/home/community-icon4.png" alt="">
                </div>
                <div class="community-icon">
                <img src="../assets/home/community-icon5.png" alt="">
                </div>
                <div class="community-icon">
                <img src="../assets/home/community-icon6.png" alt="">
                </div>
                <div class="community-icon">
                <img src="../assets/home/community-icon7.png" alt="">
                </div>
            </div>
            <div class="community-copyright">
                <p>Nova battle © 2021, All rights reserved</p>
            </div>
            <div class="community-bottom-menus flex">
                <div class="menus-nav">
                <div class="menus-nav-icon flex"><img src="../assets/home/community-nav-icon.png" alt=""></div>
                <p class="menus-nav-txt">WHITEPAPER</p>
                </div>
                <div class="menus-nav">
                <div class="menus-nav-icon flex"><img src="../assets/home/community-nav-icon.png" alt=""></div>
                <p class="menus-nav-txt">CONTACT US</p>
                </div>
                <div class="menus-nav">
                <div class="menus-nav-icon flex"><img src="../assets/home/community-nav-icon.png" alt=""></div>
                <p class="menus-nav-txt">PRIVACY</p>
                </div>
                <div class="menus-nav">
                <div class="menus-nav-icon flex"><img src="../assets/home/community-nav-icon.png" alt=""></div>
                <p class="menus-nav-txt">CLAUSE</p>
                </div>
            </div>
            </div>
        </section>
        </page-section>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
import PageSection from './PageSection.vue'
// import Swiper core and required modules
import {Navigation,Pagination, Autoplay } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
// Import Swiper styles
import "swiper/swiper.min.css";
export default {
  components: { 
        PageSection,
        Swiper,
        SwiperSlide,
    },
    name:'PcIndex',
    setup() {
        const isplay = ref(true)
        const video_play = ref(null)
        function play_video() {
        if(isplay.value){
            video_play.value.play()
            isplay.value = false
        }else{
            video_play.value.pause()
            isplay.value = true
        }
        }
        let swiper_options = reactive({
        pagination: {
            el: ".pagination",
            bulletClass: "my-bullet", //需设置.my-bullet样式
            bulletActiveClass: "my-bullet-active",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        });

        return {
            isplay,video_play,play_video,
            modules: [Navigation,Autoplay, Pagination],
            swiper_options
        }
    },
}
</script>
<style lang="less">
@font-face{
    font-family: NovaBattle;
    src: url('../assets/font/novabattlePro.ttf');
}
.pc-index{
    .section-item{
        width: 1260px;
        justify-content: center;
    }
    .banner-con{
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 16px 10px;
    box-sizing: border-box;
        .banner-img{
            width: 100%;
            height: 100%;
            img{
                height: 100%;
            }
        }
        .banner-mask{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            .download-con{
                margin-top: 192px;
                .download-bottom{
                    margin-top: 91px;
                    display: flex;
                    justify-content: space-between;
                }
            }
            .banner-down{
                display: flex;
                position:absolute;
                left: 50%;
                bottom: 0;
                transform: translate(-50%,-50%);
            }
        }
    }
    .video-con{
        .title{
            position: relative;
            top:47px;
            .toptext{
    width: 1000px;
    height: 110px;
            }
            p{
                color: rgba(216, 216, 216, 0);
                font-size: 125px;
                -webkit-text-stroke: 2px rgba(102, 154, 196, 1);
                text-align: center;
                font-family: NovaBattle;
                opacity: 0.5;
                letter-spacing: 9px;
            }
        }
        .item-video{
            width: 1139px;
            height: 567px;
            position: relative;
            .video-bg{
                width: 100%;
                position: absolute;
                z-index: 2;
                img{
                    height: 100%;
                }
            }
            .video-play-con{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                transform: perspective(100px) rotateX(1.5deg) scale(0.8);
                .video-play{
                    width: 99%;
                    height: 99%;
                    object-fit:cover;
                }
                .play-btn-con{
                    width: 99%;
                    height: 99%;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
            }
        }
    }
    .pagination-con{
        display: flex;
        align-items: center;
        .pagination {
            display: flex;
            margin: 0 20px;
            .my-bullet {
                background: url(../assets/home/swiper-slide.png) no-repeat;
                background-size: 100% 100%;
                width: 96px;
                height: 11px;
            }
            .my-bullet-active {
                background: url(../assets/home/swiper-slide-active.png) no-repeat;
                background-size: 100% 100%;
                width: 96px;
                height: 11px;
            }
        }
        .swiper-button-prev,.swiper-button-next{
            display: flex;
        }
    }
    .play-con{
        .title{
            margin-top: 62px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .title-bg{
position: relative;
    z-index: 1;
    color: rgba(216, 216, 216, 0);
    font-size: 120px;
    font-family: NovaBattle;
    letter-spacing: 2px;
    opacity: 0.75;
    -webkit-text-stroke: 2px rgba(113, 153, 192, 0.25);
            }
            .title-top{
font-family: NovaBattle;
    position: absolute;
    font-size: 45px;
    font-weight: 800;
    color: #8ec4f9;
    letter-spacing: 10px;
    text-shadow: 0px 0px 40px #8ec4f9;
            }
        }
        .item-play{
            width: 1029px;
            position: relative;
            .game-play-btn{
    position: absolute;
    bottom: 25px;
    width: 215px;
    right: 172px;
    transform: translateY(15%);
    z-index: 1;
    display: flex;
            }
        }
    }
    .role-con{
        .title{
            margin-top: 62px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .title-bg{
                position: relative;
                z-index: 1;
                color: rgba(216, 216, 216, 0);
                font-size: 120px;
                font-family: NovaBattle;
letter-spacing: 2px;
opacity: 0.75;
                -webkit-text-stroke: 2px rgba(113, 153, 192, 0.25);
            }
            .title-top{
font-family: NovaBattle;
    position: absolute;
    font-size: 45px;
    font-weight: 800;
    color: #8ec4f9;
    letter-spacing: 10px;
    text-shadow: 0px 0px 40px #8ec4f9;
            }
        }
        .item-role-con{
            width: 1179px;
            .swiper-item{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .role-item{
                    width: 284px;
                    height: 466px;
                    img{
                        height: 100%;
                    }
                }
            }
            .pagination-con{
                display: flex;
                justify-content: center;
                margin-top: 50px;
            }
        }
    }
    .shiba-con{
        width: 1270px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .shiba-txt-left{
            width: 526px;
            // margin-right: 55px;
            .txt-title{
                position: relative;
                margin-bottom: 46px;
                .title-top{
                    display: flex;
                }
                .title-bottom{
                    position: relative;
                    color: rgba(255, 164, 9, 1);
                    font-size: 28px;
                    text-shadow: 0px 0px 20px #ffa409;
                        margin-top: -10px;
                    // font-family: PingFangSC-Semibold;
                    font-family: NovaBattle;
                    white-space: nowrap;
                    letter-spacing: 2.5px;
                    line-height: 33px;
                    text-align: left;
                }
            }
            .txt-content{
                .content-top{
                    font-size: 18px;
                    // font-family: BlenderPro-Heavy, BlenderPro;
                    font-family: NovaBattle;
                    font-weight: 800;
                    color: #FFFFFF;
                    line-height: 25px;
                    margin-bottom: 42px;
                }
                .content-mid{
                    width: 167px;
                    height: 8px;
                    background: #FFA409;
                    margin-bottom: 42px;
                }
                .content-bottom{
                    font-size: 18px;
                    // font-family: BlenderPro-Heavy, BlenderPro;
                    font-family: NovaBattle;
                    opacity: 0.5;
                    font-weight: 800;
                    color: #FFFFFF;
                    line-height: 22px;
                }
            }
        }
        .shiba-txt-right{
            display: flex;
            align-items: center;
        }
        .left-icon1,.left-icon2,.right-icon1,.right-icon2{
            position: absolute;
            display: flex;
        }
        .left-icon1{
            top: 260px;
            left: 70px;
                box-sizing: border-box;
    padding-top: 20px;
        }
        .left-icon2{
            left: 0;
            bottom: 210px;
        }
        .right-icon1{
            right: 0;
            top: 140px;
        }
        .right-icon2{
            right: 0;
            bottom: 110px;
            transform: translateX(50%);
        }
    }
    .links-con{
        .title{
            margin-top: 62px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .title-bg{
position: relative;
    z-index: 1;
    color: rgba(216, 216, 216, 0);
    font-size: 120px;
    font-family: NovaBattle;
    letter-spacing: 2px;
    opacity: 0.75;
    -webkit-text-stroke: 2px rgba(113, 153, 192, 0.25);
            }
            .title-top{
font-family: NovaBattle;
    position: absolute;
    font-size: 45px;
    font-weight: 800;
    color: #8ec4f9;
    letter-spacing: 10px;
    text-shadow: 0px 0px 40px #8ec4f9;
            }
        }
        .item-links-con{
            margin-top: 120px;
            .links-item-con{
                display: flex;
                justify-content: center;
                .links-item{
                    width: 250px;
                }
                .links-item-mid{
                    margin: 0 55px;
                }
            }
            .links-inp-con{
                background: url(../assets/home/links-inp-con-bg.png) no-repeat;
                background-size: 100% 100%;
                width: 1173px;
                height: 200px;
                margin-top: 150px;
                .inp-title{
                    font-size: 28px;
                    // font-family: BlenderPro-Heavy, BlenderPro;
                    font-family: NovaBattle;
                    font-weight: 800;
                    color: #6F99BE;
                    line-height: 34px;
                    display: flex;
                    justify-content: center;
    margin-top: 35px;
                }
                .inp-con{
                    margin-top: 30px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    .inp{
                        width: 564px;
                        height: 57px;
                        font-family: NovaBattle;
                        font-size: 24px;
                    }
                    input{
                        width: 100%;
                        height: 100%;
                        outline-style: none;
                        border: 1px solid #43576Fcc;
                        border-right: 0;
                        border-radius: 4px;
                        padding: 10px 16px;
                        font-size: 30px;
                        color: #131313;
                        background: #FFFFFF;
                    }
                    input:focus{
                        border-color: #66afe9;
                        outline: 0;
                        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
                    }
                    .inp-btn{
                        width: 164px;
                        height: 57px;
                        margin-left: -2px;
                        background: #6F99BE;
                        font-size: 28px;
                        // font-family: BlenderPro-Heavy, BlenderPro;
                        font-family: NovaBattle;
                        font-size: 24px;
                        letter-spacing: 2px;
                        font-weight: 800;
                        color: #FFFFFF;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 0 4px 4px 0;
                    }
                }
            }
        }
    }
    .community-con{
        align-items: center;
        justify-content: center;
        .community-logo{
            width: 750px;
        }
        .community-download{
    width: 425px;
    justify-content: space-around;
            .community-download-app,.community-download-google{
                    width: 200px;
    height: 65px;
            }
        }
        .community-item-con{
            width: 500px;
            justify-content: space-between;
            margin-top: 67px;
            .community-icon{
                display: flex;
                margin-left: 10px;
    margin-right: 10px;
            }
        }
        .community-copyright{
            margin-top: 95px;
            p{
                text-align: center;
                font-size: 18px;
                // font-family: BlenderPro-Heavy, BlenderPro;
                font-family: NovaBattle;
                font-weight: 800;
                color: #FFFFFF;
                line-height: 29px;
            }
        }
        .community-bottom-menus{
            margin-top: 18px;
            width: 683px;
            justify-content: space-between;
            .menus-nav{
                display: flex;
                    align-items: center;
                .menus-nav-icon{
                    margin-right: 13px;
                        width: 10px;
    height: 15px;
                }
                .menus-nav-txt{
                    font-size: 18px;
                    // font-family: BlenderPro-Heavy, BlenderPro;
                    font-family: NovaBattle;
                    font-weight: 800;
                    color: #6D9BBF;
                }
            }
        }
    }
}
</style>