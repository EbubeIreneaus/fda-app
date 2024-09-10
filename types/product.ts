export type ProductType  =
{
    id: number
    name: string
    img: string
    category: string
    price: number
    rate : {count: number, rate: number}
    suppose_price: number
    discount_price: number
    desc: string
}