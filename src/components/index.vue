<template>
  <main class="main-container">
    <div class="top">
      顶部
    </div>
    <div class="bottom">底部</div>
    <div class="right">
      <div class="content">
          内容区域
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

<style scoped>

</style>
