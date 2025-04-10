import React from "react";
import ModalBase from "../modal-base";
import { productType } from "../../../admin/user/products/page";

type langType = {
  id: number;
  name: string;
};
const langs: langType[] = [
  {
    id: 1,
    name: "eng",
  },
  {
    id: 2,
    name: "uz",
  },
  {
    id: 3,
    name: "rus",
  },
];

const ProductModal = ({
  type,
  isOpen,
  closeModal,
  data,
}: Readonly<{
  type: "create" | "update";
  isOpen: boolean;
  closeModal: () => void;
  data: productType | undefined;
}>) => {
  const actionFn = () => {
    if (type === "create") {
      console.log("Create Product");
    } else if (type === "update") {
      console.log("Edit Product");
    }
    console.log(data);
  };
  return (
    <ModalBase isOpen={isOpen} closeModal={closeModal} classes="w-2/3">
      <h3 className="text-lg font-bold text-main-color mb-4 uppercase text-center">
        {type} Data
      </h3>
      <form className="block">
        <div className="flex gap-x-3 mb-2">
          <label className="flex flex-col w-1/2">
            <span className="text-sm text-gray-500 mb-1">Category</span>
            <select className="py-[6px] px-3 text-sm rounded-md border border-gray-300">
              <option value="1">Category-1</option>
              <option value="2">Category-2</option>
              <option value="3">Category-3</option>
              <option value="4">Category-4</option>
              <option value="5">Category-5</option>
            </select>
          </label>
          <label className="flex flex-col w-1/2">
            <span className="text-sm text-gray-500 mb-1">Product image</span>
            <input
              type="file"
              className="py-[6px] px-3 text-sm rounded-md border border-gray-300"
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {langs.map((lang) => (
            <div
              key={lang.id}
              className="flex flex-col gap-y-2 border border-gray-300 p-2 shadow rounded-md"
            >
              <input
                type="text"
                placeholder={`Product name (${lang.name})`}
                className="py-[6px] px-3 rounded-md border border-gray-300 text-sm"
              />
              <textarea
                className="py-[6px] px-3 rounded-md border border-gray-300 h-[120px] resize-y text-sm"
                placeholder={`Product description (${lang.name})`}
              ></textarea>
              <input
                type="text"
                className="py-[6px] px-3 rounded-md border border-gray-300 text-sm bg-gray-100"
                defaultValue={lang.id}
                disabled
              />
            </div>
          ))}
        </div>

        <div className="flex gap-x-2 mt-4">
          <button
            onClick={closeModal}
            type="button"
            className="outline-none border-0 bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={actionFn}
            type="submit"
            className="outline-none border-0 bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Yes
          </button>
        </div>
      </form>
    </ModalBase>
  );
};

export default ProductModal;
