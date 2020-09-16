import React from "react";

const CommentViewer = () => {
  return (
    <>
      <div className="media inner-all no-margin my-2">
        <div className="pull-left">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            alt="..."
            width="40"
            height="40"
            className="rounded-circle"
          />
        </div>
        {/* /.pull-left */}
        <div className="media-body my-2">
          <a href="/" className="h6 ml-2">
            John Doe
          </a>
          <small className="block text-muted ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </small>
          <em className="text-xs text-muted">
            Commented on <span className="text-danger">Dec 08, 2014</span>
          </em>
        </div>
        {/* /.media-body */}
      </div>
    </>
  );
};

export default CommentViewer;
