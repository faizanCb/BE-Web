import React from "react";

const PostCreator = () => {
  return (
    <>
      <div className="panel rounded shadow p-3 mt-2 mb-4">
        <form action="...">
          <textarea
            className="form-control input-lg no-border"
            rows={4}
            placeholder="What are you doing?..."
            defaultValue={""}
          />
        </form>
        <div className="panel-footer py-3">
          <button className="btn btn-success pull-right">POST</button>
          <ul className="nav nav-pills">
            <li className="mx-1">
              <a href="/">
                <i className="fa fa-user" />
              </a>
            </li>
            <li className="mx-1">
              <a href="/">
                <i className="fa fa-map-marker" />
              </a>
            </li>
            <li className="mx-1">
              <a href="/">
                <i className="fa fa-camera" />
              </a>
            </li>
            <li className="mx-1">
              <a href="/">
                <i className="fa fa-smile-o" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostCreator;
