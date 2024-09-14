import { useState } from "react";
import Logo from "../assets/logo.svg";
import ChartLogo from "../assets/chart.svg";
import Profile from "../assets/profile.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="border px-10 p-2 flex items-center justify-between mx-20 my-3 rounded-full font-raleway bg-white">
        <div>
          <img src={Logo} alt="logo" width={150} />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-10 font-bold">
            <li className="relative group cursor-pointer">
              Home
              <span className="absolute left-0 bottom-0 block w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer">
              Catalog
              <span className="absolute left-0 bottom-0 block w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer">
              About Us
              <span className="absolute left-0 bottom-0 block w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex gap-3">
          <img src={ChartLogo} alt="chart" />
          <img src={Profile} alt="profile" />
        </div>
        <button className="lg:hidden p-2" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 lg:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-64 h-full bg-white p-4">
          <button className="text-gray-500" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="mt-4 space-y-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Catalog</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <div className="flex gap-3 mt-4">
              <img src={ChartLogo} alt="chart" />
              <img src={Profile} alt="profile" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
