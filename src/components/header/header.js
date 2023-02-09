import "./header.css";
import { PlusIcon } from "@heroicons/react/20/solid";
export default function header() {
  return (
    <div className="pb-0 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1 ">
          <div>
            <select className="text-2xl text-6">
              <option defaultChecked>My Calendly</option>
              <option value="">tab1</option>
              <option value="">tab1</option>
              <option value="">tab1</option>
            </select>
          </div>
        </div>
        <div className="mr-8 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-3 text-base text-white font-bold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PlusIcon
                className="-ml-1 mr-2 h-5 w-5 text-white "
                aria-hidden="true"
              />
              Create
            </button>
          </span>
        </div>
      </div>
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full block  flex-grow lg:flex lg:items-center lg:w-auto">
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
        </div>
      </div>
    </div>
  );
}
