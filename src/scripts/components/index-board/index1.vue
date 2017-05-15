<template lang="html">
  <div class="border-index1">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in datasource " :key='index'>
        <img :src="item.image" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="baokuan">
      <img src="https://img2.epetbar.com/nowater/2017-03/16/18/c33d87b6a9b82b9d55eaae892aac8f18.jpg" alt="">
      <ul class ="b_nav">
        <li><img src="../../../assets/logo.png" alt=""><span>E宠团</span></li>
        <li><img src="../../../assets/logo.png" alt=""><span>品牌特卖</span></li>
        <li><img src="../../../assets/logo.png" alt=""><span>体验馆</span></li>
        <li><img src="../../../assets/logo.png" alt=""><span>清仓特价</span></li>
        <li><img src="../../../assets/logo.png" alt=""><span>热买礼包</span></li>
      </ul>
    </div>
    <Purchase />
    <div class="index1_hot">
      <div class="">
        <img :src="datasource_hot[0].center_image.image" alt="">
      </div>
      <div class="">
        <div class="">
          <img :src="datasource_hot[0].content_images[0][0].image" alt="">
        </div>
        <div class="">
          <img :src="datasource_hot[0].content_images[1][0].image" alt="">
          <img :src="datasource_hot[0].content_images[1][1].image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'

import utilAxios from "../../utils/axios"
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import Purchase from './index1_purchase.vue'
Vue.component('Purchase',Purchase)

export default {
  data(){
    return{
      datasource:[],
      datasource_hot:[]
    }
  },
  mounted: function mounted(){
    let that = this
    //do something after mounting vue instance

    utilAxios.get({
      url:'http://localhost:3000/swiper_index',
      method:'get',
      callback:function(res){
        //console.log(res.data)
        that.datasource = that.datasource.concat(res.data.datas[0].value)
        that.datasource_hot = that.datasource_hot.concat(res.data.datas[5])
      }
    })
  }
}
</script>

<style lang="css">
</style>
