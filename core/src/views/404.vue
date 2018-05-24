<template>
    <div id="NotFound">
        <div class="navigation">
            <navigation :changeNavBg='changeNavBg'></navigation>
        </div>
        <div class="container notfound">
            <div class="row text-center">
                <h2>4&nbsp;0&nbsp;4</h2>
                <p>找不到你要的东西哦 @~@</p>
            </div>
        </div>
        <div class="footer">
            <foot :hasBgColor='hasBgColor'></foot>
        </div>
    </div>
</template>

<script>
import navigation from '@/components/Navigation'
import foot from '@/components/Foot'
export default {
    name: 'NotFound',
    data() {
        return {
            changeNavBg: false,
            hasBgColor: false
        }
    },
    components: {
        navigation,
        foot
    },
    created() {

    }
}
</script>

<style lang="less" scoped>
#NotFound{
    background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/b9d9ba411f16f5-2606x1080.jpg') center center no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .notfound{
        margin-top: 240px;
        color: #fff;
        h2{
            font-size: 62px;
        }
        p{
            font-size: 16px;
        }
    }
    .footer{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
}
</style>