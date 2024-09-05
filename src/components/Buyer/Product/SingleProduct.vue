<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// import { onMounted } from 'vue';

defineProps<{ bgImg: string; name: string; price: number }>();
</script>

<template>
  <q-card flat class="tw-bg-slate-50">
    <q-card-section>
      <q-img :src="bgImg" class="tw-w-full tw-aspect-auto" />
    </q-card-section>
    <q-card-section class="tw-text-gray-500">
      <div class="text-body1 text-weight-bold">{{ name }}</div>
      <div class="tw-line-clamp-2 tw-text-sm tw-font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
        reprehenderit.
      </div>
    </q-card-section>
    <q-card-section>
      <div class="tw-flex tw-items-center tw-justify-between">
        <div v-naira="price" class="tw-font-mono tw-font-medium"></div>
        <q-btn icon="add_shopping_cart" unelevated />
      </div>
    </q-card-section>
  </q-card>
</template>
