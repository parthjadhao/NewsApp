import React, { Component } from "react";
import NewIteam from "./NewIteam";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
    document.title = `${this.props.category}-NewsMonkey`;
    // document.title = this.props.category;
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };
  async newUpdate() {
    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.newUpdate();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.newUpdate();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.newUpdate();
  };
  render() {
    console.log("rendering");
    return (
      <div className="container">
        <h2>NewsMonkey top {this.props.category} headline</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>--x--</b>
            </p>
          }
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4">
                    <NewIteam
                      title={element.title}
                      description={element.description}
                      urlToImage={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
