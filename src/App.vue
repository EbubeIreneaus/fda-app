<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';

defineOptions({
  name: 'App',
});

const api = process.env.DEV ? 'http://127.0.0.1:8000' : '';

provide('api', api);
</script>
