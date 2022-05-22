<template>
  <div class="modal-wrapper">
    <div class="modal">
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
      <div class="modal__content">
        <table class="payment-history__table">
          <thead>
            <tr>
              <th></th>
              <th>Призначення</th>
              <th>З картки</th>
              <th>Одержувач</th>
              <th>
                <div>Сума</div>
                <div>Комісія</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="card-icon">
                <img src="../assets/img/ServiceP2P.svg" />
              </td>
              <td>
                <div>Переказ коштів</div>
                <div class="secondary">Переказ власних коштів.</div>
              </td>
              <td class="from-card">{{ getCardSend.replace(getCardSend.substr(4, 10), " **** **** ") }}</td>
              <td class="to-card">
                <div>{{ getNameRecive }}</div>
                <div>{{ getCardRecive.replace(getCardRecive.substr(4, 10), " **** **** ") }}</div>
              </td>
              <td class="sum-fee">
                <div>{{ getAmountPay }} UAH</div>
                <a href="https://privatbank.ua/perevod-na-kartu-schet-v-privatbanke" class="fee-link">Про комісії</a>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="buttons-container">
          <button type="button" class="btn-back btn-back--hover">Видалити</button>
          <button type="button" class="btn-submit btn-submit--hover" @click="$emit('updateStep', 5)">Сплатити</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNameRecive, getCardSend, getCardRecive, getAmountPay } from "@/state.js";
export default {
  setup() {
    return {
      getNameRecive,
      getCardSend,
      getCardRecive,
      getAmountPay,
    };
  },
  data: () => {
    return {
      step: 3,
    };
  },
};
</script>
