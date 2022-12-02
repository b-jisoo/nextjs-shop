import { useMutation } from "@apollo/client";
import React, { SyntheticEvent, useState } from "react";
import { Product, UPDATE_PRODUCT } from "../../../graphql/products";

const updateProductCompleted = (data: any) => {
  alert(`${data.updateProduct.title}로 변경되었습니다.`);
};

const Item = (props: Product) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState({
    id: props._id,
    title: props.title,
    imageUrl: props.imageUrl,
    price: props.price,
    description: props.description,
    category: props.category,
  });
  const [updateProduct, { data, loading, error }] = useMutation(
    UPDATE_PRODUCT,
    {
      onCompleted: updateProductCompleted,
    }
  );

  const handleClickBttonn = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({
      ...inputs,
      [name]: ["price"].includes(name) ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    updateProduct({ variables: inputs });
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <li className="border-2 p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                상품명
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="상품명"
                onChange={handleChange}
                value={inputs.title}
                required
              />
            </div>

            <div>
              <label
                htmlFor="imageUrl"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                이미지 URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="이미지 URL"
                onChange={handleChange}
                value={inputs.imageUrl}
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                가격
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="가격"
                min={0}
                onChange={handleChange}
                value={inputs.price}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              상세 설명
            </label>
            <input
              type="textarea"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="상세 설명"
              onChange={handleChange}
              value={inputs.description}
              required
            />
          </div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            카테고리
          </label>
          <select
            className="border-2 mr-3"
            name="category"
            id="category"
            onChange={handleChange}
            value={inputs.category}
          >
            <option value="음료">음료</option>
            <option value="빵">빵</option>
            <option value="과자">과자</option>
            <option value="아이스크림">아이스크림</option>
          </select>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            등록
          </button>
          <button
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
            onClick={handleClickBttonn}
          >
            취소
          </button>
        </form>
      </li>
    );
  }

  return (
    <li className="border-2 border-solid flex flex-col text-center justify-center py-4">
      <a href="/products/6bd42cdd-9976-4bdf-b664-60b11b715258">
        <p className="">{props.title}</p>
        <img className="mx-auto" src={props.imageUrl} />
        <span className="product-item__price">₩{props.price}</span>
      </a>
      <button className="border-2 w-32 mx-auto " onClick={handleClickBttonn}>
        수정
      </button>
      <button className="border-2 w-32 mx-auto text-white bg-red-700 hover:bg-red-800 ">
        삭제
      </button>
    </li>
  );
};

export default Item;
