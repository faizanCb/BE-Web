import React from "react";

const Signup = () => {
  return (
    <>
      <div className="tab-content mt-5">
        <div className="tab-pane active" id="home">
          <div className="row">
            <div className="col-sm-6 offset-3 mobile-pull">
              <article>
                <form className="signup" action="index.html" method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="UserName"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-success btn-block"
                      defaultValue="SUBMIT"
                    />
                  </div>
                </form>
              </article>
            </div>
          </div>
          {/* end of row */}
        </div>
        {/* end of home */}
        <div role="tabpanel" className="tab-pane" id="profile">
          <div className="row">
            <div className="col-sm-6 mobile-pull">
              <article>
                <h3 className="text-center">
                  <i className="fa fa-lock" /> Create User Account
                </h3>
                <form className="signup" action="index.html" method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="UserName"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Please accept the terms and
                        conditions to proceed with your request.
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-success btn-block"
                      defaultValue="SUBMIT"
                    />
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
