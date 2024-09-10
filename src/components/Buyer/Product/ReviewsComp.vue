<template>
  <section class="tw-py-5 tw-antialiased">
    <div class="tw-max-w-2xl lg:tw-px-4">
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
        <h2 class="tw-text-lg lg:tw-text-2xl tw-font-bold">Discussion (20)</h2>
      </div>

      <!-- Comment Form -->
      <form class="tw-mb-6">
        <div class="tw-px-4 tw-mb-2">
          <q-rating size="medium" color="grey-5" color-selected="black" v-model="rate" />
        </div>

        <div class="tw-px-4 tw-mb-2">
          <q-editor
            class="tw-px-0 tw-w-full tw-text-sm"
            v-model="content"
            required
          />
        </div>

        <!-- Replace v-btn with q-btn from Quasar -->
        <q-btn
          type="submit"
          color="primary"
          class="tw-inline-flex tw-font-medium  tw-mx-4"
        >
          Post comment
        </q-btn>
      </form>

      <!-- Comments Section -->
      <article class="tw-p-6 tw-text-base">
        <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
          <div class="tw-flex tw-items-center">
            <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-font-semibold">
              <img
                class="tw-mr-2 tw-w-6 tw-h-6 tw-rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />Michael Gough
            </p>
            <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
            </p>
          </div>
          <q-btn
            flat
            icon="more_vert"
            class="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-font-medium tw-text-center"
            type="button"
          >
            <span class="tw-sr-only">Comment settings</span>
          </q-btn>
        </footer>
        <p class="tw-text-gray-500 dark:tw-text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge of the design tools is as important as the creation of the design strategy.
        </p>
        <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
          <q-btn flat class="tw-flex tw-items-center tw-text-sm tw-font-medium tw-hover:underline">
            <svg
              class="tw-mr-1.5 tw-w-3.5 tw-h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </q-btn>
        </div>
      </article>

      <article class="tw-p-6 tw-mb-3 tw-ml-6 lg:tw-ml-12 tw-text-base">
        <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
          <div class="tw-flex tw-items-center">
            <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-font-semibold">
              <img
                class="tw-mr-2 tw-w-6 tw-h-6 tw-rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />Jese Leos
            </p>
            <p class="tw-text-sm">
              <time pubdate datetime="2022-02-12" title="February 12th, 2022">Feb. 12, 2022</time>
            </p>
          </div>
          <q-btn
            flat
            icon="more_vert"
            class="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-font-medium tw-text-center"
            type="button"
          >
            <span class="tw-sr-only">Comment settings</span>
          </q-btn>
        </footer>
        <p class="tw-text-gray-500 dark:tw-text-gray-400">
          Much appreciated! Glad you liked it ☺️
        </p>
        <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
          <q-btn flat class="tw-flex tw-items-center tw-text-sm tw-font-medium">
            <svg
              class="tw-mr-1.5 tw-w-3.5 tw-h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </q-btn>
        </div>
      </article>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';

  const rate = ref(1)
  const content = ref('<i><strong>Write your review here!</strong></i>')
</script>

<style lang="scss" scoped></style>
