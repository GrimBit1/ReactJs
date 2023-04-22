import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Loading from "./Loading";
import PropTypes from "prop-types";
// import myarticles from "../data/sampledata.json";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      pageno: 1,
      pageSize: 20,
    };
  }
  
  static defaultProps = {
    country: "in",
    pagesize: 20,
  };
  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired
  };
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
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${this.state.pageno}&pageSize=${this.state.pageSize}`;
    let data = await getData(url);
    this.setState({
      articles: data.articles,
      totalResults: 100,
      loading: true,
    });
  }
  previousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${
      this.state.pageno - 1
    }&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await this.getData(url);

    this.setState({
      pageno: this.state.pageno - 1,
      articles: data.articles,
      loading: false,
    });
    document
      .getElementsByClassName("container")[1]
      .scrollIntoView({ behavior: "smooth" });
  };
  nextClick = async () => {
    if (this.state.pageno + 1 > this.state.totalResults / 20) {
    } else {
      this.setState({ loading: true });

      let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${
        this.state.pageno + 1
      }&pageSize=${this.state.pageSize}`;
      let data = await this.getData(url);
      this.setState({
        pageno: this.state.pageno + 1,
        articles: data.articles,
        loading: true,
      });
      document
        .getElementsByClassName("container")[1]
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  async hanglePageSize(event) {
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=7e8fa036e129458cb56025ed2a0b25a4&page=${this.state.pageno}&pageSize=${event.target.value}`;
    let data = await this.getData(url);
    this.setState({
      pageSize: parseInt(event.target.value),
      articles: data.articles,
    });
  }
  render() {
    return (
      <>
        <div className="container p -12 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-16">
            News Monkey - Get your daily dose of news daily
          </div>
          <div className="mx-4 inline-block relative w-64">
            <select
              onChange={(event) => this.hanglePageSize(event)}
              className="block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option disabled selected hidden>
                Select Page Size
              </option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
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
          <div className="component grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1 gap-5 py-5">
            {Boolean(this.state.loading) ? (
              this.state.articles.map((item) => {
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
            ) : (
              <Loading />
            )}
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
              className={`bg-transparent next ${
                this.state.pageno + 1 > this.state.totalResults / 20
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
