import { Component } from "react";

import NewsComponent from "./NewsComponent";

import Loading from "./Loading";

import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      totalResults: 100,
      pageno: 1,
      pageSize: 20,
      category: "",
      title: "News Monkey - Latest News",
      items: [],
      scrollY: 0,
    };
  }
  static defaultProps = {
    country: "in",
    pagesize: 20,
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
  };

  capitalizer(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  getData = async (url) => {
    let response = await fetch(url);

    let data = await response.json();

    return data;
  };

  async componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scrollY: window.scrollY });
    });

    let url = `https://techblogs.codes/top-headlines?page=${this.state.pageno}&pageSize=${this.state.pageSize}&category=${this.props.category}`;

    let data = await this.getData(url);

    let tempurl = `https://techblogs.codes/top-headlines?pageSize=${this.state.totalResults}&category=${this.props.category}`;

    let tempdata = await this.getData(tempurl);

    this.setState({
      articles: data.articles,
      items: tempdata.articles,
      loading: false,
      category: this.props.category,
    });

    document.title = Boolean(this.props.category)
      ? `${this.capitalizer(this.props.category)} - NewsMonkey`
      : this.state.title;
    
  }
  previousClick = async () => {
    let url = `https://techblogs.codes/top-headlines?page=${
      this.state.pageno - 1
    }&pageSize=${this.state.pageSize}&category=${this.props.category}`;

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

  fetchMoreData = async () => {
    if (this.state.pageno + 1 > this.state.totalResults / this.state.pageSize) {
    } else {
      this.setState({ loading: true });

      let url = `https://techblogs.codes/top-headlines?page=${
        this.state.pageno + 1
      }&pageSize=${this.state.pageSize}&category=${this.props.category}`;

      let data = await this.getData(url);

      this.setState({
        pageno: this.state.pageno + 1,
        articles: this.state.articles.concat(data.articles),
        loading: false,
      });
    }
  };

  async hanglePageSize(event) {
    let url = `https://techblogs.codes/top-headlines?page=${this.state.pageno}&pageSize=${event.target.value}&category=${this.props.category}`;

    let data = await this.getData(url);

    this.setState({
      pageSize: parseInt(event.target.value),
      articles: data.articles,
    });
  }
  giveThis = () => {
    console.log(this);

    console.log(this.apiKeyarr);
  };
  scrollToTop = () => {
    document
      .getElementsByClassName("container")[0]
      .scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <>
        <div className="container p -12 mx-auto my-32 flex flex-col items-center">
          <button
            className={`${
              this.state.scrollY > 150
                ? ""
                : "invisible translate-y-6 transition-all"
            } fixed bg-black rounded-full h-12 w-12 bottom-5 right-5 z-50`}
            onClick={this.scrollToTop}
          >
            <i
              className="fa-solid fa-arrow-up"
              style={{ color: "#ffffff" }}
            ></i>
          </button>
          <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-16">
            News Monkey - Get your daily dose of news daily
          </div>
          <div className="mx-4 inline-block relative w-64">
            <select
              onChange={(event) => this.hanglePageSize(event)}
              className="block appearance-none w-full dark:bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
          {/* <button onClick={this.giveThis}>Hi</button> */}
          <InfiniteScroll
            className="component grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1 gap-5 py-5"
            dataLength={this.state.pageno * 20}
            next={this.fetchMoreData}
            hasMore={!(this.state.articles.length >= this.state.items.length)}
            loader={<Loading />}
            scrollableTarget="component"
            endMessage={
              <p
                className="block col-span-full"
                style={{
                  textAlign: "center",
                }}
              >
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {this.state.articles.map((item) => {
              return (
                <NewsComponent
                  key={item.url}
                  title={item.title}
                  description={
                    item.description ?? "Didnt provide any description"
                  }
                  img={
                    item.urlToImage ??
                    "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                  }
                  url={item.url}
                  source={item.source.name}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
