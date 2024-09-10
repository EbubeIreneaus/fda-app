<!-- eslint-disable quotes -->
<script lang="ts" setup>
// import { ProductType } from 'app/types/product';
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';
import ShopSidebar from 'src/components/Buyer/ShopSidebar.vue';
import { useProduct } from 'src/stores/product';
// const shop = useProduct().shop
import { computed, inject, ref, watch } from 'vue';

const api = inject('api');
const products = computed(() => useProduct().shop);

let current = ref(1);
let sort_by = ref<
  'price_up' | 'price_down' | 'rating' | 'purchase' | 'location' | ''
>('');

// default fetch product
(async function () {
  try {
    const req = await fetch(`${api}/api/product?limit=20`);
    const res = await req.json();
    if (res.status != 'success') {
      console.error('Failed Fetching product from api', res.code);
      return;
    }
    useProduct().shop = res.data;
  } catch (error) {
    console.error('ErrorFetching product from api', error);
  }
})();

const sort_product = (sort_by: string) => {
  try {
    if (sort_by == 'rating') {
      return useProduct().shop?.sort((a, b) => b.rate.rate - a.rate.rate);
    }

    if (sort_by == 'price_up') {
      return useProduct().shop?.sort((a, b) => b.price - a.price);
    }

    if (sort_by == 'price_down') {
      return useProduct().shop?.sort((a, b) => a.price - b.price);
    }
  } catch (error) {
    console.error('Errorsorting product', error);
  }
};

watch(sort_by, (sort) => {
  sort_product(sort);
});
</script>

<template>
  <q-page>
    <BreadCrumbs title="shop" :navs="['home', 'shop']" />
    <div
      class="q-mx-auto tw-p-7 tw-grid lg:tw-grid-cols-4 tw-gap-y-10 tw-gap-x-4"
    >
      <div class="lg:tw-col-span-1 tw-order-2 lg:tw-order-1">
        <ShopSidebar />
      </div>
      <div class="lg:tw-col-span-3 tw-order-1 lg:tw-order-2">
        <q-toolbar class="tw-bg-slate-50 tw-mb-5" style="border-style: inset">
          <q-btn icon="list" unelevated />
          <q-btn icon="grid_view" unelevated />
          <q-toolbar-title class="text-subtitle1 tw-hidden lg:tw-inline-block"
            >we found {{ products?.length }} result</q-toolbar-title
          >
          <q-space />
          <q-btn-dropdown
            unelevated
            :label="`sort by: ${sort_by}`"
            dropdown-icon="keyboard_arrow_down"
            class="tw-border tw-bg-white tw-px-10 tw-py-2"
          >
            <q-list>
              <q-item
                clickable
                v-ripple
                v-close-popup
                @click="sort_by = 'price_up'"
              >
                <q-item-section>Price &uparrow;</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                v-close-popup
                @click="sort_by = 'price_down'"
              >
                <q-item-section>Price &downarrow;</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                v-close-popup
                @click="sort_by = 'rating'"
              >
                <q-item-section>Rating</q-item-section>
              </q-item>
              <!-- <q-item clickable v-ripple v-close-popup @click="sort_by = 'location'">
                <q-item-section>Location</q-item-section>
              </q-item> -->
              <!-- <q-item clickable v-ripple v-close-popup @click="sort_by = 'purchase'">
                <q-item-section>Purchase</q-item-section>
              </q-item> -->
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>

        <div>
          <div
            v-if="products"
            class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-x-3 tw-gap-y-4"
          >
            <div v-for="product in products" :key="product.id" class="">
              <SingleProduct
                :id="product.id"
                :name="product?.name"
                :bg-img="product?.img"
                :d_price="product?.discount_price"
                :s_price="product?.suppose_price"
                :rating="product?.rate.rate"
              />
            </div>
          </div>
          <div class="tw-flex tw-justify-center tw-mt-12 mb-4">
            <q-pagination
              v-model="current"
              :max="10"
              :max-pages="5"
              color="grey-10"
              active-color="green-4"
              class="tw-font-semibold"
              direction-links
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
