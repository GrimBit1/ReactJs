import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let { title, description, img, url, name, source } = this.props;
    return (
      <div className="newsblock max-w-xs rounded  mx-4 relative ">
        <span className="bg-blue-100 absolute top-0 right-0 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {source}
        </span>

        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[495px]">
          <img className="h-[40%] w-full object-cover" src={img} alt={name} />
          <div className="px-6 h-[60%] flex flex-col justify-between py-4 ">
            <div className="font-bold max-h-[42%] overflow-hidden text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 h-[38%] overflow-hidden text-justify text-ellipsis  text-base">
              {Boolean(description) ?? description.length > 151
                ? description.slice(0, 147) + "..."
                : description + "..."}
            </p>
            <a
              className="w-fit"
              href={url}
              title="Go to full page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent transition-[background-color,color] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
