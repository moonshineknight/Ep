<template>
  <div class="m-index">
    <header class="yo-header yo-header-a">
      <h2 class="title">榜单*电影*</h2>
      <span class="regret yo-ico">&#xf0013</span>
    </header>

    <section class="main">
      <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag="li" to="/board" active-class="active" class="yo-ico">
          <span>&#xe62d;<b>首页</b></span>
        </router-link>
        <router-link tag="li" to="/search" active-class="active" class="yo-ico">
          <span>&#xe686;<b>搜索</b></span>
        </router-link>
        <router-link tag="li" to="/cart" active-class="active" class="yo-ico">
          <span>&#xe609;<b>购物车</b></span>
        </router-link>
        <router-link tag="li" to="/user" active-class="active" class="yo-ico">
          <span>&#xe609;<b>我的</b></span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>

module.exports = {

}
</script>
