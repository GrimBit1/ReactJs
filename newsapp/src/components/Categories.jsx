import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <Link to="/business" className="mr-5 hover:text-white">
        Business
      </Link>
      <Link to="/entertainment" className="mr-5 hover:text-white">
        Entertainment
      </Link>
      <Link to="/general" className="mr-5 hover:text-white">
        General
      </Link>
      <Link to="/health" className="mr-5 hover:text-white">
        Health
      </Link>
      <Link to="/science" className="mr-5 hover:text-white">
        Science
      </Link>
      <Link to="/sports" className="mr-5 hover:text-white">
        Sports
      </Link>
      <Link to="/technology" className="mr-5 hover:text-white">
        Technology
      </Link>
    </>
  );
};

export default Categories;
