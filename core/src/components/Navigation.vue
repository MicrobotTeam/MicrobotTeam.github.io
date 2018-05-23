<template>
    <div id="navigation" :class="{'activeNav':changeNavBg}">
        <nav class="navbar" role="navigation">
            <div class="container-fluid"> 
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar" style="background: #fff;"></span>
                        <span class="icon-bar" style="background: #fff;"></span>
                        <span class="icon-bar" style="background: #fff;"></span>
                    </button>
                    <a class="navbar-brand" href="/">
                        <div class="logo"></div>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav navbar-right" style="font-size: 16px;">
                        <li><a href="/" :class="{'activeLink': navIndex==1}">首页</a></li>
                        <li>
                            <a href="javascript:;" @click="toAnchor('#openSource')" v-if="toSingle">开源项目</a>
                            <a href="https://github.com/MicrobotTeam" target="_blank" v-else>开源项目</a>
                        </li>
                        <li>
                            <a href="javascript:;" @click="toAnchor('#blogs')" v-if="toSingle">博客</a>
                            <router-link :to="{path:'/blogs'}" v-else :class="{'activeLink': navIndex==2}">博客</router-link>
                        </li>
                        <li><router-link :to="{path:'/about'}" :class="{'activeLink': navIndex==3}">关于</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        data () {
            return {
                toSingle: false,
                navIndex: 1
            }
        },
        created () {
        },
        methods: {
            toAnchor(el){
                $('html, body').animate({scrollTop: $(el).offset().top}, 500)
            }
        },
        props: {
            changeNavBg: {
                type: Boolean,
                default: {
                    bg: false
                }
            }
        },
        created() {
            var vm = this;
            var path = vm.$route.path;
            path == '/' ? vm.toSingle = true : vm.toSingle = false;
            console.log(path);
            switch(path){
                case '/':
                    vm.navIndex = 1;
                    break;
                case '/blogs':
                    vm.navIndex = 2;
                    break;
                case '/about':
                    vm.navIndex = 3;
                    console.log(vm.navIndex )
                    break;
                default:
                    vm.navIndex = 1;
                    break;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../styles/public.less';
    @import '../styles/variable.less';
    #navigation {
        z-index: 999;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        .logo {
            width: 100px;
            height: 26px;
            background: url('../static/imgs/logo1.png') center center no-repeat;
        }
        .activeLink{
            color: @primary-color !important;
        }
        .navbar-nav{
            a{
                font-weight: bolder;
            }
            a:hover{
                color: @primary-color;
            }
        }
        &.activeNav{
            background: white; /* 一些不支持背景渐变的浏览器 */  
            // background:-moz-linear-gradient(top, red, rgba(0, 0, 255, 0.5));  
            // background:-webkit-gradient(linear, 0 0, 0 bottom, from(#333333), to(rgba(255, 255, 255, 0.5))); 
            border-bottom: 1px solid #ccc;
            box-shadow: 0 0 4px rgba(0,0,0,.5);
            .navbar-header{
                .icon-bar{
                    background: black !important;
                }
                .logo{
                     background: url('../static/imgs/logo2.png') center center no-repeat;
                }
            }
            .navbar-nav{
                a{
                    color: black;
                    &:hover{
                        color: @primary-color;
                    }
                }
            }
        }
    }
</style>