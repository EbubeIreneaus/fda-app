<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// import { onMounted } from 'vue';
import { useCartStore } from 'src/stores/cart';
import { computed } from 'vue';
defineProps<{
  id: number;
  bgImg: string;
  name: string;
  rating: number;
  s_price: number;
  d_price: number;
}>();

const cart = computed(() => useCartStore());
</script>

<template>
  <q-card flat class="tw-bg-slate-50">
    <q-card-section class="overflow-hidden shop-action-card">
      <q-img :src="bgImg" class="tw-w-full tw-aspect-auto" />
      <div
        class="tw-absolute tw-w-full tw-left-0 tw-flex tw-justify-center shop-actions"
      >
        <!-- <q-btn icon="add_shopping_cart" unelevated size="sm" @click="cart.add(id)" /> -->
        <q-btn icon="favorite" unelevated size="sm" />
        <q-btn icon="visibility" unelevated size="sm" :to="`/product/${id}`" />
      </div>
    </q-card-section>
    <q-card-section class="tw-text-gray-500 tw-py-1">
      <div class="text-body1 text-weight-bold">{{ name }}</div>
      <div class="tw-line-clamp-2 tw-text-sm tw-font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
        reprehenderit.
      </div>
    </q-card-section>
    <q-card-section class="tw-py-1">
      <div class="*:tw-inline-block tw-text-center *:tw-px-1">
        <div class="tw-text-xs tw-text-black/30">
          <del><span v-naira="s_price"></span></del>
        </div>
        <div class=" tw-font-semibold text-body1">
          <span v-naira="d_price"></span>
        </div>
      </div>
      <div class="tw-flex tw-items-center tw-justify-between">
        <q-rating
          v-model="$props.rating"
          color="grey-5"
          color-selected="black"
          readonly
          size="small"
        />
        <q-btn
          icon="add_shopping_cart"
          @click="cart.add(id)"
          unelevated
          size="md"
          :text-color="cart.cart.has(id) ? 'red-5' : 'green-5'"
          :disable="cart.cart.has(id) ? true : false"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.shop-action-card {
  .shop-actions {
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    button {
      border-radius: 50%;
      padding: 10px 11px;
      transition: all 0.2s ease-in-out;
      background-color: white;
      margin: 0 5px;

      &:hover {
        transform: rotate(360deg);
      }
    }
  }

  &:hover .shop-actions {
    visibility: inherit;
    margin-top: -14%;
  }
}
</style>
