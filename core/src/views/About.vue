<template>
    <div id="about">
        <navigation :changeNavBg='changeNavBg'></navigation>
        <div class="about container">
            <div class="row brief">
                <div class="col-md-12 col-xs-12">
                    <h3 class="text-center">关于我们</h3>
                </div>
                <div class="col-md-12 col-xs-12">
                    <p class="text-center">Microbot Team 是一个热爱大前端的</p>
                    <p class="text-center">乐于分享互联网知识的</p>
                    <p class="text-center">不断探讨技术的</p>
                    <p class="text-center">成长性的</p>
                    <p class="text-center">团队</p>
                    <p class="text-center">！</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12 person" v-for="(person , key) in persons" :key="key">
                    <article class="text-center">
                        <a :href="person.blog_link" target="_blank">
                            <img :src="person.avatar" alt="avatar" class="img-circle avatar">
                            <h5 class="text-center" style="color: #666;text-decoration:underline;">{{person.nickname}}</h5>
                        </a>
                    </article>
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
                persons:[
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/bb287e48e4ff91-200x200.jpg',
                        username: "ryansuen",
                        nickname: "孙毅-子义",
                        blog_link: "https://ryansuen.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/43e649516d3380-200x200.jpg',
                        username: "terry",
                        nickname: "王轶-新义",
                        blog_link: "https://github.com/yzr006/MyMD/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/d2c3ad646fa323-200x200.jpg',
                        username: "maizsss",
                        nickname: "麦振升-知凡",
                        blog_link: "https://maizsss.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/19564e318e06e6-200x200.jpg',
                        username: "keminu",
                        nickname: "黄启鹏-诺卡",
                        blog_link: "http://keminu.com/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/ce1121f94f63f0-200x200.jpg',
                        username: "mbiao",
                        nickname: "马彪-文杰",
                        blog_link: "https://mabiao8023.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/adb94dcf1b37d5-200x200.jpg',
                        username: "linda",
                        nickname: "林子盈-灵子",
                        blog_link: "https://shuangmuyingzi.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/68135221a940e2-200x200.jpg',
                        username: "4096void",
                        nickname: "黄特金-元机",
                        blog_link: "https://4096void.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/1a4521b003b0fa-200x200.jpg',
                        username: "hupeip",
                        nickname: "胡佩-佩兰",
                        blog_link: "https://hupeip.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/668a012e73ceed-200x200.jpg',
                        username: "guozexuan",
                        nickname: "郭泽旋-长风",
                        blog_link: "https://guozexuan.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/2abdfef9ccb74a-200x200.jpg',
                        username: "coalya",
                        nickname: "朱旭-子房",
                        blog_link: "https://coalya.github.io/"
                    },
                    // {
                    //     avatar: '',
                    //     username: "uking2016",
                    //     nickname: "陈宇晴-瑾昕",
                    //     blog_link: "https://uking2016.github.io"
                    // },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/552e7215f98439-200x200.jpg',
                        username: "uniquestar88",
                        nickname: "王浩华-逐月",
                        blog_link: "https://uniquestar88.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/c2f7cc2eabb3f9-200x200.jpg',
                        username: "heyrumour",
                        nickname: "何扬-灵风",
                        blog_link: "https://heyrumour.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/7815c506c57396-200x200.jpg',
                        username: "xfh0192",
                        nickname: "谢风华-敬华",
                        blog_link: "https://xfh0192.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/c083840818c80d-200x200.jpg',
                        username: "xzhzzz",
                        nickname: "谢志华-长文",
                        blog_link: "https://xzhzzz.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/35f74aa35d4ed7-200x200.jpg',
                        username: "xdygogo",
                        nickname: "谢东寅-东来",
                        blog_link: "https://xdygogo.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/bd9b7dfc5a2b2f-200x200.jpg',
                        username: "terry-guo",
                        nickname: "郭文广-梦华",
                        blog_link: "https://terry-guo.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/788cdf37d31343-200x200.jpg',
                        username: "qq_38563845",
                        nickname: "苏建辉-建辉",
                        blog_link: "https://suhuixiao.github.io/"
                    },
                    {
                        avatar: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/315ea2822b2a59-200x200.jpg',
                        username: "reng99",
                        nickname: "庞家明-嘉明",
                        blog_link: "http://reng99.cc/"
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
    @import '../styles/variable.less';
    @media (min-width: 480px){
        #about{
            .avatar{
                width: 200px;
                height: 200px;
            }
        }
    }
    @media (max-width: 480px){
        #about{
            .avatar{
                width: 160px;
                height: 160px;
            }
        }
    }
    #about{
        .about{
            padding-top: 60px;
            .person{
                position: relative;
                margin-bottom: 30px;
                article{
                    a:hover{
                        img{
                            border: 1px solid @primary-color;
                            box-shadow: 0 0 4px rgba(0,255,0,.5);
                            -moz-transform:scale(1.05,1.05); 
                            -webkit-transform:scale(1.05,1.05); 
                            -o-transform:scale(1.05,1.05); 
                        }
                        h5{
                            color: @primary-color !important;
                        }
                    }
                    img{
                        padding: 4px;
                        border: 1px solid #eee;
                        box-shadow: 0 0 4px rgba(0,0,0,.5);
                    }
                }
                // img{
                //     display: block;
                //     width: 100%;
                //     height: auto;
                // }
            }
        }
    }
</style>