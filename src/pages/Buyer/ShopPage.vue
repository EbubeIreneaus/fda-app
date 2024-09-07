<script lang="ts" setup>
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';
import ShopSidebar from 'src/components/Buyer/ShopSidebar.vue';
import { useProduct } from 'src/stores/product';
const products = useProduct().products
</script>

<template>
  <q-page>
    <BreadCrumbs title="shop" :navs="['home', 'shop']" />
    <div class="q-mx-auto tw-p-7 tw-grid lg:tw-grid-cols-4 tw-gap-y-10">
      <div class="lg:tw-col-span-1 tw-order-2 lg:tw-order-1">
        <ShopSidebar />
      </div>
      <div class="lg:tw-col-span-3 tw-order-1 lg:tw-order-2">
        <q-toolbar
          class=" tw-bg-slate-50 tw-mb-5"
          style="border-style: inset"
        >
          <q-btn icon="list" unelevated />
          <q-btn icon="grid_view" unelevated />
          <q-toolbar-title class="text-subtitle1 tw-hidden lg:tw-inline-block"
            >we found 20 result</q-toolbar-title
          >
          <q-space />
          <q-btn-dropdown
            unelevated
            label="filter by"
            dropdown-icon="keyboard_arrow_down"
            class="tw-border tw-bg-white tw-px-10 tw-py-2"
          ></q-btn-dropdown>
        </q-toolbar>

        <div>
          <div class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-x-3 tw-gap-y-4">
            <div v-for="product in products" :key="product.id" class="">
              <SingleProduct
                :name="product.name"
                :bg-img="product.img"
                :d_price="product.discount_price"
                :s_price="product.suppose_price"
                :rating="product.rate.rate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
