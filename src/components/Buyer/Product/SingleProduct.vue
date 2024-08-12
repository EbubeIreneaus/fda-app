<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// import { onMounted } from 'vue';

defineProps<{ bgImg: string, name: string, price: number }>();
</script>

<template>
  <div class="col-lg-3 col-md-4 col-sm-6 mix">
    <div class="featured__item">
      <div
        class="featured__item__pic set-bg"
        :style="`background-image: url(${bgImg})`"
      >
        <ul class="featured__item__pic__hover">
          <li>
            <a href="#"><q-icon name="favorite_border"></q-icon></a>
          </li>
          <li>
            <a href="#"><q-icon name="visibility"></q-icon></a>
          </li>
          <li>
            <a href="#"><q-icon name="shopping_cart"></q-icon></a>
          </li>
        </ul>
      </div>
      <div class="featured__item__text">
        <h6>
          <a href="#">{{ name }}</a>
        </h6>
        <h5 v-naira="price"></h5>
      </div>
    </div>
  </div>
</template>
