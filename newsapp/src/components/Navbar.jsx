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
              <div className="mx-4 inline-block relative w-64">
                <select
                  onChange={(event) => this.hanglePageSize(event)}
                  className="block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option disabled selected hidden>
                    Select Country
                  </option>
                  <option>In</option>
                  <option>Us</option>
                  <option></option>
                  <option>20</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <a href="/" className="mr-5 hover:text-white">
                Second Link
              </a>
              <a href="/" className="mr-5 hover:text-white">
                Third Link
              </a>
              <a href="/" className="mr-5 hover:text-white">
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
