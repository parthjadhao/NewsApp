import React, { Component } from "react";
import NewIteam from "./NewIteam";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dcfd93b5e575418a906ed05bdffd2177";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
    });
    console.log(this.state.articles);
  }
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
      </div>
    );
  }
}

export default News;
