import React, { Component } from "react";
import NewIteam from "./NewIteam";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey top-headline</h2>
        <div className="row">
          <div className="col-md-4">
            <NewIteam title="my title" description="this is my description" />
          </div>
          <div className="col-md-4">
            <NewIteam title="my title" description="this is my description" />
          </div>
          <div className="col-md-4">
            <NewIteam title="my title" description="this is my description" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
