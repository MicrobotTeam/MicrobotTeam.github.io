
<template>
  <div class="banner" style="width: 100%;">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner,index) in banners" :key="index">
        <!--<router-link :to="{path:banner.path}" class="bannerBg" :class="banner.class"></router-link>-->
        <div  class="bannerBg" :class="banner.class" @click="navigateTo(banner.url,banner.class)"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'banner',
  data () {
    return {
      swiperOption:{
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        speed: 1000
      },
      banners: [
        {
          class: 'item0',
          url: 'https://microbotteam.github.io/#/about'
        },
        {
          class: 'item1',
          url: ''
        },
        {
          class: 'item2',
          url: ''
        }
      ]
    }
  },
  methods:{
    // show_banner: function () {
    //   var vm = this;
    //   vm.$getDataWithUrl('/banner.json','','',response=>{
    //     if(response.data.code == "1"){
    //       vm.banners = response.data;
    //     }else{
    //       this.$toast('banner 数据请求失败');
    //     }
    //   },'get');
    // }
    navigateTo: function(url,className){
      if(url!=''){
        window.location.href = url;
      }else{
        alert('暂时没有链接');
      }
    }
  },
  created: function() {
    // this.show_banner();
  }
}
</script>
<style lang="less" scoped>
  @media (min-width: 1200px){
    .banner{
      .bannerBg{
        height: 500px;
      }
    }
  }
  @media (max-width: 1200px){
    .banner{
      .bannerBg{
        height: 400px;
      }
    }
  }
  @media (max-width: 680px){
    .banner{
      .bannerBg{
        height:250px;
      }
    }
  }
  .banner{
    width: 100%;
    .bannerBg{
      display: block;
      width: 100%;
      cursor:pointer;
    }
    .item0{
      // background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/967c038faaf84b-1920x500.jpg') center center no-repeat;
      // background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/5303973ec1ed02-1920x500.jpg') center center no-repeat;
      background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/3f40f3bf3cfae6-1920x500.jpg') center center no-repeat;
    }
    .item1{
      // background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/fc279cb13cb149-1920x500.jpg') center center no-repeat;
      background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/967c038faaf84b-1920x500.jpg') center center no-repeat;
    }
    .item2{
      // background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/cdb12c43737bd6-1920x500.jpg') center center no-repeat;
      background: url('https://mmc-forecast.oss-cn-shanghai.aliyuncs.com/images/fc279cb13cb149-1920x500.jpg') center center no-repeat;
    }
  }
</style>