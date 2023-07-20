/* eslint-disable react/no-unescaped-entities */
import NonData from "@/icons/NonData";
import React from "react";
import moment from "moment";
import Search from "@/icons/Search";
import useOnChangeFilter from "./hooks/useOnChangeFilter";
import useOnSubmit from "./hooks/useOnSubmit";

const Table = ({ items = [] }) => {
  const { filter, onChangeFilter } = useOnChangeFilter();
  const { onSubmit } = useOnSubmit();

  return (
    <div className="w-full h-screen relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center bg-white dark:bg-gray-900 gap-5">
        <div className="pb-4">
          <label for="table-search" className="sr-only">
            Owner name
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search />
            </div>
            <input
              type="text"
              id="table-search"
              name="owner"
              onChange={onChangeFilter}
              className="outline-none block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write owner name"
            />
          </div>
        </div>
        <div className="pb-4">
          <label for="table-search" className="sr-only">
            Repo name
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search />
            </div>
            <input
              type="text"
              id="table-search"
              name="repo"
              onChange={onChangeFilter}
              className="outline-none block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write repo name"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => onSubmit({ owner: filter.owner, repo: filter.repo })}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Search commits
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr className="h-96 flex justify-center items-center">
              <td className="py-12"></td>
              <td className="py-12"></td>
              <td className="py-12"></td>
              <td className="py-12"></td>
              <td className="py-12"></td>
              <td className="py-12"></td>
              <td className="m-auto flex items-center gap-5 justify-beetwen">
                <NonData /> No exists commits, Please write owner name & repo name
                name
              </td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
            </tr>
          ) : (
            <>
              {items?.map((item, key) => (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item?.commit?.author?.name}
                  </th>
                  <td className="px-6 py-4">{item?.commit?.author?.email}</td>
                  <td className="px-6 py-4">
                    {moment(item?.commit?.author?.date).from()}
                  </td>
                  <td className="px-6 py-4">{item?.commit?.message}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
