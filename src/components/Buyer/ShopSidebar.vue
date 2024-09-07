<script lang="ts" setup>
import { reactive } from 'vue';
let category = [
  {label: 'Grain', val: 'grain', count: 20},
  {label: 'Rice', val: 'rice', count: 20},
  {label: 'Meat', val: 'meat', count: 20},
  {label: 'Livestock', val: 'livestock', count: 20},
  {label: 'Oil', val: 'oil', count: 20},
]
const filter = reactive({
  category: [],
  priceRange: {min: 5000, max: 100000}
})
</script>

<template>
  <div class="tw-max-w-[300px] tw-w-full tw-bg-slate-50 tw-py-5">
    <q-card class="tw-w-56 tw-mx-auto tw-bg-transparent" flat square>
      <q-card-section class="text-weight-bolder text-body1 tw-uppercase tw-ps-7 !tw-py-2">Category </q-card-section>
      <q-card-section class="tw-py-2">
        <q-list class="text-weight-bold *:tw-py-0 *:!tw-pb-0">
          <q-item v-for="cat in category" :key="cat.label">
            <q-item-section>
              <q-checkbox v-model="filter.category" :label="cat.label" :val="cat.val" />
            </q-item-section>
            <!-- <q-item-section>Grain</q-item-section> -->
            <q-item-section side> {{ cat.count }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="tw-w-56 tw-mx-auto tw-bg-transparent" flat square>
      <q-card-section class="text-weight-bolder text-body1 tw-uppercase tw-ps-7 !tw-py-2">Price</q-card-section>
      <q-card-section>
        <q-range v-model="filter.priceRange" :min="500" :max="200000" :inner-min="500" :inner-max="200000" :step="500"  />
        <div>
          <div class="text-caption">between: <span v-naira="filter.priceRange.min"></span> to <span v-naira="filter.priceRange.max" ></span></div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
