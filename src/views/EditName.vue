<template>
  <div class="container">
    <form @submit.prevent="sendName">
      <div class="text-field">
        <label class="text-field__label" for="name1">Имя 1</label>
        <input class="text-field__input" type="text" name="name1" id="name1" placeholder="Имя 1" v-model="name1" />
      </div>
      <div class="text-field">
        <label class="text-field__label" for="name2">Имя 2</label>
        <input class="text-field__input" type="text" name="name2" id="name2" placeholder="Имя 2" v-model="name2" />
      </div>
      <div class="text-field">
        <label class="text-field__label" for="name3">Имя 3</label>
        <input class="text-field__input" type="text" name="name3" id="name3" placeholder="Имя 3" v-model="name3" />
      </div>
      <button type="submit" class="btn">Сохранить</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name1: "",
      name2: "",
      name3: "",
      nameTemplates: [],
    };
  },
  async created() {
    const res = await axios.get("http://5.45.92.46:3000/list-name");
    this.name1 = await res.data[0].name;
    this.name2 = await res.data[1].name;
    this.name3 = await res.data[2].name;
  },
  methods: {
    async sendName() {
      await axios.post("http://5.45.92.46:3000/set-name", {
        name1: this.name1,
        name2: this.name2,
        name3: this.name3,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.text-field {
  margin-bottom: 1rem;
}
/* стили для label */
.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}
/* стили для input */
.text-field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 3px;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
  color: #07bc4c;
  background-color: #fff;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  transition: box-shadow 0.18s ease-out, background 0.18s ease-out, color 0.18s ease-out;
}
.btn:focus-visible {
  box-shadow: 0 0 0 3px lightskyblue;
}
.btn:hover {
  box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;
}
.btn:active {
  background-color: #efefef !important;
}
.btn:disabled {
  background-color: #eee;
  color: #444;
  pointer-events: none;
}

.btn-2 {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 3px;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
  color: #fff;
  background-color: #05cd51;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  transition: box-shadow 0.18s ease-out, background 0.18s ease-out, color 0.18s ease-out;
}
.btn-2:focus-visible {
  box-shadow: 0 0 0 3px lightskyblue;
}
.btn-2:hover {
  box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;
}
.btn-2:active {
  background-color: #058c38 !important;
}
.btn-2:disabled {
  background-color: #aed2bc;
  color: #444;
  pointer-events: none;
}
</style>
