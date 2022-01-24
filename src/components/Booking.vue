<template>
  <div class="booking row">
    <div class="col">
      <div class="py-4 px-5">
        <p class="booking__text mb-4">ARRIVAL</p>
        <div class="d-flex">
          <p class="booking__num">18</p>
          <div
            class="d-flex flex-column justify-content-between py-2 cursor-pointer"
          >
            <p class="booking__select">Oct, 2019</p>
            <p class="booking__text">Friday</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col booking--bl">
      <div class="py-4 px-5">
        <p class="booking__text mb-4">DEPARTURE</p>
        <div class="d-flex">
          <p class="booking__num">19</p>
          <div
            class="d-flex flex-column justify-content-between py-2 cursor-pointer"
          >
            <p class="booking__select">Oct, 2019</p>
            <p class="booking__text">Saturday</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col booking--bb">
      <div class="row">
        <div class="col py-4 booking--br">
          <p class="booking__text text-center mb-4">ADULTS</p>
          <div class="d-flex justify-content-center">
            <button class="booking__btn">
              <img src="@/assets/img/button_minus.svg" alt="" />
            </button>
            <p class="booking__num mx-0">19</p>
            <button class="booking__btn">
              <img src="@/assets/img/button_plus.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="col py-4">
          <div class="">
            <p class="booking__text text-center mb-4">CHILDREN</p>
            <div class="d-flex justify-content-center">
              <button class="booking__btn">
                <img src="@/assets/img/button_minus.svg" alt="" />
              </button>
              <p class="booking__num mx-0">19</p>
              <button class="booking__btn">
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
      <img
        class="booking__next"
        src="@/assets/img/button_dropDown.svg"
        alt=""
      />
    </div>
  </div>
</template>
