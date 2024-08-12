<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<style scoped>
.hero__item {
  background-image: url('/img/hero/banner.jpg');
  background-position: center;
  background-size: cover;
}
</style>

<template>
  <hero-compnent />
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
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Featured Product</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" data-filter="*">All</li>
              <li data-filter=".oranges">Oranges</li>
              <li data-filter=".fresh-meat">Fresh Meat</li>
              <li data-filter=".vegetables">Vegetables</li>
              <li data-filter=".fastfood">Fastfood</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <single-product
          :bgImg="product.img"
          :name="product.name"
          :price="product.price"
          :class="product.class"
          v-for="product in products"
          :key="product.id"
        />
      </div>
    </div>
  </section>
  <!-- Featured Section End -->

  <!-- Banner Begin -->
  <div class="banner">
    <div class="container">
      <div class="row">
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
  <section class="latest-product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="latest-product__text">
           <div class="row justify-between q-px-md">
            <h4>Latest Products</h4>
            <div>
              <button @click="latest_slide_prev"><q-icon name="arrow_back_ios" /></button>
              &nbsp;
              <button @click="latest_slide_next"><q-icon name="arrow_forward_ios" /></button>
            </div>
           </div>
            <swiper-container
              :loop="true"
              :autoplay="true"
              slides-per-view="1"
              :speed="1000"
              class="latest-product__slider"
              ref="latest_slide_ref"
            >
              <swiper-slide class="latest-prdouct__slider__item">
                <mini-single-product
                  v-for="product in products.slice(0, 4)"
                  :key="product.id"
                  :name="product.name"
                  :price="product.price"
                  :bgImg="product.img"
                />
              </swiper-slide>
              <swiper-slide class="latest-prdouct__slider__item">
                <mini-single-product
                  v-for="product in products.slice(4, 8)"
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
            <h4>Top Rated </h4>
            <div>
              <button @click="top_slide_prev"><q-icon name="arrow_back_ios" /></button>
              &nbsp;
              <button @click="top_slide_next"><q-icon name="arrow_forward_ios" /></button>
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
              <swiper-slide class="latest-prdouct__slider__item">
                <mini-single-product
                  v-for="product in products.slice(0, 4)"
                  :key="product.id"
                  :name="product.name"
                  :price="product.price"
                  :bgImg="product.img"
                />
              </swiper-slide>
              <swiper-slide class="latest-prdouct__slider__item">
                <mini-single-product
                  v-for="product in products.slice(4, 8)"
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
              <button @click="review_slide_prev"><q-icon name="arrow_back_ios" /></button>
              &nbsp;
              <button @click="review_slide_next"><q-icon name="arrow_forward_ios" /></button>
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
              <swiper-slide class="latest-prdouct__slider__item">
                <mini-single-product
                  v-for="product in products.slice(0, 4)"
                  :key="product.id"
                  :name="product.name"
                  :price="product.price"
                  :bgImg="product.img"
                />
              </swiper-slide>
              <swiper-slide class="latest-prdouct__slider__item">
                <mini-single-product
                  v-for="product in products.slice(4, 8)"
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
</template>

<script setup lang="ts">

import HeroCompnent from 'src/components/Buyer/HeroCompnent.vue';
import ProductCategorySlide from 'src/components/Buyer/Product/ProductCategorySlide.vue';
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';
import MiniSingleProduct from 'src/components/Buyer/Product/MiniSingleProduct.vue';
import { ref } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const latest_slide_ref: any = ref(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const top_slide_ref: any = ref(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const review_slide_ref: any = ref(null)


let products = ref([
  {
    id: 1,
    name: 'water yam',
    img: 'img/featured/feature-1.jpg',
    class: 'oranges fastfood vegetables',
    price: 2000,
  },
  {
    id: 2,
    name: 'local Rice',
    img: 'img/featured/feature-2.jpg',
    class: 'oranges fresh-meat',
    price: 10100,
  },
  {
    id: 3,
    name: 'Vegetables',
    img: 'img/featured/feature-3.jpg',
    class: 'vegetables fastfood',
    price: 4300,
  },
  {
    id: 4,
    name: 'Groundnut',
    img: 'img/featured/feature-4.jpg',
    class: 'fastfood oranges',
    price: 17350,
  },
  {
    id: 5,
    name: 'Red oil',
    img: 'img/featured/feature-5.jpg',
    class: 'fresh-meats, vegetables',
    price: 1800,
  },
  {
    id: 6,
    name: 'Rice',
    img: 'img/featured/feature-6.jpg',
    class: 'oranges, vegitables',
    price: 3200,
  },
  {
    id: 7,
    name: 'Beans',
    img: 'img/featured/feature-7.jpg',
    class: 'fresh-meat, fast-foods',
    price: 10500,
  },
  {
    id: 8,
    name: 'bush rat',
    img: 'img/featured/feature-8.jpg',
    class: 'fresh-meats, fast-foods',
    price: 12000,
  },
]);

function latest_slide_next(){
  latest_slide_ref.value.swiper.slideNext()
}
function latest_slide_prev(){
  latest_slide_ref.value.swiper.slidePrev()
}

function top_slide_next(){
  top_slide_ref.value.swiper.slideNext()
}
function top_slide_prev(){
  top_slide_ref.value.swiper.slidePrev()
}

function review_slide_next(){
  review_slide_ref.value.swiper.slideNext()
}
function review_slide_prev(){
  review_slide_ref.value.swiper.slidePrev()
}
</script>
