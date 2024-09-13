<template>
  <div class="tw-bg-gradient-to-r tw-from-purple-300 tw-to-blue-200">
    <div
      class="tw-w-9/12 tw-m-auto tw-py-16 tw-min-h-screen tw-flex tw-items-center tw-justify-center"
    >
      <div
        class="tw-bg-white tw-shadow tw-overflow-hidden sm:tw-rounded-lg tw-pb-8"
      >
        <div class="tw-border-t tw-border-gray-200 tw-text-center tw-pt-8">
          <h1 class="tw-text-9xl tw-font-bold tw-text-purple-400">404</h1>
          <h1 class="tw-text-6xl tw-font-medium tw-py-8">
            Oops! Page not found
          </h1>
          <p class="tw-text-2xl tw-pb-8 tw-px-12 tw-font-medium">
            Oops! The page you are looking for may have not been added as this is a side
            project still under development
          </p>
          <button
            class="tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-500 hover:tw-from-pink-500 hover:tw-to-orange-500 tw-text-white tw-font-semibold tw-px-6 tw-py-3 tw-rounded-md tw-mr-6"
          >
            <router-link to="/">Home Page</router-link>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ErrorNotFound',
});
</script>

<style lang="css">
.text-9xl {
  font-size: 14rem;
}
@media (max-width: 645px) {
  .text-9xl {
    font-size: 5.75rem;
  }
  .text-6xl {
    font-size: 1.75rem;
  }
  .text-2xl {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .py-8 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .px-6 {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
  .mr-6 {
    margin-right: 0.5rem;
  }
  .px-12 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
