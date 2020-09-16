import React from "react";

const AuthPage = () => {
  return (
    <>
      <div className="container">
        <div className="login-signup mt-5">
          <div className="row">
            <div className="col-sm-6 offset-3 nav-tab-holder">
              <ul className="nav nav-tabs row" role="tablist">
                <li role="presentation" className="active col-sm-6">
                  <button className="btn btn-success w-100 border-right">Sign Up</button>
                </li>
                <li role="presentation" className="col-sm-6">
                  <button className="btn btn-success  w-100 border-left">Login</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content mt-5">
            <div role="tabpanel" className="tab-pane active" id="home">
              <div className="row">
                <div className="col-sm-6 offset-3 mobile-pull">
                  <article >
                    <h3 className="text-center">
                      <i className="fa fa-lock" />
                      USER
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
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
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
                            <input type="checkbox" /> Please accept the terms
                            and conditions to proceed with your request.
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
              {/* end of row */}
            </div>
            {/* end of home */}
            <div role="tabpanel" className="tab-pane" id="profile">
              <div className="row">
                <div className="col-sm-6 mobile-pull">
                  <article >
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
                            <input type="checkbox" /> Please accept the terms
                            and conditions to proceed with your request.
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
                <div className="col-sm-6">
                  <article  className="text-center">
                    <header>USER</header>
                    <h1>FREE</h1>
                    <ul className="text-left">
                      <li>
                        <i className="fa fa-check" /> Unlimited Site Access
                      </li>
                      <li>
                        <i className="fa fa-check" /> Unlimited Site Access
                      </li>
                      <li>
                        <i className="fa fa-check" /> Unlimited Site Access
                      </li>
                      <li>
                        <i className="fa fa-check" /> Unlimited Site Access
                      </li>
                      <li>
                        <i className="fa fa-check" /> Unlimited Site Access
                      </li>
                      <li>
                        <i className="fa fa-check" /> Unlimited Site Access
                      </li>
                    </ul>
                    {/* <a href="#" className="btn btn-success">
                      SignUp For User
                    </a> */}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
