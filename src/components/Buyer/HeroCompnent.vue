<script lang="ts" setup>
</script>

<template>
  <section class="container tw-mx-auto tw-mb-5 tw-px-5 tw-pt-4 lg:tw-px-0 lg:tw-pt-0">
    <div class="tw-grid lg:tw-grid-cols-12  tw-gap-5 tw-items-center">
      <div class=" lg:tw-col-span-3">
        <q-btn-dropdown
          icon="menu"
          label="all categories"
          class="tw-w-full tw-py-3 text-weight-bold text-white btn"
          unelevated
          square
          stretch
          dropdown-icon="keyboard_arrow_down"
        ></q-btn-dropdown>
      </div>

      <div class=" lg:tw-col-span-6 tw-flex tw-items-center">
        <input type="search" placeholder="what do you want?" class="tw-flex-grow tw-border tw-py-3 tw-px-2" />
        <q-btn label="search" unelevated square class="btn tw-py-3 text-white"/>
      </div>

      <div class=" tw-py-2 lg:tw-col-span-3 tw-flex tw-justify-normal md:tw-justify-end lg:tw-justify-normal tw-gap-4">
        <div class="tw-w-fit tw-py-3 tw-px-4 tw-rounded-full tw-bg-slate-50">
          <q-icon name="phone"/>
        </div>
        <div>
          <h5 class="text-weight-bold">+234 806 198 2520</h5>
          <div>24/7 customer support</div>
        </div>
      </div>
    </div>
  </section>
</template>
