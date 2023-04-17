import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import myarticles from "../data/sampledata.json";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: myarticles,
      loading: false,
    };
  }
  async getData(url) {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4"
    ).then((value) => value.json());
    this.setState.articles = data;
  }

  render() {
    return (
      <>
        <div className="container p -12 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-16">
            News Monkey - Get your daily dose of news daily
          </div>
          <div className="component grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1 gap-5 py-5">
            {this.state.articles.articles.map((item) => {
              return (
                <NewsComponent
                  key={item.url}
                  title={item.title}
                  description={item.description}
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
