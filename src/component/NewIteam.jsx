import React, { Component } from "react";

export class NewIteam extends Component {
  render() {
    // props in class based react component
    let { title, description, urlToImage, url, author, date ,source } = this.props;

    return (
      <div className="my-3">
        <div className="card">
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
            <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
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
