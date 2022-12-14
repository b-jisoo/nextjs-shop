export type Resolver = {
  [k: string]: {
    [key: string]: (
      parent: any,
      args: { [key: string]: any },
      context: {
        db: {
          cart: Cart;
          products: Products;
        };
      },
      info: any
    ) => any;
  };
};

export type Product = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt?: number;
  category: string;
};

export type Products = Product[];

export type CartItem = {
  _id: string;
  amount: number;
  product: any;
};
export type Cart = CartItem[];
