import React, { Component } from "react";

export class NewIteam extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1A18/production/_131708660_gettyimages-490665558.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newdetails" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewIteam;
