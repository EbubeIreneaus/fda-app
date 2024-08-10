
function nairaFormat(digits = 2){
  const fmt = new Intl.NumberFormat('en-NG', {
    style: 'currency', currency: 'NGN', maximumFractionDigits: digits
  })
  return fmt
}
export const vNaira = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mounted: (el: HTMLElement, binding: any)=>{
    const vl = binding.value
    el.innerText = nairaFormat().format(vl)
  }
 }
