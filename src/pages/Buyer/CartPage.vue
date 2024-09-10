<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import { useCartStore } from 'src/stores/cart';
import { vAutoAnimate } from '@formkit/auto-animate'
import { ref } from 'vue';

const { cart_product: items } = storeToRefs(useCartStore());
const { remove } = useCartStore()


const couponCode = ref('')
</script>

<template>
  <q-page>
    <BreadCrumbs title="Cart" :navs="['Home', 'Shop', 'Cart Section']" />
    <div class="tw-my-10 tw-mx-auto q-px-md">
      <div >
        <div class="!tw-overflow-x-auto">
          <table class="tw-w-[1000px] lg:tw-w-full" v-auto-animate >
            <tr class="tw-text-left tw-font-semibold tw-text-xl tw-mb-5">
              <th class="tw-px-6">Image</th>
              <th class="tw-px-6">Product</th>
              <th class="tw-px-6">Unit Price</th>
              <th class="tw-px-6">Quantity</th>
              <th class="tw-px-6">Total</th>
              <th class="tw-px-6">Action</th>
            </tr>
            <br />
            <tr v-for="ct in items" :key="ct.product.id" class="tw-border">
              <td class="tw-py-7 tw-font-semibold tw-px-3 !tw-w-48">
                <q-img :src="ct.product.img" class="tw-w-24" />
              </td>
              <td class="tw-py-7 tw-font-semibold tw-px-3">
                <span class="tw-text-xl tw-font-medium tw-capitalize">{{
                  ct.product.name
                }}</span>
              </td>
              <td>
                <span
                  v-naira="ct.product.discount_price"
                  class="tw-text-lg tw-font-semibold"
                ></span>
              </td>
              <td>
                <div class="tw-flex tw-border tw-w-fit">
                  <q-btn
                    icon="add"
                    unelevated
                    color="green-5"
                    @click="ct.no_of_item++"
                  />
                  <q-input
                    v-model="ct.no_of_item"
                    :error="ct.no_of_item < 1"
                    standout
                    borderless
                    class="tw-w-20"
                    input-style="text-align: center"
                  />
                  <q-btn
                    icon="remove"
                    unelevated
                    color="red-5"
                    @click="ct.no_of_item--"
                    :disable="ct.no_of_item <= 1"
                  />
                </div>
              </td>
              <td>
                <span
                  v-naira="ct.product.discount_price * ct.no_of_item"
                  class="tw-text-lg tw-font-semibold"
                ></span>
              </td>
              <td>
                <q-btn icon="cancel" unelevated @click="remove(ct.product.id)"
                  ><q-tooltip>remove {{ ct.product.name }} from cart</q-tooltip></q-btn
                >
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="tw-my-10 lg:tw-flex tw-justify-between">
        <div class="tw-w-full">
          <input v-model="couponCode" placeholder="coupon code"  class="tw-inline-block tw-border tw-py-2.5 tw-px-3 tw-w-[250px]" />  &nbsp;
          <q-btn label="apply" unelevated square class="tw-px-14 tw-py-2.5" color="grey-7" />
        </div>

        <div class="tw-w-full tw-mt-10">
          <q-card class="tw-max-w-lg tw-w-full tw-bg-slate-100 tw-py-7" flat square >
            <q-card-section>
              <q-list>
                <div class="tw-text-xl tw-font-extrabold">Cart Total</div>
                <q-item class="tw-font-semibold text-body1">
                  <q-item-section>Amount</q-item-section>
                  <q-item-section side><span v-naira="useCartStore().total_price"></span></q-item-section>
                </q-item>
                <q-item class="tw-font-semibold text-body1">
                  <q-item-section>Delevery</q-item-section>
                  <q-item-section side><span v-naira="2500"></span></q-item-section>
                </q-item>
                <q-item class="tw-font-bold text-h6">
                  <q-item-section>Total (+VAT)</q-item-section>
                  <q-item-section side><span v-naira="useCartStore().total_price + 2500 + 700"></span></q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
            <q-card-section>
              <div class="tw-flex tw-justify-end">
                <q-btn label="checkout" to="/checkout" flat square class="tw-px-14 tw-bg-gray-600 tw-p-2 tw-text-white"/>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>
