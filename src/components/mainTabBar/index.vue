<template>
<div class="tab-bar">
  <md-bottom-bar >
    <md-bottom-bar-item >
      电影
    </md-bottom-bar-item>
    <md-bottom-bar-item md-icon="music_note">音乐</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="books" md-active>书籍</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="photo">图片</md-bottom-bar-item>
  </md-bottom-bar>
</div>
</template>

<script>
export default {
  name:"mainTabBar",
  components:{},
  data: () => ({
  }),
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.15);
    z-index: 10;
  }
</style>