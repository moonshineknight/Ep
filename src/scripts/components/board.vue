<template lang="html">
  <div class="m-board">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in datasource " :key='index'>
        <img :src="item.images.large" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'

import utilAxios from "../utils/axios"
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  data(){
    return{
      datasource:[]
    }
  },
  mounted: function mounted(){
    let that = this
    //do something after mounting vue instance
    utilAxios.get({
      url:'http://localhost:3000/swper',
      method:'get',
      callback:function(res){
        that.datasource = that.datasource.concat(res.data.subjects)
      }

    })

  }

}
</script>

<style lang="css">
</style>
