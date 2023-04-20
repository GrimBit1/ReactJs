import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
// import myarticles from "../data/sampledata.json";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      pageno: 1,
    };
  }
  getData = async (url) => {
    let data = await fetch(url).then((value) => value.json());
    return data;
  };
  async componentDidMount() {
    // component did mount runs after the render is done
    let getData = async (url) => {
      let data = await fetch(url).then((value) => value.json());
      return data;
    };
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${this.state.pageno}`;
    let data = await getData(url);
    this.setState({ articles: data.articles, totalResults: 100 });
  }
  previousClick = async () => {
    this.setState({ pageno: this.state.pageno - 1 });
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${
      this.state.pageno - 1
    }&pageSize=20`;
    let data = await this.getData(url);

    this.setState({ pageno: this.state.pageno + 1, articles: data.articles });
    document
      .getElementsByClassName("container")[1]
      .scrollIntoView({ behavior: "smooth" });
  };
  nextClick = async () => {
    if (this.state.pageno + 1 > this.state.totalResults / 20) {
      document.getElementsByClassName("next")[0].classList.add("opacity-50");
      document
        .getElementsByClassName("next")[0]
        .classList.add("cursor-not-allowed");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${
        this.state.pageno + 1
      }&pageSize=20`;
      let data = await this.getData(url);
      this.setState({ pageno: this.state.pageno + 1, articles: data.articles });
      document
        .getElementsByClassName("container")[1]
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <>
        <div className="container p -12 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-16">
            News Monkey - Get your daily dose of news daily
          </div>
          <div className="component grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1 gap-5 py-5">
            {Boolean(this.state.articles)
              ? this.state.articles.map((item) => {
                  return (
                    <NewsComponent
                      key={item.url}
                      title={item.title}
                      description={item.description}
                      img={
                        Boolean(item.urlToImage)
                          ? item.urlToImage
                          : "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                      }
                      url={item.url}
                    />
                  );
                })
              : ""}
          </div>
          <div className="pagination mx-4 flex justify-between">
            <button
              disabled={this.state.pageno <= 1}
              onClick={this.previousClick}
              className={`bg-transparent hover:bg-blue-500 ${
                this.state.pageno <= 1 ? "opacity-50 cursor-not-allowed " : ""
              } text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
            >
              &larr; Previous
            </button>
            <button
              onClick={this.nextClick}
              className="bg-transparent next hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
