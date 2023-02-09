import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

const Toolbar = () => {
  return (
    <div className="relative flex h-16 items-center justify-between border-b border-gray-300">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
        <div className="relative ">
          <div className="flex">
            <button
              type="button"
              className="flex rounded-full bg-gray-300 h-10 w-10 pl-3 pt-2 text-base "
            >
              O
            </button>
            <div className="flex flex-col">
              <div className="pl-4  text-sm">
                <span> Open Challenge</span>
              </div>
              <div className="pl-4  text-sm">
                <span className="block">
                  <a href="###" className="text-blue-500 hover:text-blue-700">
                    Calendly.com/openchallengeworld
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className=" sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <button
              type="button"
              className="bg-transparent hover:bg-blue-700 text-blue-500  hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
            >
              <PlusIcon
                className=" mr-2 h-5 w-5 text-whitw-500 inline-flex "
                aria-hidden="true"
              />
              New Event Type
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
