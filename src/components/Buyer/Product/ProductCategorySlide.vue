<script lang="ts" setup></script>

<template>
  <!-- Categories Section Begin -->
  <div class="container tw-mx-auto">
    <swiper-container
      class="categories q-my-xl"
      :slides-per-view="
        $q.screen.gt.lg ? 6 : $q.screen.gt.md ? 5 : $q.screen.gt.sm ? 4 : $q.screen.gt.xs?3 : 1
      "
      speed="500"
      :loop="true"
      space-between="30"
      :autoplay="true"
      pagination
    >
      <swiper-slide class="">
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-1.jpg')"
        >
          <h5><a href="#">Fresh Fruit</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-2.jpg')"
        >
          <h5><a href="#">Dried Fruit</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-3.jpg')"
        >
          <h5><a href="#">Vegetables</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-4.jpg')"
        >
          <h5><a href="#">drink fruits</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-5.jpg')"
        >
          <h5><a href="#">drink fruits</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-5.jpg')"
        >
          <h5><a href="#">Vegitables</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-1.jpg')"
        >
          <h5><a href="#">Rice Grain</a></h5>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-2.jpg')"
        >
          <h5><a href="#">Livestock</a></h5>
        </div>
      </swiper-slide>

    </swiper-container>
  </div>
  <!-- Categories Section End -->
</template>
