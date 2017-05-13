<template lang="html">
    <div class="dogfood">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in datasource " :key='index'>
          <img :src="item.image" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <ul>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <div class="ppte" v-for="(item,index) in datasource " :key='index'>
        <h5>品牌特卖</h5>
        <img src="item.image" alt="">
      </div>
    </div>

</template>

<script>
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'

// import { Loadmore } from 'mint-ui';
// Vue.component(Loadmore.name, Loadmore);

import utilAxios from "../../utils/axios"
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  data(){
    return{
      datasource:[]
    }
  },
  // methods:{
  //   loadTop: function (){
  //     console.log(0)
  //   },
  //   loadBottom: function () {
  //     console.log(1)
  //   },
  // },
  mounted: function mounted(){
    let that = this
    //do something after mounting vue instance
    utilAxios.get({
      url:'http://localhost:3000/swper',
      method:'get',
      callback:function(res){
        console.log(res)
        that.datasource = that.datasource.concat(res.data.datas[0].value)

      }

    })

  }

}

</script>
