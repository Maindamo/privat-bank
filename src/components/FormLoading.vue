<template>
  <div class="container-payment">
    <div class="container-translation">
      <div class="spin-container">
        <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
  width: 100%;
}
</style>

<script>
export default {
  mounted() {
    var th = this;
    setTimeout(() => {
      th.$emit("updateStep", 4);
    }, 2000);
  },
};
</script>
