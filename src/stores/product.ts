import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProduct = defineStore('products',() =>{
  const products = ref([])

  return {
    products
  }
});
