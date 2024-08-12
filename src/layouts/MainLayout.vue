<template>
  <!-- Humberger Begin -->
  <div class="humberger__menu__overlay"></div>
  <div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
      <a href="#"><img src="img/logo.png" alt="" style="height:50px; max-width:100px"/></a>
    </div>
    <div class="humberger__menu__cart">
      <ul>
        <li>
          <a href="#"><q-icon name="fa fa-heart"></q-icon> <span>1</span></a>
        </li>
        <li>
          <a href="#"><q-icon name="fa fa-shopping-bag"></q-icon> <span>3</span></a>
        </li>
      </ul>
      <div class="header__cart__price">item: <span v-naira="1500"></span></div>
    </div>
    <div class="humberger__menu__widget">
      <div class="header__top__right__language">
        <img src="img/language.png" alt="" />
        <div>English</div>
        <span class="arrow_carrot-down"></span>
        <ul>
          <li><a href="#">Spanis</a></li>
          <li><a href="#">English</a></li>
        </ul>
      </div>
      <div class="header__top__right__auth">
        <a href="#"><q-icon name="account_circle"></q-icon> Login</a>
      </div>
    </div>
    <nav class="humberger__menu__nav mobile-menu">
      <ul>
        <li class="active"><a href="./index.html">Home</a></li>
        <li><a href="./shop-grid.html">Shop</a></li>
        <li>
          <a href="#">Pages</a>
          <ul class="header__menu__dropdown">
            <li><a href="./shop-details.html">Shop Details</a></li>
            <li><a href="./shoping-cart.html">Shoping Cart</a></li>
            <li><a href="./checkout.html">Check Out</a></li>
            <li><a href="./blog-details.html">Blog Details</a></li>
          </ul>
        </li>
        <li><a href="./blog.html">Blog</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap"></div>
    <div class="header__top__right__social">
      <a href="#"><q-icon name="fa fa-facebook"></q-icon></a>
      <a href="#"><q-icon name="fa fa-twitter"></q-icon></a>
      <a href="#"><q-icon name="fa fa-linkedin"></q-icon></a>
      <a href="#"><q-icon name="fa fa-pinterest-p"></q-icon></a>
    </div>
    <div class="humberger__menu__contact">
      <ul>
        <li><q-icon name="mail"></q-icon>care@therawmarket.com.ng</li>
        <li>Free Shipping for all Order of <span v-naira="10000"></span></li>
      </ul>
    </div>
  </div>
  <!-- Humberger End -->
  <!-- Header Section Begin -->
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li><q-icon name="fa fa-mail" />care@therawmarket.com.ng</li>
                <li>
                  Free Shipping for all Order of <span v-naira="10000"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="#"><q-icon name="fa fa-facebook"></q-icon></a>
                <a href="#"><q-icon name="fa fa-twitter"></q-icon></a>
                <a href="#"><q-icon name="fa fa-linkedin"></q-icon></a>
                <a href="#"><q-icon name="fa fa-pinterest-p"></q-icon></a>
              </div>
              <div class="header__top__right__language">
                <img src="img/language.png" alt="" />
                <div>English</div>
                <q-icon name="expand_more"></q-icon>
                <ul>
                  <li><a href="#">Spanis</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </div>
              <div class="header__top__right__auth">
                <a href="#"><q-icon name="account_circle"></q-icon> Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <a href="./index.html"><img src="/img/logo.png" alt="" style="height:50px; max-width:100px" /></a>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li class="" v-for="link in MenuLinks" :key="link.title">
                <router-link :to="link.href">{{ link.title }}</router-link>
              </li>
              <!-- <li><a href="#">Pages</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> -->
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <a href="#"><q-icon name="favorite_border"></q-icon> <span>1</span></a>
              </li>
              <li>
                <a href="#"
                  ><q-icon name="shopping_bag"></q-icon> <span>3</span></a
                >
              </li>
            </ul>
            <div class="header__cart__price">
              item: <span v-naira="100"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="humberger__open">
        <q-icon name="menu"></q-icon>
      </div>
    </div>
  </header>
  <!-- Header Section End -->

  <router-view />

  <!-- Footer Section Begin -->
  <footer class="footer spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer__about">
            <div class="footer__about__logo">
              <a href="./index.html"><img src="img/logo.png" alt="" style="max-height: 70px"/></a>
            </div>
            <ul>
              <li>Address: Bwari Abuja</li>
              <li>Phone: +234 806 198 2520</li>
              <li>Email: care@therawmarket.com.ng</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
          <div class="footer__widget">
            <h6>Useful Links</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">About Our Shop</a></li>
              <li><a href="#">Secure Shopping</a></li>
              <li><a href="#">Delivery infomation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Our Sitemap</a></li>
            </ul>
            <ul>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Innovation</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="footer__widget">
            <h6>Join Our Newsletter Now</h6>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <form action="#">
              <input type="text" placeholder="Enter your mail" />
              <button type="submit" class="site-btn">Subscribe</button>
            </form>
            <div class="footer__widget__social">
              <a href="#"><q-icon name="fa fa-facebook"></q-icon></a>
              <a href="#"><q-icon name="fa fa-instagram"></q-icon></a>
              <a href="#"><q-icon name="fa fa-twitter"></q-icon></a>
              <a href="#"><q-icon name="fa fa-pinterest"></q-icon></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer__copyright">
            <div class="footer__copyright__text">
              <p>
                {{ new Date().getFullYear() }} All rights reserved |
                <q-icon name="fa fa-heart" aria-hidden="true"></q-icon>
                <router-link to="/" target="_blank">Colorlib</router-link>
              </p>
            </div>
            <div class="footer__copyright__payment">
              <img src="img/payment-item.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

defineOptions({
  name: 'MainLayout',
});

const MenuLinks = [
  { title: 'HOME', href: '/', icon: '', sublink: [] },
  { title: 'SHOP', href: '/shop', icon: '', sublink: [] },
  { title: 'ABOUT', href: '/about', icon: '', sublink: [] },
  { title: 'BLOG', href: '/blog', icon: '', sublink: [] },
  { title: 'CONTACT', href: '/contact', icon: '', sublink: [] },
];

onMounted(()=>{
  // humbuger menu
  document.querySelector('.humberger__open')?.addEventListener('click', ()=>{
    document.querySelector('.humberger__menu__wrapper')?.classList.add('show__humberger__menu__wrapper');
    document.querySelector('.humberger__menu__overlay')?.classList.add('active');
    document.querySelector('body')?.classList.add('over_hid');
  })

  document.querySelector('.humberger__menu__overlay')?.addEventListener('click', ()=>{
    document.querySelector('.humberger__menu__wrapper')?.classList.remove('show__humberger__menu__wrapper');
    document.querySelector('.humberger__menu__overlay')?.classList.remove('active');
    document.querySelector('body')?.classList.remove('over_hid');
  })

})
</script>
