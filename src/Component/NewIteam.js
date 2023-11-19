import React, { Component } from "react";

export class NewIteam extends Component {
  render() {
    // props in class based react component
    let { title, description, urlToImage, url } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !urlToImage
                ? "https://www.racefans.net/wp-content/uploads/2023/11/racefansdotnet-7089981_HiRes.jpg"
                : urlToImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewIteam;
