<template>
  <div class="axios">
    <el-button @click="getUserInfo">获取信息</el-button>
    {{ userInfo?.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  setup() {
    const userInfo: Ref = ref(null)
    const getUserInfo = () => {
      axios.get('/users/XPoet').then((res: { data: Object }) => {
        userInfo.value = res.data
        console.log(userInfo)
      })
    }

    return {
      userInfo,
      getUserInfo
    }
  }
})
</script>

<style scoped></style>
