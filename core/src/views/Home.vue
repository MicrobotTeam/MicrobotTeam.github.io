d<template>
    <div id="home">
        <navigation :changeNavBg='changeNavBg'></navigation>
        <banner></banner>
        <div id="openSource">
            <div class="container text-center desc">
                <h3>OpenSource/开源项目</h3>
                <p>开源项目，我们一直在路上...</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12 openSourceItem" v-for="(item , index) in openSource">
                        <article class="text-center">
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                            <button type="button" class="btn btn-default forDetail" disabled v-if="item.noLink">跳转详情页</button>
                            <a type="button" class="btn btn-default forDetail" :href="item.link" target="_blank" v-else>跳转详情页</a>
                        </article>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row text-center">
                    <a type="button" class="btn btn-default forMore" href="https://github.com/MicrobotTeam" target="_blank"> 跳转到团队github
                    </a>
                </div>
            </div>
        </div>
        <div id="blogs">
            <div class="container text-center desc">
                <h3>Blogs/博客</h3>
                <p>不忘初心，我们正在慢慢地成长...</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12 blogItem" v-for="(item , index) in sixBlogs">
                        <article class="text-center">
                            <img :src="item.cover" alt="" class="cover_img">
                            <h3>{{item.title}}</h3>
                            <a type="button" class="btn btn-default forDetail" :href="item.link" target="_blank">跳转详情页</a>
                        </article>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row text-center">
                    <a type="button" class="btn btn-default forMore" href="https://microbotteam.github.io/blog/" target="_blank"> 更多博客
                    </a>
                </div>
            </div>
        </div>
        <foot :hasBgColor='hasBgColor'></foot>
    </div>
</template>

<script>
    import navigation from '@/components/Navigation'
    import banner from '@/components/Banner'
    import foot from '@/components/Foot'
    import apiPath from '@/service/apiPath'
    export default {
        name: 'home',
        data () {
            return {
                changeNavBg: false,
                hasBgColor: true,
                openSource: [
                    {
                        noLink: false,
                        link: 'https://github.com/MicrobotTeam/MicrobotTeam.github.io',
                        title: 'MicrobotTeam',
                        desc: '关于团队的github开源仓库'
                    },
                    {
                        noLink: false,
                        link: 'https://github.com/MicrobotTeam/frontend-attention',
                        title: 'Frontend Attention',
                        desc: '团队MicrobotTeam的前端注意事项'
                    },
                    {
                        noLink: true,
                        link: '#',
                        title: 'Title',
                        desc: '正在努力中...'
                    },
                ],
                sixBlogs: [
                    // {
                    //     cover: 'path/to/cover_img',
                    //     title: '标题',
                    //     link: 'path/to/link',
                    // }
                ],
                default_cover: 'https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/810b72726fb9f1-350x220.png'
            }
        },
        components: {
            navigation,
            banner,
            foot
        },
        created() {
            var vm = this;
            vm.$nextTick(function(){
                $(window.document).scroll(function(){
                    let top = $(document).scrollTop();
                    if(top >=50){
                        vm.changeNavBg = true;
                    }else{
                        vm.changeNavBg = false;
                    }
                })
            });

            // 获取最新六条博客
            vm.$fetch(apiPath.GET_BLOGS,{
                current: 1,
                per_page: 6
            }).then(data => {
                if(data.code && data.code == 1){
                    let lists = data.data.list;
                    lists.forEach((list,index)=>{
                        if(list.cover && list.cover != ''){
                            vm.sixBlogs.push({
                                cover: list.cover,
                                title: list.title,
                                link: list.link
                            });
                        }else{
                            vm.sixBlogs.push({
                                cover: vm.default_cover,
                                title: list.title,
                                link: list.link
                            });
                        }
                    })

                }else{
                    console.log('请求数据出错');
                }
            })
        }
    }
</script>

<style lang="less" scoped>
    @import '../styles/variable.less';
    @media (min-width: 680px){
        #home{
            .cover_img{
                width: 96%;
                height: 180px;
            }
        }
    }
    @media (max-width: 680px){
        #home{
            .cover_img{
                width: 94%;
                height: 140px;
            }
        }
    }
    #home{
        width: 100% !important;
        .forMore{
            padding: 6px 20px;
            margin-top: 16px;
            background: #eee;
        }
        .forDetail{
            width: 94%;
            background: #eee;
            margin-top: 10px;
            // color: @primary-color;
        }
        #openSource,#blogs{
            padding-top: 60px;
            .desc{
                padding-bottom: 16px;
            }
            .openSourceItem{
                margin-bottom: 16px;
                padding: 0;
                article{
                    width: 94%;
                    margin-left: 3%;
                    padding: 30px 0;
                    border: 1px solid #eee;
                    box-shadow: 0 0 4px rgba(0,0,0,.5);
                    h3{
                        color: #666;
                    }
                }
            }
            .blogItem{
                padding: 0;
                margin-bottom: 36px;
                article{
                    width: 94%;
                    margin-left: 3%;
                    border: 1px solid #eee;
                    padding: 10px 0 20px 0;
                    box-shadow: 0 0 4px rgba(0,0,0,.5);
                    h3{
                        overflow: hidden;
                        white-space: nowrap; 
                        text-overflow:ellipsis;
                        color: #666;
                    }
                }
            }
        }
    }
</style>