import { IProduct } from "../models/IProduct";

const calcTotalPrice = (items: IProduct[]) => {
  return items.reduce((sum, item) => ((item.price * item.count) + sum), 0)
}

export default calcTotalPrice