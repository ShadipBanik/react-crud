import React from "react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Select from "../header/select.js/select";

const Card = () => {
  return (
    <div>
      <div className="flex pt-2">
        <div className="block rounded w-full shadow-lg bg-white max-w-sm border border-gray-300 border-t-4 border-t-purple-600">
          <div className="py-3 px-4 flex justify-between ">
            <div className="form-check">
              <input
                className="form-check-input shadow-lg  h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="flexCheckDefault"
              ></label>
            </div>
            <div className="flex justify-center">
              <div>
                <Select
                  title={
                    <Cog8ToothIcon
                      className="h-5 w-5 hover:text-blue-700 
                      focus:text-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                      active:text-blue-800 active:shadow-lg active:text-black"
                      aria-hidden="true"
                    ></Cog8ToothIcon>
                  }
                  icon={
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-4 h-4 hover:text-blue-700 
                      focus:text-blue-700"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
          <div className="p-2 pl-4">
            <p className="text-gray-900 text-xl font-base ">
              30 Minute Meeting
            </p>
            <p className="text-gray-400 text-base mb-3">30 mins,one-on-one</p>
            <p className="mb-2">
              <a
                href="#responsive-header"
                className="text-blue-500 hover:text-blue-700"
              >
                View Booking Page
              </a>
            </p>
          </div>
          <div className="py-2 px-4 border-t justify-between flex border-gray-300 text-gray-600">
            <a
              href="#responsive-header"
              className=" py-2 no-underline text-blue-500 text-xs flex no-underline hover:text-blue-700"
            >
              <DocumentDuplicateIcon className="mr-1 h-4 w-4"></DocumentDuplicateIcon>
              Copy Link
            </a>
            <button
              type="button"
              className=" px-5 py-1  rounded-full border text-blue-500 border-blue-400 flex hover:bg-blue-700 hover:text-white"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
