<script lang="ts" setup>
defineProps<{ bgImg: string, name: string, price: number }>();
</script>

<template>
  <router-link to="#" class="q-pa-sm text-black ">
      <q-img :src="bgImg" alt="" style="height: 100px; width: 100px"  />
    <div class="ctx">
      <h6>{{ name }}</h6>
      <span v-naira="price" class="tw-font-semibold"></span>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
a{
  display: flex;
  align-items: center;
  gap: 20px;

  .ctx{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}


</style>
