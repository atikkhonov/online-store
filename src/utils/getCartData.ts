import calcTotalPrice from "./calcTotalPrice"

export const getCartData = () => {
  const cartLocalStorage = localStorage.getItem('cart')
  const products = cartLocalStorage ? JSON.parse(cartLocalStorage) : []
  const totalPrice = calcTotalPrice(products)

  return { products, totalPrice }
}