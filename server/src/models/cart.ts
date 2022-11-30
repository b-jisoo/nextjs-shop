import mongoose, { Schema } from "mongoose";
import { Product, ProductSchema } from "./products";

interface DocumentResult<T> {
  _doc: T;
}

interface SchemaType extends DocumentResult<SchemaType> {
  id: any;
  amount: string;
  product: ProductSchema;
}

const cartSchema = new Schema<SchemaType>({
  id: {
    type: Schema.Types.ObjectId,
  },
  amount: {
    type: String,
    required: true,
  },
  product: Product.schema,
});

const Cart = mongoose.model("Product", cartSchema);

export { Cart };
