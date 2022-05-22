<template>
  <div class="container-payment">
    <div class="container-translation">
      <div class="container-success">
        <div class="success-content">
          <svg height="62px" width="62px" version="1.1" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <path
                d="M30.705 2.586c15.668 0 28.414 12.747 28.414 28.415 0 15.667-12.747 28.414-28.414 28.414-15.668 0-28.415-12.746-28.415-28.414 0-15.669 12.747-28.415 28.415-28.415zm0-2C13.907.586.29 14.202.29 31.001c0 16.796 13.617 30.414 30.415 30.414 16.797 0 30.414-13.618 30.414-30.414C61.119 14.202 47.502.586 30.705.586z"
                fill="#8dc641"
              ></path>
              <path
                d="M14.769 40.519c3.868 4.267 9.449 6.951 15.662 6.951 6.213 0 11.794-2.684 15.662-6.951"
                stroke="#8CC34B"
                stroke-width="2"
              ></path>
              <circle cx="20.348" cy="23.438" fill="#8dc641" r="4.227"></circle>
              <circle cx="39.973" cy="23.438" fill="#8dc641" r="4.227"></circle>
            </g>
          </svg>
          <h3>Платіж успішно доданий до кошика</h3>
          <div class="translation-buttons success-buttons">
            <button type="button" class="btn-back btn-back--hover">Ще платіж</button>
            <button type="button" class="btn-submit btn-submit--hover">Оплатити</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-success {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
}
.success-content {
  text-align: center;
  h3 {
    font-size: 20px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 600;
    padding: 16px 0;
  }
}
.success-buttons {
  margin-top: 24px;
}
</style>
