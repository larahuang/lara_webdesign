<script setup lang="ts">
  import{ref,onMounted} from 'vue'

//const title =ref<string>('Home');
  onMounted(() => {
   // console.log('頁面使用:',import.meta.env.VITE_API_BASIC_URL)
  })
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

