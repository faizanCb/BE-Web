import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const AuthContainer = () => {
  const [currentTab, setCurrentTab] = useState("Signup");

  const switchTab = (tab) => {
    console.log("tab ", tab);
    setCurrentTab(tab);
  };
  return (
    <>
      <div className="container">
        <div className="login-signup mt-5">
          <div className="row">
            <div className="col-sm-6 offset-3 nav-tab-holder">
              <ul className="nav nav-tabs row" role="tablist">
                <li role="presentation" className="active col-sm-6">
                  <button
                    className="btn btn-success w-100 border-right"
                    onClick={() => switchTab("Signup")}
                  >
                    Sign Up
                  </button>
                </li>
                <li role="presentation" className="col-sm-6">
                  <button
                    className="btn btn-success  w-100 border-left"
                    onClick={() => switchTab("Login")}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {currentTab === "Signup" && <Signup />}
          {currentTab === "Login" && <Login />}
        </div>
      </div>
    </>
  );
};

export default AuthContainer;
