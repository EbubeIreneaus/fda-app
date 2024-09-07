/* eslint-disable @typescript-eslint/no-explicit-any */

function nairaFormat(digits = 2){
  const fmt = new Intl.NumberFormat('en-NG', {
    style: 'currency', currency: 'NGN', maximumFractionDigits: digits
  })
  return fmt
}
export const vNaira = {
  mounted: (el: HTMLElement, binding: any)=>{
    const vl = binding.value
    el.innerText = nairaFormat().format(vl)
  },

  updated(el: HTMLElement, binding: any) {
    const value = binding.value;
    el.innerText = nairaFormat().format(value);
  },
 }
