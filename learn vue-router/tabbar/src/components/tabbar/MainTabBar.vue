<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="rgb(255,130,0)">
      <img slot="item-icon" src="~assets/img/tabber/tabbar-home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/tabbar-home-active.svg" alt="">
      <div slot="item-text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="rgb(255,130,0)">
      <img slot="item-icon" src="~assets/img/tabber/tabbar-category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/tabbar-category-active.svg" alt="">
      <div slot='item-text'>category</div>
    </tab-bar-item>
    <tab-bar-item path="/shopCart" activeColor="rgb(255,130,0)">
      <img slot="item-icon" src="~assets/img/tabber/tabbar-shopCart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/tabbar-shopCart-active.svg" alt="">
      <div slot='item-text'>shopCart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="rgb(255,130,0)">
      <img slot="item-icon" src="~assets/img/tabber/tabbar-profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/tabbar-profile-active.svg" alt="">
      <div slot='item-text'>profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
