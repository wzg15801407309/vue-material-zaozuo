<template>
  <div id="app">
      <!-- 排除详情页 详情页每次进入都要是新的 exclude="Detail"-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mainTabBar />
  </div>
</template>
<script>
import mainTabBar from "@/components/mainTabBar";
export default {
  name: "app",
  components: {
    mainTabBar
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
