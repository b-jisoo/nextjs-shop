import { Cart } from "../models/cart";
import { Product } from "../models/products";
import { Resolver } from "./types";

const cartResolver: Resolver = {
  Query: {
    cart: async (parent, {}) => {
      return await Cart.find().populate("product");
    },
  },
  Mutation: {
    addCart: async (parent, { productId }) => {
      if (!productId) throw Error("상품id가 없습니다.");
      const productRef = await Product.find({ _id: productId });
      const exist = await Cart.find({ product: productId }).populate("product");

      if (exist.length !== 0) {
        const res = await Cart.updateOne(
          { product: productId },
          { $inc: { amount: 1 } }
        );

        return await Cart.find({ product: productId }).populate("product");
      } else {
        const createCart = new Cart({
          amount: 1,
          product: productRef[0],
        });
        const res = await createCart.save();
        return { ...res._doc };
      }
    },
    updateCart: () => {},
    deleteCart: () => {},
    executePay: () => {},
  },
  // CartItem: {
  //   product: async (cartItem, args) =>
  //     Product.find((product: any) => product._id === cartItem._id),
  // },
};

export default cartResolver;
