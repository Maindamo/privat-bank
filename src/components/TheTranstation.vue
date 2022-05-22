<template>
  <div class="container-payment">
    <div class="container-translation">
      <div class="translation-data translation-data--left">
        <div class="translation-data--title">Відправник</div>
        <div class="translation-data--name">{{ getNameSend }}</div>
        <div class="translation-data--card">
          <img src="../assets/img/visa-mini.svg" alt="" /> &nbsp; * {{ getCardSend.substr(-4) }} Картка Універсальна
        </div>
        <div class="translation-data--price">
          <div class="price-container">
            <span>Сума</span>
            <p>{{ amountPay }} UAH</p>
          </div>
          <div class="price-container">
            <span>Комісія з відправника</span>
            <p class="translation-commission">0 UAH</p>
          </div>
        </div>
      </div>
      <span class="translation-flip">
        <svg height="48" width="48" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="#000" fill-rule="nonzero"></path>
            <path d="M0 0h24v24H0z"></path>
          </g>
        </svg>
      </span>
      <div class="translation-data translation-data--right">
        <div class="translation-data--title">Одержувач</div>
        <div class="translation-data--name">{{ getNameRecive }}</div>
        <div class="translation-data--card">
          <img src="../assets/img/mini-visa-icon.svg" alt="" /> &nbsp; * {{ getCardRecive }}
        </div>
        <div class="translation-data--price">
          <div class="price-container">
            <span>До зарахування</span>
            <p>{{ amountPay }} UAH</p>
          </div>
          <div class="price-container">
            <span>Комісія з одержувача</span>
            <p class="translation-commission">0 UAH</p>
          </div>
        </div>
      </div>
    </div>
    <div class="translation-price">
      Разом до списання <span>{{ amountPay }} UAH</span>
    </div>
    <div class="translation-buttons">
      <button type="button" class="btn-back btn-back--hover">Назад</button>
      <button type="button" class="btn-submit btn-submit--hover" @click="$emit('updateStep', 3)">Додати в кошик</button>
    </div>
  </div>
</template>

<script>
import { getNameSend, getNameRecive, getCardSend, getCardRecive, amountPay } from "@/state.js";
export default {
  setup() {
    return {
      getNameSend,
      getNameRecive,
      getCardSend,
      getCardRecive,
      amountPay,
    };
  },
};
</script>

<style></style>
