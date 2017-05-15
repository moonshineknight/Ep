<template lang="html">
  <div>
  	<div class="classes-border">
    <mt-swipe :auto="4000" class="classes-swipe">
      <mt-swipe-item v-for="(item,index) in datasource " :key='index'>
        <img :src="item.image" alt="">
      </mt-swipe-item>
    </mt-swipe> 
      </div>
    <ul class="classes_list">
    	<li><a href=""><img src="https://img1.epetbar.com/2017-04/11/10/e33b764ba0196b3e2a55d867c44ad8f9.png" alt="" /></a></li>
    	<li><a href=""><img src="https://img1.epetbar.com/2017-04/11/10/e33b764ba0196b3e2a55d867c44ad8f9.png" alt="" /></a></li>
    	<li><a href=""><img src="https://img1.epetbar.com/2017-04/11/10/fcb2072fe2cedbc4c3e08261a21e5af3.png"/></a></li>
    	<li><a href=""><img src="https://img1.epetbar.com/2017-04/11/10/fcb2072fe2cedbc4c3e08261a21e5af3.png" alt="" /></a></li>
    	<li><a href=""><img src="https://img1.epetbar.com/2017-04/11/10/fcb2072fe2cedbc4c3e08261a21e5af3.png" alt="" /></a></li>
    </ul>
		<div class="classses_h3">
			<div>
				<i>
					<img src="https://static.epetbar.com/static_wap/appmall/main/knowledge/center_lunbo.png" alt="" />
				</i>
				<span>我们都觉得有用</span>
			</div>
		</div>
		<ul class="clas_h3list">
			<!--<li>
				<a href=""><img src="https://img2.epetbar.com/nowater/2017-05/08/12/888e1021f6b9965509e6f2c787b311c5.jpg"/>
					<p>第一次养狗需要准备些什么</p>
					<p>刚到家</p>
				</a>
			</li>
			<li>
				<a href=""><img src="https://img2.epetbar.com/nowater/2017-04/24/8/0aa2e7961a0dfc3c6b5301d0b1caf6de.jpg"/>
				<p>新来的狗狗爱生病，请小心呵护</p>
				<p>刚到家</p>
			</a>
			</li>
			<li>
				<a href=""><img src="https://img2.epetbar.com/nowater/2017-03/28/16/a3a5fcadc47f6870c9ef92f8ac1ea8d7.jpg"/>
					<p>刚到家，这4件事情绝对不能做</p>
					<p>刚到家</p>
				</a>
			</li>
			<li><a href=""><img src="https://img2.epetbar.com/nowater/2017-03/27/14/94802c02964d35a48b33f457545c4d9c.jpg"/>
					<p>幼犬大小便怎么教</p>
					<p>刚到家</p>
				</a>
			</li>-->
		</ul>
		
		
		
  </div>
</template>

<script>
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'

import utilAxios from "../../utils/axios"
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
//      console.log(res.data.datas)
        that.datasource = that.datasource.concat(res.data.datas[0].value)

      }

    })

  }

}


</script>

<style lang="css">
</style>


