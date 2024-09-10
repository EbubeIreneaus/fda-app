<script lang="ts" setup>
defineProps<{ title: string; navs: string[] }>();
</script>

<template>
  <div
    class="tw-bg-[url('/img/breadcrumb.jpg')] tw-bg-cover tw-bg-center tw-h-40"
  >
    <div class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
      <div>
        <div class="text-h4 text-weight-bolder text-white tw-uppercase text-center">
          {{ title }}
        </div>
        <div>
          <q-breadcrumbs
            separator-color="white"
            active-color="white"
            class="tw-flex tw-justify-center tw-text-slate-300"
          >
            <q-breadcrumbs-el
              v-for="nav in navs"
              :key="nav"
              :label="nav.toUpperCase()"
              class="tw-font-semibold"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
  </div>
</template>
