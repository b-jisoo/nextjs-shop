import mongoose, { Schema } from "mongoose";

interface DocumentResult<T> {
  _doc: T;
}

export interface ProductSchema extends DocumentResult<ProductSchema> {
  id: any;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  createdAt: string | Date;
  category: string;
}

const productSchema = new Schema<ProductSchema>({
  id: {
    type: Schema.Types.ObjectId,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export { Product };
