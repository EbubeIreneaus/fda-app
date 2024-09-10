<script lang="ts" setup>
import { inject, reactive } from 'vue';
import { useProduct } from 'src/stores/product';
const api = inject('api');

let category = [
  { label: 'Grain', val: 'grain', count: 20 },
  { label: 'Rice', val: 'rice', count: 20 },
  { label: 'Meat', val: 'meat', count: 20 },
  { label: 'Livestock', val: 'livestock', count: 20 },
  { label: 'Oil', val: 'oil', count: 20 },
];

const filter = reactive<{
  category: string | null[];
  priceRange: { min: number; max: number };
}>({
  category: [],
  priceRange: { min: 5000, max: 100000 },
});

const Filter = async () => {
  let {
    category,
    priceRange: { min, max },
  } = filter;
  try {
    const req = await fetch(
      `${api}/api/filter_product?limit=20&cat=${
        category.length > 0 ? category : null
      }&minAmount=${min}&maxAmount=${max}`
    );
    const res = await req.json();
    if (res.status != 'success') {
      console.error('Failed Fetching product from api', res.code);
      return;
    }
    useProduct().shop = res.data;
  } catch (error) {
    console.error('ErrorFetching product from api', error);
  }
};
</script>

<template>
  <div class="tw-max-w-[300px] tw-w-full tw-bg-slate-50 tw-py-5">
    <q-toolbar class="tw-text-sm">
      <q-toolbar-title class="tw-text-sm tw-font-bold"
        >Filter By</q-toolbar-title
      >
      <q-space />
      <q-btn
        icon="filter_list"
        label="filter"
        class=""
        unelevated
        @click="Filter"
      />
    </q-toolbar>
    <q-card class="tw-w-56 tw-mx-auto tw-bg-transparent" flat square>
      <q-card-section
        class="text-weight-bolder text-body1 tw-uppercase tw-ps-7 !tw-py-2"
        >Category
      </q-card-section>
      <q-card-section class="tw-py-2">
        <q-list class="text-weight-bold *:tw-py-0 *:!tw-pb-0">
          <q-item v-for="cat in category" :key="cat.label">
            <q-item-section>
              <q-checkbox
                v-model="filter.category"
                :label="cat.label"
                :val="cat.val"
              />
            </q-item-section>
            <!-- <q-item-section>Grain</q-item-section> -->
            <q-item-section side> {{ cat.count }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="tw-w-56 tw-mx-auto tw-bg-transparent" flat square>
      <q-card-section
        class="text-weight-bolder text-body1 tw-uppercase tw-ps-7 !tw-py-2"
        >Price</q-card-section
      >
      <q-card-section>
        <q-range
          v-model="filter.priceRange"
          :min="500"
          :max="200000"
          :inner-min="500"
          :inner-max="200000"
          :step="500"
        />
        <div>
          <div class="text-caption">
            between: <span v-naira="filter.priceRange.min"></span> to
            <span v-naira="filter.priceRange.max"></span>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
