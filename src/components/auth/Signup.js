import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    passwordMatch: true,
  });
  const inputChangeHandler = async (e) => {
    let currentUser = { ...user };
    currentUser[e.target.name] = e.target.value;
    await setUser({ ...currentUser });
    if (user.password !== user.confirmPassword) {
      await setErrors({ ...errors, passwordMatch: false });
    }else{
      await setErrors({ ...errors, passwordMatch: true });
    }
  };

  const signupHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="tab-content mt-5">
        {console.log("errors ====== ", errors)}
        <div className="tab-pane active" id="home">
          <div className="row">
            <div className="col-sm-6 offset-3 mobile-pull">
              <article>
                <form className="signup">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={user.name}
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="userName"
                      className="form-control"
                      placeholder="UserName"
                      value={user.userName}
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={user.email}
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={user.confirmPassword}
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  {errors.passwordMatch === false && (
                    <div className="alert alert-danger" role="alert">
                      Passwords Don't Match
                    </div>
                  )}
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-success btn-block"
                      defaultValue="SUBMIT"
                      onClick={signupHandler}
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
