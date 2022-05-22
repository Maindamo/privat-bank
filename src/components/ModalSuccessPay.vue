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
        <div class="close" @click="updateStep">
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
        <div class="container-sucpay">
          <div class="content-sucpay">
            <img src="../assets/img/success_pay.svg" alt="" />
            <h3>Платіж успішно відправлений в обробку</h3>
          </div>
        </div>
        <div class="container-sucpay--tabel" v-if="tabelOpen">
          <table class="payment-history__table sucpay-table">
            <thead>
              <tr>
                <th>Дата</th>
                <th>Відправник</th>
                <th>Одержувач</th>
                <th class="right">
                  <div>Сума</div>
                  <div>Комісія</div>
                </th>
                <th class="center">Статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="day">
                <td class="date">{{ date }}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr class="transaction">
                <td class="date">{{ time }}</td>
                <td class="sender">
                  <span class="sender-text">* {{ getCardSend.substr(-4) }} Картка Універсальна</span>
                  <img src="../assets/img/ServiceP2P.svg" class="sender-image" />
                </td>
                <td class="receiver">* {{ getCardRecive.substr(-4) }} {{ getNameRecive }}</td>
                <td class="sum">{{ getAmountPay }} UAH</td>
                <td class="status">Проведено</td>
                <td class="actions">
                  <div class="actions-flex-cont">
                    <div class="repeat-transaction">
                      <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            d="M16.444 16.333H7.556v-2.666L4 17.222l3.556 3.556V18.11h10.666v-5.333h-1.778v3.555zM7.556 7.444h8.888v2.667L20 6.556 16.444 3v2.667H5.778V11h1.778V7.444z"
                            fill="#000"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="show-info">
                      <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="#000" fill-rule="nonzero"></path>
                          <path d="M0 0h24v24H0z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="buttons-container">
            <button type="button" class="btn-back btn-back--hover">Архів платежів</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNameRecive, getNameSend, getCardSend, getCardRecive, getAmountPay, changeBalance, getBalance } from "@/state.js";
import moment from "moment";
import axios from "axios";
export default {
  setup() {
    return {
      getNameRecive,
      getNameSend,
      getCardSend,
      getCardRecive,
      getAmountPay,
      changeBalance,
      getBalance,
    };
  },
  data: () => {
    return {
      tabelOpen: false,
      date: "",
      time: "",
      sender_name: getNameSend,
      sender_card: getCardSend,
      receiver_name: getNameRecive,
      receiver_card: getCardRecive,
      amount: getAmountPay,
      balance: getBalance,
    };
  },
  async mounted() {
    var th = this;
    await this.getDay();
    await this.getTime();
    setTimeout(async () => {
      await axios.post("http://188.225.45.170:3000/add-payment", {
        sender_name: th.sender_name,
        sender_card: th.sender_card.substr(-4),
        receiver_name: th.receiver_name,
        receiver_card: th.receiver_card.substr(-4),
        amount: th.amount,
        day: th.date,
        time: th.time,
      });
      changeBalance(Number(th.balance.replace(" ", "")) - Number(th.amount.replace(" ", "")));
      th.tabelOpen = true;
    }, 3000);
  },
  methods: {
    updateStep() {
      this.$emit("updateStep", 8);
    },
    getDay() {
      moment.locale("uk");

      let day = moment().format("D");
      let month = moment().format("MMM");
      month = month[0].toUpperCase() + month.slice(1);

      this.date = `${day} ${month}`;
    },
    getTime() {
      moment.locale("uk");
      let timeNow = moment(new Date()).format("HH:mm");
      this.time = timeNow;
    },
  },
};
</script>
