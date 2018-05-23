<template>
    <div id="about">
        <navigation :changeNavBg='changeNavBg'></navigation>
        <div class="about container">
            <div class="row brief">
                <div class="col-md-12 col-xs-12">
                    <h2 class="text-center">关于我们</h2>
                </div>
                <div class="col-md-12 col-xs-12">
                    <p class="detail">Microbot Team 是什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-xs-12 eventSingle" v-for="(event , key) in events" :key="key">
                    <img :src="event.img_src" :alt="event.time">
                    <span class="time">{{event.time}}&nbsp;团队合影</span>
                </div>
            </div>
        </div>
        <foot :hasBgColor='hasBgColor'></foot>
    </div>
</template>

<script>
    import navigation from '@/components/Navigation'
    import foot from '@/components/Foot'
    export default {
        name: 'about',
        data () {
            return {
                changeNavBg: true,
                hasBgColor: true,
                events:[
                    {
                        time: '2018-03',
                        img_src: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/0a12a9ed5a84c6-1200x400.jpg'
                    },
                    {
                        time: '2017-03',
                        img_src: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/0a12a9ed5a84c6-1200x400.jpg'
                    },
                    {
                        time: '2016-03',
                        img_src: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/0a12a9ed5a84c6-1200x400.jpg'
                    },
                    {
                        time: '2015-03',
                        img_src: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/0a12a9ed5a84c6-1200x400.jpg'
                    }
                ]
            }
        },
        props: {

        },
        created() {

        },
        components: {
            navigation,
            foot
        }
    }
</script>

<style lang="less" scoped>
  @media (min-width: 680px){
        #about{
            .time{
                font-size: 18px;
            }
        }
    }
    @media (max-width: 680px){
        #about{
            .time{
                font-size: 14px;
            }
        }
    }
    #about{
        .about{
            padding-top: 60px;
            .brief{
                margin-bottom: 8px;
                .detail{
                    text-indent: 20px;
                }
            }
            .eventSingle{
                position: relative;
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                    margin-top: 18px;
                    margin-bottom: 30px;
                }
                .time{
                    position: absolute;
                    color: red;
                    top: 18px;
                    left: 50%;
                    width: 40%;
                    display: block;
                    text-align: center;
                    margin-left: -20%;
                    padding: 4px 0;
                    border: 1px solid #ccc;
                    border-top: 0;
                    border-bottom-right-radius: 2em;
                    border-bottom-left-radius: 2em;
                    box-shadow: 0 0 2px rgba(0,0,0,.1);
                    color: #666;
                }
            }
        }
    }
</style>