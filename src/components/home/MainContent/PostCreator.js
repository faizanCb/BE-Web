import React from "react";

const PostCreator = () => {
  return (
    <>
      <div className="panel rounded shadow">
        <form action="...">
          <textarea
            className="form-control input-lg no-border"
            rows={2}
            placeholder="What are you doing?..."
            defaultValue={""}
          />
        </form>
        <div className="panel-footer">
          <button className="btn btn-success pull-right mt-5">POST</button>
          <ul className="nav nav-pills">
            <li>
              <a href="#">
                <i className="fa fa-user" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-camera" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-smile-o" />
              </a>
            </li>
          </ul>
          {/* /.nav nav-pills */}
        </div>
        {/* /.panel-footer */}
      </div>
    </>
  );
};

export default PostCreator;
