import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

type adminType = {
  id: number;
  name: string;
  email: string;
  password: string;
  is_creator: boolean;
  refresh_token: null | string;
  createdAt: string;
  updatedAt: string;
};
const admins: adminType[] = [
  {
    id: 2,
    name: "Husniddin",
    email: "husniddinsalohiddinov@gmail.com",
    password: "$2b$10$suy6GAa.RptM7XZ1N1TBa.qD0BKZJ/Ol7VEzFQ0arNPj/pOzmAwWK",
    is_creator: true,
    refresh_token: null,
    createdAt: "2025-04-03T10:02:44.086Z",
    updatedAt: "2025-04-03T10:02:44.086Z",
  },
  {
    id: 3,
    name: "string",
    email: "admin@example.com",
    password: "$2b$10$.edj7jD24c9TSuKmdXc.s.vhAD0c/2Kita6Giu2kOxryeMbQQEi.i",
    is_creator: true,
    refresh_token: null,
    createdAt: "2025-04-03T10:28:14.875Z",
    updatedAt: "2025-04-03T10:28:14.875Z",
  },
  {
    id: 1,
    name: "Super Admin",
    email: "mainadmin@gmail.com",
    password: "$2b$10$Z9pbptlOJmUkLVpn3KEwxuDh927TEFZZPXaxDj4i/6GXZGL2UMIci",
    is_creator: true,
    refresh_token:
      "$2b$10$olIW3xG6BXLltmPcwVk4tOZbRq/sgbd5WHiXzxMiHOlV6ZF1W1dZq",
    createdAt: "2025-04-03T09:59:14.341Z",
    updatedAt: "2025-04-09T04:01:13.110Z",
  },
];

const AdminPage = () => {
  return (
    <>
      <h3 className="text-xl font-bold mb-4">All Admins</h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr
                key={admin.id + "baa"}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td scope="row" className="px-6 py-4">
                  {admin.id}
                </td>
                <td scope="row" className="px-6 py-4">
                  <b className="text-gray-600">{admin.name}</b>
                </td>
                <td scope="row" className="px-6 py-4">
                  {admin.email}
                </td>
                <td scope="row" className="px-6 py-4">
                  {admin.is_creator ? (
                    <b className="text-green-500">Super Admin</b>
                  ) : (
                    <b className="text-gray-500">Admin</b>
                  )}
                </td>
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

export default AdminPage;
