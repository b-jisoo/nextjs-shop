export interface ProductType {
  product: {
    _id: string;
    imageUrl: string;
    price: number;
    title: string;
    description: string;
    createdAt: number;
    category: string;
  };
}

export interface ProductsType {
  products: ProductType[];
}

export interface ProductById {
  _id: string;
}

export interface ProductFilerById {
  productFilter: ProductById[];
}

export interface ProductsById {
  products: ProductById[];
}
