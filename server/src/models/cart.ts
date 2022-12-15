import mongoose, { Schema } from "mongoose";
import { Product, ProductSchema } from "./products";

interface DocumentResult<T> {
  _doc: T;
}

interface SchemaType extends DocumentResult<SchemaType> {
  _id: any;
  amount: number;
  product: any;
}

const cartSchema = new Schema<SchemaType>({
  product: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export { Cart };
