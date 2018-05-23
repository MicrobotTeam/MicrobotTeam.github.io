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
                    <div class="col-md-3 col-sm-6 col-xs-12 openSourceItem" v-for="(item , index) in openSource">
                        <a :href="item.path">
                            <article class="text-center">
                                <h2>{{item.title}}</h2>
                                <p>{{item.desc}}</p>
                            </article>
                        </a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row text-center">
                    <button type="button" class="btn btn-default forMore"> 更多开源&nbsp;&gt;
                    </button>
                </div>
            </div>
        </div>
        <div id="blogs">
            <div class="container text-center desc">
                <h3>Blogs/博客</h3>
                <p>不完初心，慢慢地成长...</p>
            </div>
            <div class="container">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 blogItem" v-for="(item , index) in openSource">
                        <article class="text-center">
                            <h2>{{item.title}}</h2>
                            <p>{{item.desc}}</p>
                            <a type="button" class="btn btn-default"> 详情&nbsp;&gt;</a>
                        </article>
                    </div>
                </div>
            </div>
            </div>
            <div class="container">
                <div class="row text-center">
                    <button type="button" class="btn btn-default forMore"> 更多博客&nbsp;&gt;
                    </button>
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
    export default {
        name: 'home',
        data () {
            return {
                changeNavBg: false,
                hasBgColor: true,
                openSource: [
                    {
                        path: '/',
                        title: 'TITLE1 HERE',
                        desc: 'content is here...'
                    },
                    {
                        path: '/',
                        title: 'TITLE2 HERE',
                        desc: 'content is here...'
                    },
                    {
                        path: '/',
                        title: 'TITLE3 HERE',
                        desc: 'content is here...'
                    },
                    {
                        path: '/',
                        title: 'TITLE4 HERE',
                        desc: 'content is here...'
                    }
                ]
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
                    if(top >=148){
                        vm.changeNavBg = true;
                    }else{
                        vm.changeNavBg = false;
                    }
                })
            })
        }
    }
</script>

<style lang="less" scoped>
    #home{
        width: 100% !important;
        .forMore{
            padding: 6px 20px;
            margin-top: 10px;
            background: #eee;
        }
        #openSource{
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
                    border-radius: 6px;
                }
            }
        }
        #blogs{
            padding-top: 60px;
            .desc{
                padding-bottom: 16px;
            }
            .blogItem{
                padding: 0;
                article{
                    width: 96%;
                    margin-left: 2%;
                    border: 1px solid #eee;
                    margin-bottom: 22px;
                    padding: 30px 0;
                }
            }
        }
    }
</style>