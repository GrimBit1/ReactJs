import React, { Component } from "react";
import CountryList from "./CountryList";
import Categories from "./Categories";
import { BrowserRouter, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              to="/"
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
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <div className="mx-6 inline-block relative w-64">
                <input
                  // onChange={(event) => this.hanglePageSize(event)}
                  type="text"
                  // id="country"
                  list="country"
                  placeholder="Select Country"
                  className="block text-white appearance-none w-full dark:bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                />
                <CountryList id="country" className="hidden" />
              </div>

              
              <Categories />
            </nav>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-3 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>
          </div>
        </header>
      </>
    );
  }
}
