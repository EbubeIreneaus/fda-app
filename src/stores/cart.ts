/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductType } from 'app/types/product';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

type CartProduct = { no_of_item: number; product: ProductType };

export const useCartStore = defineStore('cart', () => {
  const cart = ref(new Set());
  const length = computed(() => cart.value.size);
  const cart_product = ref<CartProduct[]>([]);

  const add = async (id: number, item_count = 1) => {
    if (!cart.value.has(id)) {
      if (await get_latest_cart_product(id, item_count)) {
        return cart.value.add(id);
      }
    }

    for (const cp of cart_product.value) {
      if (cp.product.id == id) {
        console.log(cp.no_of_item)
         cp.no_of_item += item_count
         console.log(cp.no_of_item)
      }
    }
  };

  async function get_cart_product() {
    try {
      const params = [...cart.value];
      const req = await fetch(
        `http://127.0.0.1:8000/api/cart_product?cart_ids=${params}`
      );
      const res = await req.json();
      if (res.status === 'success') {
        const result = res.data.map((product: ProductType) => {
          return Object.create({ product: product, no_of_items: 1 });
        });
        cart_product.value = result;
      }

      console.error('Error Geting cart product', res.code);
      return false;
    } catch (error) {}
  }

  get_cart_product();

  async function get_latest_cart_product(id: number, item_count = 1) {
    try {
      const req = await fetch(
        `http://127.0.0.1:8000/api/cart_product?cart_ids=${id}`
      );
      const res = await req.json();
      if (res.status === 'success') {
        cart_product.value.push(
          Object.create({ product: res.data[0], no_of_item: item_count})
        );
        return true;
      }

      console.error('Error Geting single cart product', res.code);
      return false;
    } catch (error) {
      return false;
    }
  }

  const total_price = computed(() => {
    const price = cart_product.value.reduce(
      (x: number, y: CartProduct) =>
        x + y.no_of_item * y.product.discount_price,
      0
    );

    // console.log(price)
    return price;
  });

  return {
    cart,
    length,
    add,
    total_price,
  };
});

// watch(
//   () => useCartStore().length,
//   (x) => {
//     useCartStore().get_latest_cart_product();
//   }
// );
