import React, { SyntheticEvent, useState } from "react";
import useAddAdminProduct from "../../hooks/mutation/admin/useAddProduct";

type Props = {};

/*
  {
    addProduct: {
      category: "콜라";
      createdAt: "2022. 12. 2.";
      description: "제로펩시 100개";
      imageUrl: "https://shopping-phinf.pstatic.net/main_2706118/27061187522.20210507150752.jpg?type=f640";
      price: 100000;
      title: "제로펩시100개";
      __typename: "Product";
      _id: "63890c79ec108257fa95d00b";
    }
  }
*/

const AddForm = (props: Props) => {
  const [inputs, setInputs] = useState({
    title: "",
    imageUrl: "",
    price: "",
    description: "",
    category: "음료",
  });

  const addProduct = useAddAdminProduct();

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({
      ...inputs,
      [name]: ["price"].includes(name) ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct({ variables: inputs });
  };

  return (
    <div className="mt-32 w-96 mx-auto mb-20">
      <div className="mb-10">어드민</div>
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
      </form>
    </div>
  );
};

export default AddForm;
