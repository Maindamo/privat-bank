<template>
  <div class="container-payment">
    <div class="payment-content">
      <div class="payment-users">
        <span class="user-flip user-flip--disabled">
          <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" fill="#000" fill-rule="nonzero"></path>
              <path d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </span>
        <div class="container-users">
          <div class="container-user" v-for="name in nameTemplates" :key="name.id">
            <img src="../assets/img/users.svg" alt="" />
            <div class="user-name">{{ name.name }}</div>
          </div>
        </div>
        <span class="user-flip">
          <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="#000" fill-rule="nonzero"></path>
              <path d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </span>
      </div>
      <div class="payment-form">
        <div class="container-card">
          <div class="title-card">
            <span class="card-title--left"> З картки </span>
            <span class="card-title--right">
              Інша картка
              <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 9.003H4V6h16v3.003zM20 18H4v-6h16v6zm0-14H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                  fill="#8dc641"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                ></path>
              </svg>
            </span>
          </div>
          <div class="content-card select-card">
            <div class="card-img">
              <img class="background-card" src="../assets/img/back-card.jpg" alt="" />
              <span class="background-type">
                <svg height="15px" width="25px" version="1.1" viewBox="0 0 37 28" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="productVisaWhite_svg__a" x1="10.314%" x2="93.063%" y1="54.603%" y2="45.005%">
                      <stop offset="0%" stop-color="#1A1D59"></stop>
                      <stop offset="100%" stop-color="#112D97"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <path d="M0 3h37v22H0z" fill="#FFF" fill-rule="nonzero"></path>
                    <path
                      d="M16.548 3.197c-.016 1.393 1.284 2.17 2.264 2.632 1.008.474 1.346.779 1.342 1.203-.007.648-.804.935-1.548.946-1.3.02-2.054-.34-2.655-.61l-.469 2.118c.604.268 1.72.502 2.876.514 2.716 0 4.493-1.298 4.501-3.31.012-2.552-3.647-2.693-3.622-3.833.008-.347.35-.716 1.096-.81.371-.047 1.392-.083 2.55.433l.454-2.051A7.159 7.159 0 0 0 20.918 0c-2.556 0-4.355 1.314-4.37 3.197zM27.705.177c-.496 0-.915.28-1.1.71l-3.88 8.962h2.715l.539-1.444h3.317l.312 1.444H32L29.912.177h-2.207zm.38 2.613l.782 3.632h-2.143l1.36-3.632zM13.26.177l-2.14 9.672h2.586L15.844.177H13.26zm-3.827 0L6.743 6.76l-1.09-5.597A1.195 1.195 0 0 0 4.462.177H.06L0 .457c.902.19 1.93.496 2.55.823.381.2.49.374.615.85l2.062 7.72H7.96L12.15.176H9.433z"
                      fill="url(#productVisaWhite_svg__a)"
                      transform="translate(2 9)"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <div>
              <div class="card-title">* {{ getCardSend.substr(-4) }} Картка Універсальна</div>
              <div class="card-price">{{ getBalance }} UAH</div>
              <span class="card-list--open">
                <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <path d="M0 0h24v24H0z"></path>
                    <path d="M7 10l5 5 5-5z" fill="#000"></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="container-card">
          <div class="title-card">
            <span class="card-title--left">Картка одержувача</span
            ><span class="card-title--right"
              >Мій гаманець
              <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M18.75 6.795A2.25 2.25 0 0 1 21 9.045v8.61a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.655V6.345a2.25 2.25 0 0 1 2.25-2.25h10.8a2.25 2.25 0 0 1 2.25 2.25v.45H18.75zM4.8 6.345v.45h11.7v-.45a.45.45 0 0 0-.45-.45H5.25a.45.45 0 0 0-.45.45zm14.4 11.31v-8.61a.45.45 0 0 0-.45-.45H4.8v9.06c0 .248.202.45.45.45h13.5a.45.45 0 0 0 .45-.45zm-4.09-2.596a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z"
                    fill="#8dc641"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div class="content-card">
            <div class="form-group">
              <input
                type="text"
                class="form-input input-card"
                maxlength="19"
                placeholder="0000 0000 0000 0000"
                v-model="cardInput"
                @input="validateCard"
              />
              <div class="input-border-container">
                <div class="input-border-content">
                  <hr class="input-border--line border-line--top" />
                  <hr class="input-border--line border-line--bottom" />
                </div>
              </div>
              <span class="input-card--label">Номер картки</span>
              <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M19.665 5H4.335C3.052 5 2 5.976 2 7.168V8.31h20V7.168C22 5.976 20.95 5 19.665 5zM2 16.4c0 1.194 1.051 2.169 2.335 2.169h15.33c1.284 0 2.335-.976 2.335-2.168v-6.068H2v6.068zm2.741-1.193h4.786c.422 0 .766.318.766.711 0 .393-.343.711-.766.711H4.741c-.422 0-.765-.318-.765-.71 0-.394.343-.712.765-.712z"
                    fill="#000"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="container-ammout">
          <div style="width: 216px; margin-right: 8px">
            <div class="form-group">
              <input type="text" class="form-input input-ammount" placeholder="00.00" v-model="price" />
              <div class="input-border-container">
                <div class="input-border-content">
                  <hr class="input-border--line border-line--top" />
                  <hr class="input-border--line border-line--bottom" />
                </div>
              </div>
              <span class="input-card--label">Сума</span>
            </div>
          </div>
          <div style="width: 102px">
            <div class="form-group form-group--currency">
              <input type="text" class="form-input input-currency" placeholder="UAH" disabled />
              <div class="input-border-container">
                <div class="input-border-content">
                  <hr class="input-border--line border-line--top border-line-currency" />
                </div>
              </div>
              <span class="input-card--label"></span>
              <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                  <path d="M0 0h24v24H0z"></path>
                  <path d="M7 10l5 5 5-5z" fill="#000"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="amount-details">Додати коментар</div>
        <div class="btn-success">
          <button type="button" class="btn-submit btn-submit--hover" @click="updateStep">Переказати</button>
        </div>
      </div>
    </div>
    <img src="../assets/img/d4bf251bcb5be9b033d4.svg" alt="" class="background-arms" />
  </div>
</template>

<script>
import { getBalance, changeAmountPay, changeCardRecive, getCardSend } from "@/state.js";
import axios from "axios";
export default {
  setup() {
    return {
      getBalance,
      changeAmountPay,
      changeCardRecive,
      getCardSend,
    };
  },
  data: () => {
    return {
      cardInput: "",
      price: "",
      defaultPrice: "",
      nameTemplates: [],
    };
  },
  async mounted() {
    const res = await axios.get("http://85.104.113.229:3000/list-name");
    this.nameTemplates = await res.data;
  },
  watch: {
    price() {
      this.defaultPrice = this.price.replace(" ", "");
      this.price = this.defaultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  methods: {
    validateCard(event) {
      if (event.inputType != "deleteContentBackward")
        this.cardInput = this.cardInput.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
      if (this.cardInput.length === 20) this.cardInput = this.cardInput.slice(0, -1);
    },
    updateStep() {
      changeAmountPay(this.price);
      changeCardRecive(this.cardInput);
      this.$emit("updateStep", 1);
    },
  },
};
</script>
