import React from "react";
import { PlusIcon, Cog8ToothIcon } from "@heroicons/react/20/solid";

const Toolbar = () => {
  return (
    <div className="relative flex py-3 justify-between flex-wrap border-b border-gray-300">
      <div className="flex flex-1 justify-between sm:items-stretch sm:justify-start ">
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

      <div className=" absulate inset-y-0 right-0 flex items-center py-3 md:py-0 lg:py-0">
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
            <Cog8ToothIcon
              className="h-5 w-5 hover:text-blue-700 mt-2 
                      focus:text-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                      active:text-blue-800 active:shadow-lg active:text-black"
              aria-hidden="true"
            ></Cog8ToothIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
