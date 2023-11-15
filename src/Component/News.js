import React, { Component } from "react";
import NewIteam from "./NewIteam";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey top-headline</h2>
        <div className="row">
          <div className="col-md-4">
            <NewIteam
              title="my title"
              description="this is my description"
              imgURL="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1A18/production/_131708660_gettyimages-490665558.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewIteam
              title="my title"
              description="this is my description"
              imgURL="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1A18/production/_131708660_gettyimages-490665558.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewIteam
              title="my title"
              description="this is my description"
              imgURL="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1A18/production/_131708660_gettyimages-490665558.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
