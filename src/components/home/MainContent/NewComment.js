import React from "react";

const NewComment = () => {
  return (
    <>
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
    </>
  );
};

export default NewComment;
