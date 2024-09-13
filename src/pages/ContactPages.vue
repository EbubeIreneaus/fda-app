<script lang="ts" setup>
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
</script>

<template>
  <q-page>
    <BreadCrumbs title="Contact Us" :navs="['Home', 'Contact Us']" />
    <div>
      <section class="" id="contact">
        <div
          class="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-16 sm:tw-px-6 lg:tw-px-8 lg:tw-py-20"
        >
          <div class="tw-mb-4">
            <div
              class="tw-mb-6 tw-max-w-3xl tw-text-center sm:tw-text-center md:tw-mx-auto md:tw-mb-12"
            >
              <p
                class="tw-text-base tw-font-semibold tw-uppercase tw-tracking-wide tw-text-blue-600"
              >
                Contact
              </p>
              <h2
                class="tw-font-heading tw-mb-4 tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white tw-text-3xl sm:tw-text-5xl"
              >
                Get in Touch
              </h2>
              <p
                class="tw-mx-auto tw-mt-4 tw-max-w-3xl tw-text-xl tw-text-gray-600 dark:tw-text-slate-400"
              >
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
          <div class="tw-flex tw-items-stretch tw-justify-center">
            <div class="tw-grid md:tw-grid-cols-2">
              <div class="tw-h-full tw-pr-6">
                <p
                  class="tw-mt-3 tw-mb-12 tw-text-lg tw-text-gray-600 dark:tw-text-slate-400"
                >
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                  scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul class="tw-mb-6 md:tw-mb-0">
                  <li class="tw-flex">
                    <div
                      class="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-bg-blue-900 tw-text-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tw-h-6 tw-w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path
                          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="tw-ml-4 tw-mb-4">
                      <h3
                        class="tw-mb-2 tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 dark:tw-text-white"
                      >
                        Our Address
                      </h3>
                      <p class="tw-text-gray-600 dark:tw-text-slate-400">
                        Block 38 julius Berger camp, kubwa
                      </p>
                      <p class="tw-text-gray-600 dark:tw-text-slate-400">
                       Abuja, Nigeria
                      </p>
                    </div>
                  </li>
                  <li class="tw-flex">
                    <div
                      class="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-bg-blue-900 tw-text-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tw-h-6 tw-w-6"
                      >
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                        ></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="tw-ml-4 tw-mb-4">
                      <h3
                        class="tw-mb-2 tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 dark:tw-text-white"
                      >
                        Contact
                      </h3>
                      <p class="tw-text-gray-600 dark:tw-text-slate-400">
                        Mobile: +234 (806) 198-2520
                      </p>
                      <p class="tw-text-gray-600 dark:tw-text-slate-400">
                        Mail: dev@ebustech.com.ng
                      </p>
                    </div>
                  </li>
                  <li class="tw-flex">
                    <div
                      class="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-bg-blue-900 tw-text-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tw-h-6 tw-w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="tw-ml-4 tw-mb-4">
                      <h3
                        class="tw-mb-2 tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 dark:tw-text-white"
                      >
                        Working hours
                      </h3>
                      <p class="tw-text-gray-600 dark:tw-text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="tw-text-gray-600 dark:tw-text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                class="tw-card tw-h-fit tw-max-w-6xl tw-p-5 md:tw-p-12"
                id="form"
              >
                <h2 class="tw-mb-4 tw-text-2xl tw-font-bold dark:tw-text-white">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div class="tw-mb-6">
                    <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                      <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                        <label
                          for="name"
                          class="tw-pb-1 tw-text-xs tw-uppercase tw-tracking-wider"
                        ></label
                        ><input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="tw-mb-2 tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-py-2 tw-pl-2 tw-pr-4 tw-shadow-md dark:tw-text-gray-300 sm:tw-mb-0"
                          name="name"
                        />
                      </div>
                      <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                        <label
                          for="email"
                          class="tw-pb-1 tw-text-xs tw-uppercase tw-tracking-wider"
                        ></label
                        ><input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="tw-mb-2 tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-py-2 tw-pl-2 tw-pr-4 tw-shadow-md dark:tw-text-gray-300 sm:tw-mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                      <label
                        for="textarea"
                        class="tw-pb-1 tw-text-xs tw-uppercase tw-tracking-wider"
                      ></label
                      ><textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="tw-mb-2 tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-py-2 tw-pl-2 tw-pr-4 tw-shadow-md dark:tw-text-gray-300 sm:tw-mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="tw-text-center">
                    <button
                      type="submit"
                      class="tw-w-full tw-bg-blue-800 tw-text-white tw-px-6 tw-py-3 tw-font-xl tw-rounded-md sm:tw-mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244273872!2d7.367464835462986!3d9.024416368785994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1726014110014!5m2!1sen!2sng"  height="500" style="border:0; width: 100%;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  </q-page>
</template>
