<template>
    <div id="footer" :class="{'hasBgColor':!hasBgColor}">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 text-center">
                    <p class="linkTitle">友情链接:</p>
                    <a href="http://linghit.vip/androidblog/index.html" class="link" target="_blank">灵机Android团队</a>
                    <a href="http://linghit.vip/mmc/" class="link" target="_blank">灵机文化社区</a>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 text-center">
                    <router-link to="/" class="copyright">
                        <img src="../static/imgs/logo2.png" alt="logo" class="logo">
                        <p>Copyright&nbsp;&copy;&nbsp;2018 Microbot Team 版权所有</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'foot',
    data () {
        return {

        }
    },
    props: {
        hasBgColor: {
            type: Boolean,
            default: {
                bg: true
            }
        }
    }
}
</script>

<style lang="less" scoped>
    #footer{
        margin-top: 38px;
        width: 100%;
        padding:38px 0 30px 0;
        font-weight: bolder;
        background: #eee;
        color: #666;
        &.hasBgColor{
            // background: none;
            opacity: .4;
            .link,.linkTitle,.copyright{
                color: #fff;
            }
        }
        .link{
            color: #666;
            display: block;
            margin-bottom: 8px;
            font-weight: normal;
        }
        .copyright{
            color: #666;
            font-weight: normal;
        }
        .logo{
            display: block;
            width: 100px;
            height: 48px;
            margin: 0 auto;
            padding: 0 0 10px 0;
        }
    }
</style>