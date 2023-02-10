import React, { useState } from "react";

const Select = (props) => {
  const [Toggle, setToggle] = useState(false);

  const toggleChange = () => {
    if (Toggle) {
      return setToggle(false);
    } else {
      return setToggle(true);
    }
  };
  return (
    <div className="dropdown relative">
      <button
        className="
          dropdown-toggle
        
          text-black
          font-base
          text-2xl
          leading-tight
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded={Toggle}
        onClick={toggleChange}
      >
        {props.title}
        {props.icon}
      </button>
      <ul
        className={`
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
          ${Toggle ? "show" : "hidden"}
        `}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#responsive-header"
          >
            Action
          </a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#responsive-header"
          >
            Another action
          </a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#responsive-header"
          >
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Select;
