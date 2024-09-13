<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useCartStore } from 'src/stores/cart';
import { computed } from 'vue';
defineProps<{ menu: any[] }>();

const cart = computed(() => useCartStore());
</script>

<template>
  <div class="tw-my-12 tw-mx-5">
    <div class="tw-w-28">
      <q-img src="img/logo.png" />
    </div>

    <div class="tw-my-7">
      <div class="*:tw-inline-block tw-my-1">
        <q-btn
          icon="favorite"
          flat
          size="sm"
          :ripple="false"
          class="!tw-text-black focus:!tw-bg-transparent"
        >
          <q-badge label="0" class="btn" floating rounded></q-badge>
        </q-btn>

        <q-btn
          icon="shopping_bag"
          flat
          size="sm"
          :ripple="false"
          class="!tw-text-black focus:!tw-bg-transparent"
          to="/cart"
        >
          <q-badge :label="cart.length" floating class="btn" rounded></q-badge>
        </q-btn>

        &nbsp;&nbsp;
        <div>
          items:
          <span v-naira="cart.total_price" class="text-weight-bold"></span>
        </div>
      </div>
    </div>

    <div class="tw-mb-5">
      <q-list separator>
        <q-item
          :to="link.href"
          v-for="link in menu"
          :key="link.title"
          class="tw-my-0.5 text-weight-bold"
          exact-active-class="text-grey-6"
          active-class=""
        >
          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="tw-flex tw-gap-5 tw-px-3 tw-mb-5">
      <a href="#"><q-icon name="fa-brands fa-facebook" /></a>
      <a href="#"><q-icon name="fa-brands fa-twitter" /></a>
      <a href="#"><q-icon name="fa-brands fa-instagram" /></a>
      <a href="#"><q-icon name="fa-brands fa-youtube" /></a>
    </div>

    <div class="tw-px-3 tw-font-medium tw-text-gray-500/ tw-mb-4">
      <div class="tw-mb-3">
        <q-icon name="mail" />&nbsp; care@therawmarket.com
      </div>
      <div><q-icon name="phone" />&nbsp; +234 806 198 2520</div>
    </div>

    <div>Free shipping for goods above <span v-naira="25000"></span></div>
  </div>
</template>
