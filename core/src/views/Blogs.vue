<template>
    <div id="blogs">
        <navigation :changeNavBg='changeNavBg'></navigation>
        <div class="blogs container">
            团队的博客
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
                hasBgColor: true
            }
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
//   @media (min-width: 680px){
//         #about{
//             .time{
//                 font-size: 18px;
//             }
//         }
//     }
//     @media (max-width: 680px){
//         #about{
//             .time{
//                 font-size: 14px;
//             }
//         }
//     }
    #blogs{
        .blogs{
            padding-top: 70px;
        }
    }
</style>