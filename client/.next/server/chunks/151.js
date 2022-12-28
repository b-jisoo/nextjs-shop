"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 5865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Seo = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("title", {
      children: "next-shop"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 2131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ productList)
});

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./graphql/products.ts
var products = __webpack_require__(7050);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./graphql/cart.ts
var cart = __webpack_require__(9649);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/productItem.tsx









const ProductItem = props => {
  const {
    data,
    loading,
    error,
    refetch
  } = (0,client_.useQuery)(products/* GET_PRODUCT */.N4, {
    variables: {
      id: props._id
    }
  });
  const [addCart, {}] = (0,client_.useMutation)(cart/* ADD_CART */.yf, {
    refetchQueries: [{
      query: cart/* GET_CARTS */.Rp
    }]
  });

  const handleAddCart = e => {
    addCart({
      variables: {
        productId: props._id
      }
    });
  };

  if (!data) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "border-2 border-solid flex flex-col text-center justify-center py-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
        href: `/products/${data.product._id}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "",
          children: data.product.title
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "mx-auto w-[200px]",
          src: data.product.imageUrl
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "product-item__price",
        children: ["\u20A9", data.product.price.toLocaleString("ko-KR")]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "border-2 w-32 mx-auto ",
        onClick: handleAddCart,
        children: "\uB2F4\uAE30"
      })]
    })
  });
};

/* harmony default export */ const productItem = (ProductItem);
;// CONCATENATED MODULE: ./components/productList.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ProductList = props => {
  const {
    0: category,
    1: setCategory
  } = (0,external_react_.useState)("전체");
  const {
    data,
    loading,
    error,
    refetch
  } = (0,client_.useQuery)(products/* GET_PRODUCT_FILTER_ID */.UX, {
    variables: {
      category
    }
  });

  const handleFilteringProduct = e => {
    setCategory(e.target.value);
  };

  if (!data) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: " flex justify-center items-center h-32 mt-16 border-b-2 border-gray-700",
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-5xl font-bold ",
        children: "\uC0C1\uD488 \uBAA9\uB85D"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-center items-center w-full mt-16  ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5",
        onClick: handleFilteringProduct,
        value: "전체",
        children: "\uC804\uCCB4"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5",
        onClick: handleFilteringProduct,
        value: "음료",
        children: "\uC74C\uB8CC"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5",
        value: "빵",
        onClick: handleFilteringProduct,
        children: "\uBE75"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5",
        value: "과자",
        onClick: handleFilteringProduct,
        children: "\uACFC\uC790"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
        value: "아이스크림",
        onClick: handleFilteringProduct,
        children: "\uC544\uC774\uC2A4\uD06C\uB9BC"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "grid grid-cols-4 gap-[10px] mt-20 px-10  min-w-[800px]",
      children: data.productFilter.map((product, index) => /*#__PURE__*/(0,external_react_.createElement)(productItem, _objectSpread(_objectSpread({}, product), {}, {
        key: index
      })))
    })]
  });
};

/* harmony default export */ const productList = (ProductList);

/***/ }),

/***/ 9649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rp": () => (/* binding */ GET_CARTS),
/* harmony export */   "_4": () => (/* binding */ DELETE_CART),
/* harmony export */   "cE": () => (/* binding */ DECREASE_CART),
/* harmony export */   "yf": () => (/* binding */ ADD_CART)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CARTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GET_CARTS {
    cart {
      _id
      amount
      product {
        _id
        imageUrl
        price
        title
        description
        createdAt
        category
      }
    }
  }
`;
const ADD_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation ADD_CART($productId: ID!) {
    addCart(productId: $productId) {
      _id
      amount
      product {
        _id
        imageUrl
        price
        title
        description
        createdAt
        category
      }
    }
  }
`;
const DECREASE_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DECREASE_CART($cartId: ID!) {
    decreaseCart(cartId: $cartId) {
      _id
      amount
      product {
        _id
        imageUrl
        price
        title
        description
        createdAt
        category
      }
    }
  }
`;
const DELETE_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DELETE_CART($cartId: ID!) {
    deleteCart(cartId: $cartId)
  }
`;

/***/ })

};
;