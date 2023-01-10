"use strict";
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 7050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N4": () => (/* binding */ GET_PRODUCT),
/* harmony export */   "Q7": () => (/* binding */ UPDATE_PRODUCT),
/* harmony export */   "UX": () => (/* binding */ GET_PRODUCT_FILTER_ID),
/* harmony export */   "u7": () => (/* binding */ DELETE_PRODUCT),
/* harmony export */   "zN": () => (/* binding */ ADD_PRODUCT)
/* harmony export */ });
/* unused harmony exports GET_PRODUCTS, GET_PRODUCTS_ID */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GET_PRODUCTS {
    products {
      _id
      imageUrl
      price
      title
      description
      createdAt
      category
    }
  }
`;
const GET_PRODUCTS_ID = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GET_PRODUCTS_ID {
    products {
      _id
    }
  }
`;
const GET_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
      _id
      imageUrl
      price
      title
      description
      createdAt
      category
    }
  }
`;
const GET_PRODUCT_FILTER_ID = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GET_PRODUCT_FILTER_ID($category: String!) {
    productFilter(category: $category) {
      _id
    }
  }
`;
const ADD_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation ADD_PRODUCT(
    $imageUrl: String!
    $price: Int!
    $title: String!
    $description: String!
    $category: String!
  ) {
    addProduct(
      imageUrl: $imageUrl
      price: $price
      title: $title
      description: $description
      category: $category
    ) {
      _id
      imageUrl
      price
      title
      description
      category
      createdAt
    }
  }
`;
const UPDATE_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UPDATE_PRODUCT(
    $id: ID!
    $imageUrl: String!
    $price: Int!
    $title: String!
    $description: String!
    $category: String!
  ) {
    updateProduct(
      id: $id
      imageUrl: $imageUrl
      price: $price
      title: $title
      description: $description
      category: $category
    ) {
      _id
      imageUrl
      price
      title
      description
      category
      createdAt
    }
  }
`;
const DELETE_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DELETE_PRODUCT($id: ID!) {
    deleteProduct(id: $id)
  }
`;

/***/ })

};
;