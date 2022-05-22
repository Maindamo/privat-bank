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
        <div class="animation-container">
          <video src="../assets/img/transaction_animation.mp4" class="video-animated" autoplay loop muted preload></video>
          <div class="animation-text">Очікуйте проведення платежу</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var th = this;
    setTimeout(() => {
      th.$emit("updateStep", 7);
    }, 3000);
  },
};
</script>
