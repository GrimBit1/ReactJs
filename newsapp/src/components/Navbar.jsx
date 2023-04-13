import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">News App</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a href="/" className="mr-5 hover:text-gray-900">
                First Link
              </a>
              <a href="/" className="mr-5 hover:text-gray-900">
                Second Link
              </a>
              <a href="/" className="mr-5 hover:text-gray-900">
                Third Link
              </a>
              <a href="/" className="mr-5 hover:text-gray-900">
                Fourth Link
              </a>
            </nav>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-3 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>
          </div>
        </header>
      </div>
    );
  }
}
