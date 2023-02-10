import "./header.css";
import {
  PlusIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Select from "./select.js/select";
export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="pb-0 bg-white shadow-md">
      <div className="lg:ml-32  justify-between  flex  px-2 sm:px-2 lg:px-6 py-4 sm:flex-row sm:items-center">
        <div className=" ">
          <Select
            title="My Calendly"
            icon={<ChevronDownIcon className="w-6 h-6" />}
          />
        </div>
        <div className="md:mr-8 lg:mt-0 lg:ml-4">
          <button
            type="button"
            className=" hidden md:inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-3 text-base text-white font-bold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlusIcon
              className="-ml-1 mr-2 h-5 w-5 text-white "
              aria-hidden="true"
            />
            Create
          </button>
          <button
            type="button"
            className="flex md:hidden text-black py-2 hover:text-blue-600"
            onClick={toggleChange}
          >
            <Bars3Icon className="-ml-1 mr-2 h-5 w-5  " />
          </button>
        </div>
      </div>
      <div
        className={`lg:ml-32  px-2 sm:px-6 lg:px-6 w-ful flex-grow lg:flex lg:items-center lg:w-auto sm:hidden  transition
          duration-150 ease-in-out ${toggle ? "block" : "hidden"}`}
      >
        <div className="nav-link text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block pb-4 mt-4 lg:inline-block lg:mt-0 text-base text-gray-500 hover:text-black mr-5 "
          >
            Event Types
          </a>
          <a
            href="#responsive-header"
            className="block pb-4 mt-4 lg:inline-block text-base text-gray-500 hover:text-black  mr-5"
          >
            Schedule Events
          </a>
          <a
            href="#responsive-header"
            className="block pb-4 mt-4  lg:inline-block lg:mt-0 text-base text-gray-500 hover:text-black mr-5"
          >
            Workflows
          </a>
          <a
            href="#responsive-header"
            className="block pb-4 mt-4  lg:inline-block lg:mt-0 text-base text-gray-500 hover:text-black"
          >
            Routing Forms
          </a>
          <div className=" inline-block md:hidden py-4">
            <button
              type="button"
              className=" flex items-center rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-3 text-base text-white font-bold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PlusIcon
                className="-ml-1 mr-2 h-5 w-5 text-white "
                aria-hidden="true"
              />
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
