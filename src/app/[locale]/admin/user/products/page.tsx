import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

type productType = {
  id: number;
  name: string;
  images: string;
  categoryName: string;
  description: string;
  languageId: number;
  categoryId: number;
};
const productReal: productType[] = [
  {
    id: 1,
    categoryId: 1,
    categoryName: "Diagnostic Tools",
    images: "7736d33b-1d61-4618-aed7-f8d5dafc8b6a.jpg",
    name: "Stethoscope",
    description: "Used to listen to heartbeats and lung sounds",
    languageId: 1,
  },
  {
    id: 2,
    categoryId: 1,
    categoryName: "Diagnostic Tools",
    images: "ea0e4183-c205-455c-8748-c75fae031557.jpg",
    name: "Otoscope",
    description: "Used to examine the ear canal and eardrum",
    languageId: 1,
  },
  {
    id: 3,
    categoryId: 1,
    categoryName: "Diagnostic Tools",
    images: "8002e278-d5db-4436-8c91-e98eaaa1a033.jpg",
    name: "Blood Test Kit",
    description:
      "Used for conducting blood tests for different medical conditions",
    languageId: 1,
  },
  {
    id: 4,
    categoryId: 2,
    categoryName: "Monitoring Equipment",
    images: "06c47113-044b-466d-bbf8-9f1151d08b3f.jpg",
    name: "Scalpel",
    description: "A small, sharp blade used in surgery for cutting tissues",
    languageId: 1,
  },
  {
    id: 5,
    categoryId: 2,
    categoryName: "Monitoring Equipment",
    images: "9f722799-6c3f-4bab-9d4e-701dca4a0127.jpg",
    name: "Forceps",
    description:
      "Used for grasping, holding, or manipulating tissues during surgery",
    languageId: 1,
  },
];

type ColumnType = keyof productType;
const productColumns: ColumnType[] = [
  "id",
  "name",
  "images",
  "categoryName",
  "description",
  "languageId",
];

const ProductsPage = () => {
  return (
    <>
      <h3 className="text-xl font-bold mb-4">All products</h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {productColumns.map((title) => (
                <th key={title + "abc"} scope="col" className="px-6 py-3">
                  {title}
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                <p className="text-end">Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {productReal.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                {productColumns.map((col) => (
                  <td key={col} scope="row" className="px-6 py-4">
                    {col === "images" ? (
                      <img
                        src="https://cdn.farmako.in/inventory/images/976c7a23ee3e876a9505aa4c23e421ba7aa6d94e/ba727b5f2c522f13775a7b7f8c74065cf38929ea.png"
                        className="w-14 rounded-md shadow-md"
                      />
                    ) : col == "name" ? (
                      <b className="text-gray-600">{product[col]}</b>
                    ) : (
                      product[col]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-x-2 justify-end">
                    <CiEdit className="text-green-500 text-lg cursor-pointer" />
                    <IoTrashOutline className="text-red-500 text-lg cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsPage;
