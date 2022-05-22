import { ref, computed } from "vue";

// ========== BALANCE ===========

export const balance = ref(1000);

export const changeBalance = (amount) => (balance.value = amount);

export const getBalance = computed(() => balance.value);

// ========== NAME SENDER ===========

export const nameSend = ref("ПАХОМОВ ТИХОН ОНИСИМОВИЧ");

export const changeNameSend = (name) => (nameSend.value = name);

export const getNameSend = computed(() => nameSend.value);

// ========== NAME RECIVE ===========

export const nameRecive = ref("АВДЕЕВ СТАНИСЛАВ РОСТИСЛАВОВИЧ");

export const changeNameRecive = (name) => (nameRecive.value = name);

export const getNameRecive = computed(() => nameRecive.value);

// ========== CARD SENDER ===========

export const cardSend = ref("8563 4234 1234 1234");

export const changeCardSend = (number) => (cardSend.value = number);

export const getCardSend = computed(() => cardSend.value);

// ========== CARD RECIVE ===========

export const cardRecive = ref("8563 1234 1234 3456");

export const changeCardRecive = (number) => (cardRecive.value = number);

export const getCardRecive = computed(() => cardRecive.value);

// ========== AMOUNT RECIVE ===========

export const amountPay = ref(100);

export const changeAmountPay = (number) => (amountPay.value = number);

export const getAmountPay = computed(() => amountPay.value);
