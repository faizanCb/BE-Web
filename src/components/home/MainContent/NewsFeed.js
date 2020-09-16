import React from "react";

const NewsFeed = () => {
  return (
    <>
      <div className="panel panel-success rounded shadow">
        <div className="panel-heading no-border">
          <div className="pull-left half">
            <div className="media">
              <div className="media-object pull-left">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="..."
                  className="img-circle img-post"
                />
              </div>
              <div className="media-body">
                <a href="#" className="media-heading block mb-0 h4 text-white">
                  John Doe
                </a>
                <span className="text-white h6">on 8th June, 2014</span>
              </div>
            </div>
          </div>
          {/* /.pull-left */}
          <div className="pull-right">
            <a href="#" className="text-white h4">
              <i className="fa fa-heart" /> 15.5K
            </a>
          </div>
          {/* /.pull-right */}
          <div className="clearfix" />
        </div>
        {/* /.panel-heading */}
        <div className="panel-body no-padding">
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
              width={100}
            />
            <img
              data-no-retina
              src="https://via.placeholder.com/340x210/"
              alt="..."
              width={100}
            />
            <img
              data-no-retina
              src="https://via.placeholder.com/340x210/"
              alt="..."
              width={100}
            />
          </div>
          {/* /.inner-all */}
          <div className="inner-all bg-success">
            view all <a href="#">7 comments</a>
          </div>
        </div>
        {/* /.panel-body */}
        <div className="panel-footer no-padding no-border">
          <div className="media inner-all no-margin">
            <div className="pull-left">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt="..."
                className="img-post2"
              />
            </div>
            {/* /.pull-left */}
            <div className="media-body">
              <a href="#" className="h4">
                John Doe
              </a>
              <small className="block text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </small>
              <em className="text-xs text-muted">
                Posted on <span className="text-danger">Dec 08, 2014</span>
              </em>
            </div>
            {/* /.media-body */}
          </div>
          {/* /.media */}
          <div className="line no-margin" />
          {/* /.line */}
          <div className="media inner-all no-margin">
            <div className="pull-left">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                alt="..."
                className="img-post2"
              />
            </div>
            {/* /.pull-left */}
            <div className="media-body">
              <a href="#" className="h4">
                John Doe
              </a>
              <small className="block text-muted">
                Quaerat, impedit minus non commodi facere doloribus nemo ea
                voluptate nesciunt deleniti.
              </small>
              <em className="text-xs text-muted">
                Posted on <span className="text-danger">Dec 08, 2014</span>
              </em>
            </div>
            {/* /.media-body */}
          </div>
          {/* /.media */}
          <div className="line no-margin" />
          {/* /.line */}
          <form action="#" className="form-horizontal inner-all">
            <div className="form-group has-feedback no-margin">
              <input
                className="form-control"
                type="text"
                placeholder="Your comment here..."
              />
              <button
                type="submit"
                className="btn btn-theme fa fa-search form-control-feedback"
              />
            </div>
          </form>
          {/* /.form-horizontal */}
        </div>
        {/* /.panel-footer */}
      </div>
    </>
  );
};

export default NewsFeed;
