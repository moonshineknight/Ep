<template lang="html">
  <div class="index1_purchase">
    <h1>
      <b>每日疯抢</b>
      <span>more></span>
      <!-- <b v-text="title"></b> -->
      <!-- <span class="yo-ico"><router-link :to="`/list/${uri}`">more></router-link></span> -->
    </h1>
    <ul>
      <li v-for="(item,index) in boardList" >
        <img src="https://img2.epetbar.com/nowater/2017-03/16/18/c33d87b6a9b82b9d55eaae892aac8f18.jpg" alt="">
        <b v-text=""></b>
      </li>
    </ul>
  </div>
</template>

 <script>
import utilAxios from '../../utils/axios'
export default {
  data(){
    return {
      boardList: [],
      title: ''
    }
  },

  props: ['uri'],

  mounted: function () {
    let that = this
    utilAxios.get({
      url: 'http://localhost:3000/swiper_index',
      method: 'get',
      callback: function (res) {
        //console.log(res.data)
        that.title = res.data.title
        that.boardList = that.boardList.concat(res.data.subjects)

      }
    })
  }
}
</script>
