import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import myarticles from "../data/sampledata.json";
export default class News extends Component {
  ourarticles = myarticles.articles;
  constructor() {
    super();
    this.state = {
    //   articles: this.ourarticles,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <div className="container p -12 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            News Monkey - Get your daily dose of news daily
          </div>
          <div className="component grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1 gap-5">
            {this.ourarticles.map((item) => {
              return (
                <NewsComponent
                  title={item.title}
                  description={item.description + "..."}
                  img={item.urlToImage}
                  url={item.url}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
