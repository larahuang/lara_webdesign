<template>
<h1>{{title}}</h1>
</template>

<script setup lang="ts">
  import{ref,onMounted} from 'vue'

const title =ref<string>('Home');
  onMounted(() => {
   // console.log('頁面使用:',import.meta.env.VITE_API_BASIC_URL)
  })
</script>