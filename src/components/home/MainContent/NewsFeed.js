import React from "react";
import CommentViewer from "./CommentViewer";
import NewComment from "./NewComment";

const NewsFeed = () => {
  return (
    <>
      <div className="panel panel-success rounded shadow p-3">
        <div className="panel-heading no-border">
          <div className="pull-left half">
            <div className="media d-flex align-items-center">
              <div className="media-object pull-left">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="..."
                  width="60"
                  height="60"
                  className="img-circle rounded-circle"
                />
              </div>
              <div className="media-body">
                <a href="/" className="media-heading block mb-0 h5 text-dark mx-2">
                  John Doe
                </a>
                <span className="text-dark h6">on 8th June, 2014</span>
              </div>
            </div>
          </div>
          <div className="pull-right">
            <a href="/" className="text-dark h6">
              <i className="fa fa-heart" /> 15.5K
            </a>
          </div>
          <div className="clearfix" />
        </div>
        <div className="panel-body no-padding my-3">
          <div className="inner-all block">
            <h4>Upload on my album :D</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, iste omnis fugiat porro consequuntur ratione iure error
              reprehenderit cum est ab similique magnam molestias aperiam
              voluptatibus quia aliquid! Sed, minima.
            </p>
            <blockquote className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              delectus!
            </blockquote>
            <img
              data-no-retina
              src="https://via.placeholder.com/340x210/"
              alt="..."
              width={300}
            />
            <img
              data-no-retina
              src="https://via.placeholder.com/340x210/"
              alt="..."
              width={300}
            />
            <img
              data-no-retina
              src="https://via.placeholder.com/340x210/"
              alt="..."
              width={300}
            />
          </div>
          <div className="inner-all p-2">
            <a href="/">view all 7 comments</a>
          </div>
        </div>
        <div className="panel-footer no-padding no-border p-2">
          <CommentViewer />
          <div className="line no-margin" />
          <div className="line no-margin" />
          <NewComment />
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
