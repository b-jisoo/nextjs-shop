(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Layout/footer.tsx



const Footer = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "border border-t",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container mx-auto text-sm px-4 py-6",
      children: "Powered by"
    })
  });
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./public/favicon.ico
/* harmony default export */ const favicon = ({"src":"/_next/static/media/favicon.603d046c.ico","height":16,"width":16});
;// CONCATENATED MODULE: ./public/cart_icon.png
/* harmony default export */ const cart_icon = ({"src":"/_next/static/media/cart_icon.8df6a804.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAW0lEQVR42lXHIQqDYABA4W9/2Q0G62tjyytLYjF5AfEANrOXMNn0UCKIRfAAXkGLCH4vPXIxgtNL7e6isOqNBosMPrazPzAdOwsEJFqNTgoBPxVKEdzw8MXbkx2wXRT8LCXAZgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./graphql/cart.ts
var cart = __webpack_require__(9649);
;// CONCATENATED MODULE: ./components/Layout/header.tsx










const Header = props => {
  // const [isActive, setIsActive] = useState(false);
  const {
    0: openMenu,
    1: setOpenMenu
  } = (0,external_react_.useState)(false); // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  //   });
  // });

  const {
    data,
    loading,
    error,
    refetch
  } = (0,client_.useQuery)(cart/* GET_CARTS */.Rp);
  if (!data) return null;

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "flex items-center justify-between flex-wrap p-6 fixed top-0 w-full bg-white z-[99] shadow-md text-black ",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center flex-shrink-0  mr-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: favicon,
          alt: "logo",
          width: 54,
          height: 54,
          className: "fill-current mr-5 w-8 h-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-semibold text-xl tracking-tight ",
          children: "Next-Shop"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block lg:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-gray-400 hover:border-gray-800",
          onClick: handleClick,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            className: "fill-current h-3 w-3",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
              children: "Menu"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `w-full block flex-grow lg:flex lg:items-center lg:w-auto ${openMenu ? "hidden" : ""} `,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `text-sm lg:flex-grow  `,
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            className: "block mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4",
            children: "Home"
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/products",
            className: "block mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4",
            children: "Product"
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/admin",
            className: "block mt-4 lg:inline-block lg:mt-0  hover:text-gray-400",
            children: "Admin"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
            href: "/cart",
            className: " flex text-sm px-4 py-2 leading-none border rounded bg-white  border-white hover:border-transparent hover:text-gray-200 hover:bg-gray-400 mt-4 lg:mt-0 text-black",
            children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: cart_icon,
              alt: "cartIcon",
              width: 15,
              className: "mr-1"
            }), "Cart (", data.cart.reduce((acc, cur) => {
              return acc + cur.amount;
            }, 0), ")"]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./components/Layout/layout.tsx





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
  });
};
/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./apollo/apollo-client.ts

const client = new client_.ApolloClient({
  uri: "http://3.35.216.73:5000/graphql",
  cache: new client_.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
    client: apollo_client,
    children: /*#__PURE__*/jsx_runtime_.jsx(layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675], () => (__webpack_exec__(6076)));
module.exports = __webpack_exports__;

})();