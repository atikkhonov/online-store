export const getFavoriteData = () => {
  const cartLocalStorage = localStorage.getItem('favorite')
  const favoriteProducts = cartLocalStorage ? JSON.parse(cartLocalStorage) : []

  return { favoriteProducts }
}