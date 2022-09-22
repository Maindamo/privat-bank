<template>
  <modal-basket v-if="step == 4" @updateStep="updateStep" />
  <modal-confirm v-if="step == 5" @updateStep="updateStep" />
  <model-animate v-if="step == 6" @updateStep="updateStep" />
  <modal-success-pay v-if="step == 7" @updateStep="updateStep" />
  <div :class="{ 'blur-filter': step > 3 && step < 8 }">
    <the-header />
    <div class="wrapper">
      <div class="title-page">
        <div style="display: flex">
          <img src="../assets/img/ServiceP2P.svg" alt="" id="card" />
          <div class="title-page--text">
            <span class="text-title">Переказ</span>
            <span class="text-desc"
              >Переказ між своїми рахунками, з/на картку VISA/MasterCard інших українських та закордонних банків.</span
            >
          </div>
        </div>
        <div class="title-page--img">
          <img src="../assets/img/visa.svg" alt="" />
          <img src="../assets/img/mastercard.svg" alt="" id="mastercard" />
        </div>
      </div>

      <form-card v-if="step == 0" @updateStep="updateStep" />
      <form-card-loading v-if="step == 1" @updateStep="updateStep" />
      <the-transtation v-if="step == 2" @updateStep="updateStep" />
      <form-loading v-if="step == 3" @updateStep="updateStep" />
      <form-success v-if="step > 3" @updateStep="updateStep" />

      <div class="payment-history">
        <div class="payment-history__header">
          <div class="period-container">
            <div class="form-group">
              <input type="text" class="form-input input-select-card" value="На будь-яку картку" readonly />
              <div class="input-border-container">
                <div class="input-border-content">
                  <hr class="input-border--line border-line--top" />
                  <hr class="input-border--line border-line--bottom" />
                </div>
              </div>
              <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                  <path d="M0 0h24v24H0z"></path>
                  <path d="M7 10l5 5 5-5z" fill="#000"></path>
                </g>
              </svg>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-input input-select-period"
                :value="datePrevious + ' 2022 - ' + dateNow + ' 2022'"
                readonly
              />
              <div class="input-border-container">
                <div class="input-border-content">
                  <hr class="input-border--line border-line--top" />
                  <hr class="input-border--line border-line--bottom" />
                </div>
              </div>
              <svg height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
                  fill="#000"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="filter">
            <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                fill="#000"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
              ></path>
            </svg>
            Фільтр
          </div>
        </div>

        <div class="payment-history__filters">
          <div class="filter-item">
            <div class="filter-item__text">На будь-яку картку</div>
            <div class="filter-item__icon">
              <svg height="16" width="16" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M19 6.137L17.863 5 12 10.863 6.137 5 5 6.137 10.863 12 5 17.863 6.137 19 12 13.137 17.863 19 19 17.863 13.137 12z"
                    fill="#FFF"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <table class="payment-history__table">
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
            <template v-for="(payment, index) in list_payments" :key="index">
              <tr class="day" v-if="index === 0 || payment.day != list_payments[index - 1]?.day">
                <td class="date">{{ payment.day }}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr class="transaction">
                <td class="date">{{ payment.time }}</td>
                <td class="sender">
                  <span class="sender-text">* {{ payment.sender_card }} Картка Універсальна</span>
                  <img src="../assets/img/ServiceP2P.svg" class="sender-image" />
                </td>
                <td class="receiver">* {{ payment.receiver_card }} {{ payment.receiver_name }}</td>
                <td class="sum">{{ payment.amount }} UAH</td>
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
            </template>
          </tbody>
        </table>
      </div>

      <div class="info">
        <div class="info__content">
          <h1>Інформація про сервіс</h1>
          <h2>Переказ грошей з картки на картку будь-якого банку швидко, недорого та безпечно</h2>
          <p>
            Популярна послуга ПриватБанку – переказ грошей з картки на картку будь-якого банку, що є учасником міжнародних
            платіжних систем. Поповнити онлайн можна картки Visa та Masterсard. Достатньо підключення до Інтернету й наявності
            комп’ютера, планшета або смартфона. Миттєві перекази дають змогу виконати переказ на платіжну картку будь-якого банку
            планети.
          </p>
        </div>
        <div class="info__button">
          <div class="open-more">
            <span>Читати повністю</span>
            <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="#8dc641" fill-rule="nonzero"></path>
                <path d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import { changeBalance, changeNameSend, changeNameRecive, changeCardSend } from "@/state";
import moment from "moment";
import axios from "axios";
export default {
  step() {
    changeBalance, changeNameSend, changeNameRecive, changeCardSend;
  },
  data: () => {
    return {
      datePrevious: "",
      dateNow: "",
      step: 0,
      list_payments: [],
    };
  },
  methods: {
    updateStep(step) {
      this.step = step;
    },
  },
  watch: {
    step() {
      if (this.step === 8) this.step = 0;
      if (this.step > 3 && this.step < 8) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  async mounted() {
    var th = this;
    await changeBalance(prompt("Введите баланс карты"));
    await changeNameSend(prompt("Введите имя отправителя"));
    await changeNameRecive(prompt("Введите имя получателя"));
    await changeCardSend(prompt("Введите карту отправителя"));

    moment.locale("uk");
    let day = moment().format("D");
    let month = moment().format("MMM");
    month = month[0].toUpperCase() + month.slice(1);
    this.dateNow = `${day} ${month}`;
    let monthPrevious = moment().subtract(1, "months").format("MMM");
    monthPrevious = monthPrevious[0].toUpperCase() + monthPrevious.slice(1);
    this.datePrevious = `${day} ${monthPrevious}`;

    setInterval(async () => {
      th.list_payments = await axios("http://185.104.113.229:3000/payment-history"); //await axios("http://185.104.113.229:3000/payment-history");
      th.list_payments = th.list_payments.data;
    }, 1000);
  },
};
</script>
