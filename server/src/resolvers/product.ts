import { Product } from "../models/products";
import { Resolver } from "./types";

const productResolver: Resolver = {
  Query: {
    products: async (parent, {}) => {
      return await Product.find().sort({ createdAt: -1 });
    },
    product: async (parent, { id }) => {
      return await Product.findById(id);
    },
    productFilter: async (parent, { category }) => {
      if (category === "전체") {
        return await Product.find().sort({ createdAt: -1 });
      } else {
        return await Product.find({ category }).sort({ createdAt: -1 });
      }
    },
  },

  Mutation: {
    addProduct: async (
      parent,
      { imageUrl, price, title, description, category }
    ) => {
      const createProduct = new Product({
        imageUrl,
        price,
        title,
        description,
        category,
        createdAt: new Date().toISOString(),
      });
      const res = await createProduct.save(); // 몽고디비에 저장
      return {
        ...res._doc,
      };
    },
    updateProduct: async (
      parent,
      { id, imageUrl, price, title, description, category }
    ) => {
      const res = await Product.updateOne(
        { _id: id },
        { imageUrl, price, title, description, category }
      );
      return Product.findById({ _id: id });
    },
    deleteProduct: async (parnt, { id }) => {
      const wasDelete = (await Product.deleteOne({ _id: id })).deletedCount;
      return wasDelete;
    },
  },
};

export default productResolver;
