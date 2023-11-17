import React, { Component } from "react";
import NewIteam from "./NewIteam";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dcfd93b5e575418a906ed05bdffd2177&page=1pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
    });
    console.log(this.state.articles);
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dcfd93b5e575418a906ed05bdffd2177&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dcfd93b5e575418a906ed05bdffd2177&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.page + 1,
        articles: parseData.articles,
      });
    }
  };
  render() {
    console.log("rendering");
    return (
      <div className="container my-3">
        <h2>NewsMonkey top-headline</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewIteam
                  title={element.title}
                  description={element.description}
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
