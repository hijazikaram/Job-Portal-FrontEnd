import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './properties/Footer';

class JobList extends Component {
  render() {
    return (<div>
      <section className="job-bg page job-list-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Engineer/Architects</li>
            </ol>
            <h2 className="title">Software Engineer</h2>
          </div>

          <div className="banner-form banner-form-full job-list-form">
            <form action="#">
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Category</span>
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Software Engineer</a>
                  </li>
                  <li>
                    <a href="#">Program Development</a>
                  </li>
                  <li>
                    <a href="#">Project Manager</a>
                  </li>
                  <li>
                    <a href="#">Graphics Designer</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown category-dropdown language-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change language-change">
                  <li>
                    <a href="#">Location 1</a>
                  </li>
                  <li>
                    <a href="#">Location 2</a>
                  </li>
                  <li>
                    <a href="#">Location 3</a>
                  </li>
                </ul>
              </div>

              <input type="text" className="form-control" placeholder="Type your key word"/>
              <button type="submit" className="btn btn-primary" value="Search">Search</button>
            </form>
          </div>

          <div className="category-info">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="section job-list-item">
                  <div className="featured-top">
                    <h4>Showing 0</h4>
                    <div className="dropdown pull-right">
                      <div className="dropdown category-dropdown">
                        <h5>Sort by:</h5>
                        <a data-toggle="dropdown" href="#">
                          <span className="change-text">Most Relevant</span>
                          <i className="fa fa-caret-square-o-down"></i>
                        </a>
                        <ul className="dropdown-menu category-change">
                          <li>
                            <a href="#">Most Relevant</a>
                          </li>
                          <li>
                            <a href="#">Most Popular</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/1.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Project Manager</a>
                          @
                          <a href="#">Dominos Pizza</a>
                        </span>
                        <div className="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>Full Time</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-money" aria-hidden="true"></i>$25,000 - $35,000</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ad-section text-center">
                    <a href="#"><img src="images/ads/3.jpg" alt="Image" className="img-responsive"/></a>
                  </div>

                  <div className="text-center">
                    <ul className="pagination ">
                      <li>
                        <a href="#">
                          <i className="fa fa-chevron-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a>...</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>);
  }
}

export default JobList;
