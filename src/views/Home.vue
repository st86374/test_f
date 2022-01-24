<template>
  <section class="banner">
    <div class="container-xl">
      <div class="banner__content">
        <h2 class="banner__title">Exclusive Boutique Hotel</h2>
        <span class="banner__text">Luxury Boutique Hotel</span>
        <div class="d-flex py-5">
          <a class="banner__link" href=""
            ><img src="@/assets/img/Image_FB.svg" alt=""
          /></a>
          <a class="banner__link mx-2" href=""
            ><img src="@/assets/img/Image_twitter.svg" alt=""
          /></a>
          <a class="banner__link" href=""
            ><img src="@/assets/img/Image_ig.svg" alt=""
          /></a>
        </div>
      </div>
      <Booking></Booking>
    </div>
  </section>
  <section class="about">
    <div class="container-xl d-flex justify-content-between align-items-center">
      <div class="about__content">
        <h2 class="about__title">Luxury Plaza Hotel for You</h2>
        <p class="about__text">
          Distant orb has power to raise and purify our thoughts like a strain
          of sacred music.
        </p>
        <a class="about__btn" href="">ABOUT US</a>
      </div>
      <VideoCard></VideoCard>
    </div>
  </section>
</template>
<script setup>
import Booking from "@/components/Booking.vue";
import VideoCard from "@/components/VideoCard.vue";
</script>
