<template lang="html">
  <div class="m-board">
    <Header />

      <ul class="m-boardnav">
        <router-link tag="li" to="/board/index1" active-class="active" >首页</router-link>
        <router-link tag="li" to="/board/dogfood" active-class="active">狗粮</router-link>
        <router-link tag="li" to="/board/sales" active-class="active" >特卖</router-link>
        <router-link tag="li" to="/board/classes" active-class="active">新汪课堂</router-link>
        <router-link tag="li" to="/board/experts" active-class="active" >专家讲堂</router-link>
     </ul>

    <section class="board-main">
        <router-view></router-view>
    </section>

  </div>
</template>

<script>
import Vue from 'vue'

import Header from './header.vue'
Vue.component('Header', Header)


export default{

}

</script>
