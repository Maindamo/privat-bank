<template>
  <div class="container-payment">
    <div class="payment-content">
      <div class="payment-users">
        <div class="container-users">
          <div class="container-user-load">
            <div class="user-img-load"></div>
            <div class="user-name-load">Иванов А.А.</div>
          </div>
        </div>
      </div>
      <div class="payment-form">
        <div class="container-card">
          <div class="title-card">
            <span class="title-card-load"> З картки </span>
            <span class="title-card-load"> Інша картка </span>
          </div>
          <div class="content-card select-card">
            <div class="card-img">
              <div class="background-card-load"></div>
            </div>
            <div class="card-form-text-load">
              <div class="card-title-load">* Картка Універсальна</div>
              <div class="card-price-load">UAH</div>
            </div>
          </div>
        </div>
        <div class="container-card">
          <div class="title-card">
            <span class="title-card-load">Картка одержувача</span><span class="title-card-load">Мій гаманець </span>
          </div>
          <div class="content-card">
            <div class="receiver-card-cont-load"></div>
          </div>
        </div>
        <div class="container-ammout-load"></div>
        <div class="btn-success">
          <div class="btn-submit-load"></div>
        </div>
      </div>
    </div>
    <img src="../assets/img/d4bf251bcb5be9b033d4.svg" alt="" class="background-arms" />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$emit("updateStep", 2);
    }, 1500);
  },
};
</script>
