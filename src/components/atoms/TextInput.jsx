import React from "react";
import { BsPerson } from "react-icons/bs";

function TextInput({ placeholder, id }) {
  return (
    <div>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <BsPerson />
        </div>
        <input
          type="text"
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextInput;
