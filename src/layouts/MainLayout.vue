<template>
  <q-layout view="lhh lpR lff">
    <q-header class="tw-bg-[#FFFFFF] text-black">
      <!-- toppest side -->
      <div class="tw-bg-[#F5F5F5] tw-hidden lg:tw-block">
        <div
          class="tw-flex tw-justify-between container tw-mx-auto tw-py-3 text-black"
        >
          <div class="tw-flex tw-justify-between tw-gap-5">
            <div>care@themarket.com.g</div>
            <q-separator vertical />
            <div>Free Shipping for all Order of ₦10,000.00</div>
          </div>

          <div class="tw-flex tw-justify-between tw-gap-5">
            <ul class="tw-flex tw-gap-4">
              <a href=""
                ><li><q-icon name="fa-brands fa-facebook" /></li
              ></a>
              <a href=""
                ><li><q-icon name="fa-brands fa-tiktok" /></li
              ></a>
              <a href=""
                ><li><q-icon name="fa-brands fa-instagram" /></li
              ></a>
              <a href=""
                ><li><q-icon name="fa-brands fa-linkedin" /></li
              ></a>
            </ul>
            <q-separator vertical />
            <div>
              <router-link to="">
                <q-icon name="account_circle" /> &nbsp;
                <span>Login</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- header nav -->
      <nav>
        <div
          class="container tw-flex tw-justify-between tw-items-center tw-mx-auto lg:tw-py-4 tw-p-4"
        >
          <div class="tw-w-24"><q-img src="/img/logo.png" /></div>

          <ul class="*:tw-inline *:tw-px-4 tw-hidden lg:tw-block">
            <li
              v-for="menu in MenuLinks"
              :key="menu.title"
              class="text-weight-bold spacing"
            >
              <RouterLink
                :to="menu.href"
                exact-active-class="text-grey-6"
                class="hover:tw-text-gray-500"
                >{{ menu.title }}</RouterLink
              >
            </li>
          </ul>

          <div class="*:tw-inline-block tw-hidden lg:tw-block">
            <q-btn
              icon="favorite"
              flat
              size="sm"
              :ripple="false"
              class="!tw-text-black focus:!tw-bg-transparent"
            >
              <q-badge label="2" class="btn" floating rounded></q-badge>
            </q-btn>

            <q-btn
              icon="shopping_bag"
              flat
              size="sm"
              :ripple="false"
              class="!tw-text-black focus:!tw-bg-transparent"
              to="/cart"
            >
              <q-badge
                :label="cart.length > 9 ? '9+' : cart.length"
                floating
                class="btn"
                rounded
              ></q-badge>
            </q-btn>

            &nbsp;&nbsp;
            <div>
              items:
              <span v-naira="Number(cart.total_price)" class=" text-weight-bold"></span>
            </div>
          </div>

          <div class="tw-border tw-rounded-md lg:tw-hidden">
            <q-btn icon="menu" @click="toggleLeftDrawer" unelevated />
          </div>
        </div>
      </nav>

      <div class="*:tw-inline-block tw-my-1 tw-text-center lg:tw-hidden">
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

      <HeroCompnent />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <SidebarComp :menu="MenuLinks" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="tw-bg-[#F3F6FA] tw-text-gray-600">
      <FooterComp />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import HeroCompnent from 'src/components/Buyer/HeroCompnent.vue';
import SidebarComp from 'src/components/Buyer/SidebarComp.vue';
import FooterComp from 'src/components/FooterComp.vue';
import { useCartStore } from 'src/stores/cart';
import { computed, ref} from 'vue';

defineOptions({
  name: 'MainLayout',
});

const cart = computed(() => useCartStore());
const MenuLinks = [
  { title: 'HOME', href: '/', icon: '', sublink: [] },
  { title: 'SHOP', href: '/shop', icon: '', sublink: [] },
  { title: 'ABOUT', href: '/about', icon: '', sublink: [] },
  { title: 'BLOG', href: '/blog', icon: '', sublink: [] },
  { title: 'CONTACT', href: '/contact', icon: '', sublink: [] },
];

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>
