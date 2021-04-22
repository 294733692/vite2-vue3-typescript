<template>
  <main class="main-container">
    <div class="top">
      顶部
    </div>
    <div class="bottom">底部</div>
    <div class="right">
      <div class="content">
        <el-button type='text'>内容区域</el-button>
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">

</style>
