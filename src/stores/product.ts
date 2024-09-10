import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {ProductType} from 'types/product'

export const useProduct = defineStore('products', () => {
  const products = ref<null | ProductType[]>(null);
  const shop =  ref<null | ProductType[]>(null);


  return {
    products,
    shop
  };
});
