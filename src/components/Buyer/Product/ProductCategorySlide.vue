<script lang="ts" setup></script>

<template>
  <!-- Categories Section Begin -->
  <div class="container tw-mx-auto">
    <swiper-container
      class="categories q-my-xl"
      :slides-per-view="
        $q.screen.lg ? 5 : $q.screen.md ? 4 : $q.screen.sm ? 2 : 1
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
    </swiper-container>
  </div>
  <!-- Categories Section End -->
</template>
