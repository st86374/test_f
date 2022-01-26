<template>
  <div class="booking__outer">
    <div class="booking row flex-column flex-lg-row">
      <div class="col booking__item">
        <div class="py-4 px-5">
          <p class="booking__text mb-4">ARRIVAL</p>
          <div class="d-flex">
            <p class="booking__num">{{ dateText(0, "date") }}</p>
            <div
              class="d-flex flex-column justify-content-between py-2 cursor-pointer position-relative"
            >
              <p class="booking__select">
                {{ `${dateText(0, "month")},${dateText(0, "year")}` }}
              </p>
              <p class="booking__text">{{ dateText(0, "day") }}</p>
              <div class="date_outer">
                <DatePicker
                  format="YYYY-MM-DD"
                  value-type="format"
                  type="date"
                  range
                  :readonly="true"
                  v-model:value="check.date"
                ></DatePicker>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col booking__item">
        <div class="py-4 px-5">
          <p class="booking__text mb-4">DEPARTURE</p>
          <div class="d-flex">
            <p class="booking__num">{{ dateText(1, "date") }}</p>
            <div
              class="d-flex flex-column justify-content-between py-2 cursor-pointer position-relative"
            >
              <p class="booking__select">
                {{ `${dateText(1, "month")},${dateText(1, "year")}` }}
              </p>
              <p class="booking__text">{{ dateText(1, "day") }}</p>
              <div class="date_outer">
                <DatePicker
                  format="YYYY-MM-DD"
                  value-type="format"
                  type="date"
                  range
                  v-model:value="check.date"
                  :readonly="true"
                ></DatePicker>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col booking__item">
        <div class="row">
          <div class="col py-4 booking--border--r">
            <p class="booking__text text-center mb-4">ADULTS</p>
            <div class="d-flex justify-content-center">
              <button
                class="booking__btn"
                @click.prevent="
                  check.aldult > 0
                    ? (check.aldult = check.aldult - 1)
                    : (check.aldult = 0)
                "
              >
                <img src="@/assets/img/button_minus.svg" alt="" />
              </button>
              <p class="booking__num mx-0">{{ check.aldult }}</p>
              <button
                class="booking__btn"
                @click.prevent="check.aldult = check.aldult + 1"
              >
                <img src="@/assets/img/button_plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="col py-4">
            <div class="">
              <p class="booking__text text-center mb-4">CHILDREN</p>
              <div class="d-flex justify-content-center">
                <button
                  class="booking__btn"
                  @click.prevent="
                    check.child > 0
                      ? (check.child = check.child - 1)
                      : (check.child = 0)
                  "
                >
                  <img src="@/assets/img/button_minus.svg" alt="" />
                </button>
                <p class="booking__num mx-0">{{ check.child }}</p>
                <button
                  class="booking__btn"
                  @click.prevent="check.child = check.child + 1"
                >
                  <img src="@/assets/img/button_plus.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex align-items-center justify-content-center h-100">
          <button class="booking__check">CHECK AVAILABILITY</button>
        </div>
      </div>
      <div>
        <a href="#" class="booking__next" @click.prevent="scrollPoint()">
          <img src="@/assets/img/button_dropDown.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, computed, onMounted } from "vue";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
const pageWidth = ref(window.innerWidth);
const check = ref({
  date: ["", ""],
  child: 0,
  aldult: 0,
});
const dateText = (i, str) => {
  let val;
  if (!check.value.date[i]) {
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    val = i == 0 ? today : tomorrow;
  } else {
    val = new Date(check.value.date[i]);
  }
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  switch (str) {
    case "year":
      return val.getFullYear();
    case "month":
      let m = val.getMonth();
      return months[m];
    case "date":
      return val.getDate();
    case "day":
      let d = val.getDay();
      return week[d];
  }
};
// const myEl = ref(null);
// const smoothScroll = inject("smoothScroll");
// const scrollToMyEl = () => {
//   smoothScroll({
//     scrollTo: myEl.value,
//     hash: "#About"
//   });
// };
const scrollPoint = () => {
  const block = document.querySelector(".about__point");
  scrollTo(block.offsetTop, block.offsetTop);
};
onMounted(() => {
  var type = document.getElementsByTagName("input");
  type[0].readOnly = true;
  type[1].readOnly = true;
});
</script>
