export const getCompareData = () => {
  const cartLocalStorage = localStorage.getItem('compare')
  const compareProducts = cartLocalStorage ? JSON.parse(cartLocalStorage) : []

  return { compareProducts }
}