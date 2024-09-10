<script lang="ts" setup>
import { useRoute } from 'vue-router';
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import { inject, ref } from 'vue';
import { ProductType } from 'app/types/product';
import { useProduct } from 'src/stores/product';
import ProductImageSlide from 'src/components/Buyer/Product/ProductImageSlide.vue';
import ReviewsComp from 'src/components/Buyer/Product/ReviewsComp.vue';
import { useCartStore } from 'src/stores/cart';

const cart = useCartStore();
const { id: productId } = useRoute().params;
const api = inject('api');

const product = ref<ProductType>({
  id: 0,
  name: '',
  img: '',
  category: '',
  price: 0,
  rate: {
    count: 0,
    rate: 0,
  },
  suppose_price: 0,
  discount_price: 0,
  desc: '',
});

(async function get_product_details() {
  const [p, ps] = await Promise.all([
    (await fetch(`${api}/api/single_product?id=${productId}`)).json(),
    (await fetch(`${api}/api/related_product?id=${productId}`)).json(),
  ]);
  product.value = p.status == 'success' ? p.data : [];
  useProduct().products = ps.status == 'success' ? ps.data : [];
})();

const carting = ref(1);
</script>

<template>
  <q-page>
    <BreadCrumbs :title="product.name" :navs="['shop', 'product details']" />

    <q-card flat square>
      <q-card-section class="">
        <div
          class="tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-y-6 container tw-mx-auto tw-my-6"
        >
          <div class="">
            <ProductImageSlide :product="product" />
          </div>
          <div class="tw-my-10 md:tw-px-5">
            <div class="">
              <h1 class="tw-text-3xl tw-font-bold tw-uppercase tw-mb-4">
                {{ product.name }}
              </h1>

              <div class="tw-mb-5">
                <q-rating
                  v-model="product.rate.rate"
                  size="medium"
                  readonly
                  color="grey-5"
                  color-selected="black"
                />
                <div class="tw-inline tw-ms-6 tw-font-semibold tw-text-lg">
                  ( {{ product.rate.count }} Reviews)
                </div>
              </div>

              <div class="tw-mb-5">
                <del class="text-h6 text-weight-bold text-grey-6"
                  ><span v-naira="product.suppose_price"></span
                ></del>
                <span
                  v-naira="product.discount_price"
                  class="text-h5 text-weight-bold tw-ps-5"
                ></span>
              </div>

              <div class="tw-mb-5">
                <p class="text-body1 tw-text-balance tw-font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  corporis dolor adipisci alias explicabo dicta ad labore quasi
                  sunt facilis.
                </p>
              </div>

              <div class="tw-flex tw-flex-wrap tw-gap-5">
                <div class="tw-flex tw-border tw-w-fit">
                  <q-btn
                    icon="add"
                    unelevated
                    color="green-5"
                    @click="carting++"
                  />
                  <q-input
                    v-model="carting"
                    standout
                    borderless
                    class="tw-w-20"
                    input-style="text-align: center"
                  />
                  <q-btn
                    icon="remove"
                    unelevated
                    color="red-5"
                    @click="carting--"
                    :disable="carting < 1"
                  />
                </div>
                <div>
                  <q-btn
                    :label="
                      cart.cart.has(product.id)
                        ? 'remove from cart'
                        : 'add to cart'
                    "
                    class="tw-h-full"
                    unelevated
                    color="green-5"
                    @click="
                      () =>
                        cart.cart.has(product.id)
                          ? cart.remove(product.id)
                          : cart.add(product.id, carting)
                    "
                  />
                </div>
                <q-btn icon="favorite" class="tw-bg-slate-100" unelevated />
              </div>
            </div>

            <q-separator class="tw-my-12" />
            <div>
              <q-list>
                <q-item>
                  <q-item-section class="text-weight-bold tw-uppercase"
                    >Stock</q-item-section
                  >
                  <q-item-section>(20)</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="tw-uppercase tw-font-bold"
                    >Delivery</q-item-section
                  >
                  <q-item-section class="tw-capitalize"
                    >free for all user around abuja, FREE PICKUP IF YOU PLACE
                    YOUR ORDER TODAY
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="tw-uppercase tw-font-bold"
                    >Weight</q-item-section
                  >
                  <q-item-section class="tw-capitalize">50kg </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="tw-uppercase tw-font-bold"
                    >Seller</q-item-section
                  >
                  <q-item-section class="tw-capitalize"
                    ><div class="tw-uppercase tw-font-semibold">
                      Okigwe Ebube Ireneaus
                      <q-btn icon="link" color="lime-5" flat dense to="" />
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="md::tw-p-10">
          <div class="container tw-mx-auto">
            <h3 class="tw-font-bold tw-uppercase tw-mb-3">Reviews</h3>
            <div>
              <ReviewsComp />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="css" scoped></style>
