import React from "react";

const FirstItem = () => {
  return (
    <>
      <div className="panel rounded shadow">
        <div className="panel-body">
          <div className="inner-all">
            <ul className="list-unstyled">
              <li className="text-center">
                <img
                  data-no-retina
                  className="img-circle img-responsive img-bordered-primary"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="John Doe"
                />
              </li>
              <li className="text-center">
                <h4 className="text-capitalize">John Doe</h4>
                <p className="text-muted text-capitalize">web designer</p>
              </li>
              <li>
                <br />
              </li>
              <li>
                <div className="btn-group-vertical btn-block">
                  <a href className="btn btn-default">
                    <i className="fa fa-cog pull-right" />
                    Edit Account
                  </a>
                  <a href className="btn btn-default">
                    <i className="fa fa-sign-out pull-right" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstItem;
