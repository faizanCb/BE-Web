import React from "react";

import LeftSideBar from '../layouts/home/LeftSideBar';
import TopItem from "../components/home/MainContent/TopItem";
import PostCreator from "../components/home/MainContent/PostCreator";
import NewsFeed from "../components/home/MainContent/NewsFeed";
import "./../home.css"

const HomeContainer = () => {
  return (
    <>
      <div className="container-fluid px-2 bootstrap snippets bootdeys">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4">
            <LeftSideBar />
            {/* <div className="panel panel-theme rounded shadow">
              <div className="panel-heading">
                <div className="pull-left">
                  <h3 className="panel-title">Contact</h3>
                </div>
                <div className="pull-right">
                  <a href="#" className="btn btn-sm btn-success">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="btn btn-sm btn-success">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="btn btn-sm btn-success">
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
                <div className="clearfix" />
              </div>
              
              <div className="panel-body no-padding rounded">
                <ul className="list-group no-margin">
                  <li className="list-group-item">
                    <i className="fa fa-envelope mr-5" /> support@bootdey.com
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-globe mr-5" /> www.bootdey.com
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-phone mr-5" /> +6281 903 xxx xxx
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="col-lg-9 col-md-9 col-sm-8">
            <TopItem />
            <div className="divider" />
            <PostCreator />

            <div className="row">
              <div className="col-md-12">
                <NewsFeed />
              </div>
              {/* <div className="col-md-6">
                <NewsFeed />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
