<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import ProductCategorySlide from 'src/components/Buyer/Product/ProductCategorySlide.vue';
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';
import MiniSingleProduct from 'src/components/Buyer/Product/MiniSingleProduct.vue';
import { inject, ref } from 'vue';
// import { useProduct } from 'src/stores/product';
import { ProductType } from 'app/types/product';

const latest_slide_ref: any = ref(null);

const top_slide_ref: any = ref(null);

const review_slide_ref: any = ref(null);
const api = inject('api');

const products = ref<ProductType[] | null>(null);

// get product from server
(async function () {
  try {
    const req = await fetch(`${api}/api/product?limit=20`);
    const res = await req.json();
    if (res.status != 'success') {
      console.error('Failed Fetching product from api', res.code);
      return;
    }
    products.value = res.data;
  } catch (error) {
    console.error('ErrorFetching product from api', error);
  }
})();

function latest_slide_next() {
  latest_slide_ref.value.swiper.slideNext();
}
function latest_slide_prev() {
  latest_slide_ref.value.swiper.slidePrev();
}

function top_slide_next() {
  top_slide_ref.value.swiper.slideNext();
}
function top_slide_prev() {
  top_slide_ref.value.swiper.slidePrev();
}

function review_slide_next() {
  review_slide_ref.value.swiper.slideNext();
}
function review_slide_prev() {
  review_slide_ref.value.swiper.slidePrev();
}
</script>

<template>
  <q-page class="tw-p-4 lg:tw-p-0">
    <div class="hero__item">
      <div class="hero__text">
        <span>FRUIT FRESH</span>
        <h2>Vegetable <br />100% Organic</h2>
        <p>Free Pickup and Delivery Available</p>
        <a href="#" class="primary-btn">SHOP NOW</a>
      </div>
    </div>

    <product-category-slide />

    <!-- Featured Section Begin -->
    <section class="featured spad">
      <div class="container tw-mx-auto">
        <div class="tw-flex tw-justify-center">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Product</h2>
            </div>
          </div>
        </div>
        <div
          class="tw-grid lg:tw-grid-cols-4 sm:tw-grid-cols-2 tw-gap-4 tw-p-3 lg:tw-p-0"
        >
          <single-product
            :id="product.id"
            :bgImg="product.img"
            :name="product.name"
            :s_price="product.suppose_price"
            :d_price="product.discount_price"
            :class="product.category"
            :rating="product.rate.rate"
            v-for="product in products"
            :key="product.id"
          />
        </div>
      </div>
    </section>
    <!-- Featured Section End -->

    <!-- Banner Begin -->
    <div class="banner">
      <div class="container tw-mx-auto">
        <div class="tw-grid md:tw-grid-cols-2 tw-gap-3">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <q-img src="img/banner/banner-1.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <q-img src="img/banner/banner-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner End -->

    <!-- Latest Product Section Begin -->
    <section class="tw-mt-20">
      <div class="container tw-mx-auto">
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2">
          <div class="">
            <div class="latest-product__text">
              <div class="tw-flex tw-justify-between q-px-md">
                <h4>Latest Products</h4>
                <div>
                  <q-btn
                    icon="arrow_back_ios"
                    dense
                    unelevated
                    size="sm"
                    @click="latest_slide_prev"
                  ></q-btn>
                  &nbsp;
                  <q-btn
                    icon="arrow_forward_ios"
                    dense
                    unelevated
                    size="sm"
                    @click="latest_slide_next"
                  ></q-btn>
                </div>
              </div>
              <swiper-container
                :loop="true"
                :autoplay="true"
                slides-per-view="1"
                :speed="1000"
                class=""
                ref="latest_slide_ref"
              >
                <swiper-slide class="">
                  <mini-single-product
                    v-for="product in products?.slice(0, 4)"
                    :key="product.id"
                    :name="product.name"
                    :price="product.price"
                    :bgImg="product.img"
                  />
                </swiper-slide>
                <swiper-slide class="">
                  <mini-single-product
                    v-for="product in products?.slice(4, 8)"
                    :key="product.id"
                    :name="product.name"
                    :price="product.price"
                    :bgImg="product.img"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <div class="latest-product__text">
                <div class="row justify-between q-px-md">
                  <h4>Top Rated</h4>
                  <div>
                    <q-btn
                      icon="arrow_back_ios"
                      dense
                      unelevated
                      size="sm"
                      @click="top_slide_prev"
                    ></q-btn>
                    &nbsp;
                    <q-btn
                      icon="arrow_forward_ios"
                      dense
                      unelevated
                      size="sm"
                      @click="top_slide_next"
                    ></q-btn>
                  </div>
                </div>
                <swiper-container
                  :loop="true"
                  :autoplay="true"
                  slides-per-view="1"
                  :speed="1000"
                  class="latest-product__slider"
                  ref="top_slide_ref"
                >
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in products?.slice(0, 4)"
                      :key="product.id"
                      :name="product.name"
                      :price="product.price"
                      :bgImg="product.img"
                    />
                  </swiper-slide>
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in products?.slice(4, 8)"
                      :key="product.id"
                      :name="product.name"
                      :price="product.price"
                      :bgImg="product.img"
                    />
                  </swiper-slide>
                </swiper-container>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <div class="latest-product__text">
                <div class="row justify-between q-px-md">
                  <h4>Review Products</h4>
                  <div>
                    <q-btn
                      icon="arrow_back_ios"
                      unelevated
                      size="sm"
                      dense
                      @click="review_slide_prev"
                    ></q-btn>
                    &nbsp;
                    <q-btn
                      icon="arrow_forward_ios"
                      unelevated
                      size="sm"
                      dense
                      @click="review_slide_next"
                    ></q-btn>
                  </div>
                </div>
                <swiper-container
                  :loop="true"
                  :autoplay="true"
                  slides-per-view="1"
                  :speed="1000"
                  class="latest-product__slider"
                  ref="review_slide_ref"
                >
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in products?.slice(0, 4)"
                      :key="product.id"
                      :name="product.name"
                      :price="product.price"
                      :bgImg="product.img"
                    />
                  </swiper-slide>
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in products?.slice(4, 8)"
                      :key="product.id"
                      :name="product.name"
                      :price="product.price"
                      :bgImg="product.img"
                    />
                  </swiper-slide>
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Latest Product Section End -->
  </q-page>
</template>

<style scoped>
.hero__item {
  background-image: url('/img/hero/banner.jpg');
  background-position: center;
  background-size: cover;
}
</style>
