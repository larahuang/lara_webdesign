<template>
    <div>
        <h1>404</h1>
        <button @click="$router.push('/')">回首頁</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Home')
</script>