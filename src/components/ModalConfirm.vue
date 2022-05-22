<template>
  <div class="modal-wrapper">
    <div class="modal modal-confirm">
      <div class="modal__header">
        <div class="title">
          <div class="title-icon">
            <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M22 9.497h-3.42L14.868 3l-1.736.992 3.145 5.505H7.723l3.145-5.504L9.132 3 5.42 9.497H2v2h1.198l1.826 8.217a1 1 0 0 0 .976.783h12a.998.998 0 0 0 .976-.783l1.826-8.217H22v-2zm-4.802 9H6.802l-1.556-7h13.507l-1.555 7z"
                  fill="#8dc641"
                ></path>
              </g>
            </svg>
          </div>
          <div class="title-text">Кошик</div>
        </div>
        <div class="close">
          <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <path d="M0 0h24v24H0z"></path>
              <path
                d="M19 6.137L17.863 5 12 10.863 6.137 5 5 6.137 10.863 12 5 17.863 6.137 19 12 13.137 17.863 19 19 17.863 13.137 12z"
                fill="#000"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-body--text">
          Підтвердження 1 платежу на суму <span>&ensp;{{ amountPay }} UAH</span>
        </div>
        <template v-if="step == 0">
          <div class="spin-container">
            <svg class="spinner spinner-confirm" viewBox="0 0 50 50">
              <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
          </div>
        </template>
        <template v-if="step == 1">
          <div class="modal-body--text modal-body--confirm">Вам відправлено підтвердження у додаток Приват24</div>
          <span class="phone-confirm--img">
            <img src="../assets/img/phone_confirm.svg" alt="" />
          </span>
          <div class="phone-confirm--button phone-confirm--text">
            <h3>Підтвердити за допомогою вхідного дзвінка</h3>
          </div>
          <div class="phone-confirm--button">
            <button type="button" class="btn-back btn-back--hover">Скасувати</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { amountPay } from "@/state.js";
export default {
  setup() {
    return {
      amountPay,
    };
  },
  data: () => {
    return {
      step: 0,
    };
  },
  mounted() {
    var th = this;
    setTimeout(() => {
      th.step = 1;
    }, 3000);
  },
  watch: {
    step() {
      if (this.step == 1) {
        var th = this;
        setTimeout(() => {
          th.$emit("updateStep", 6);
        }, 5000);
      }
    },
  },
};
</script>
