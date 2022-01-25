<template>
  <header class="header" :class="{'active':scroll||menu}">
    <div
      class="container-xl d-flex justify-content-between align-items-center relative py-3"
    >
      <a href="#">
        <h1 class="header__logo">HOTEL</h1>
      </a>
      <ol class="header__menu" :class="{'active':menu}">
        <li class="header__menu--item"><a href="">About</a></li>
        <li class="header__menu--item"><a href="">Service</a></li>
        <li class="header__menu--item"><a href="">Rooms</a></li>
        <li class="header__menu--item"><a href="">Blog</a></li>
        <li class="header__menu--item"><a href="">Contact</a></li>
      </ol>
      <div class="d-flex align-items-center">
        <a class="header__login" href="">SIGN UP</a>
        <div class="header__btn" @click.prevent="menu = !menu" >
          <img class="img-fluid" src="@/assets/img/button_menu.svg" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import {ref, onMounted} from "vue";
const menu = ref(false)
const scroll = ref(false)
onMounted(()=>{
  window.addEventListener("scroll", scrollEvent);
})
const scrollEvent=(e)=>{
  e = document.documentElement;
  e.scrollTop>10?scroll.value = true :scroll.value = false
}
</script>