import React, {Component} from 'react';
import '../css/App.css';
import Footer from './properties/Footer';

class App extends Component {
  render() {
    return (<div className="App">
      <div className="banner-job">
        <div className="banner-overlay"></div>
        <div className="container text-center">
          <h1 className="title">The Easiest Way to Find your Masjid</h1>
          <h3>We offer 12000 jobs vacation right now</h3>
          <div className="banner-form">
            <form action="#">
              <input type="text" className="form-control" placeholder="Type your key word"/>
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
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
              <button type="submit" className="btn btn-primary" value="Search">Search</button>
            </form>
          </div>

          <ul className="banner-socail list-inline">
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Google Plus">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page">
        <div className="container">
          <div className="section category-items job-category-items  text-center">
            <ul className="category-list">
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/1.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Imam</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>

              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Volunteer</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="job-list.html">
                  <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-responsive"/></div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
            </ul>
          </div>=

          <div className="section latest-jobs-ads">
            <div className="section-title tab-manu">
              <h4>Latest Jobs</h4>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation">
                  <a href="#hot-jobs" data-toggle="tab">Hot Jobs</a>
                </li>
                <li role="presentation">
                  <a href="#recent-jobs" data-toggle="tab">Recent Jobs</a>
                </li>
                <li role="presentation" className="active">
                  <a href="#popular-jobs" data-toggle="tab">Popular Jobs</a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div role="tabpanel" className="tab-pane fade in" id="hot-jobs">
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/3.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">CTO</a>
                        @
                        <a href="#">Volja Events & Entertainment</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/2.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">Graphics Designer</a>
                        @
                        <a href="#">AOK Security</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/4.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">Human Resource Manager</a>
                        @
                        <a href="#">Dropbox Inc</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/2.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">Graphics Designer</a>
                        @
                        <a href="#">AOK Security</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/4.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">Human Resource Manager</a>
                        @
                        <a href="#">Dropbox Inc</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/3.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">CTO</a>
                        @
                        <a href="#">Volja Events & Entertainment</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade in active" id="popular-jobs">
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/2.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">Graphics Designer</a>
                        @
                        <a href="#">AOK Security</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/3.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">CTO</a>
                        @
                        <a href="#">Volja Events & Entertainment</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>

                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html"><img src="images/job/4.png" alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href="job-details.html" className="title">Human Resource Manager</a>
                        @
                        <a href="#">Dropbox Inc</a>
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
                          <li>
                            <a href="#">
                              <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ad-section text-center">
            <a href="#"><img src="images/ads/3.jpg" alt="Image" className="img-responsive"/></a>
          </div>

          <div className="section workshop-traning">
            <div className="section-title">
              <h4>Workshop Traning</h4>
              <a href="#" className="btn btn-primary">See all</a>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="workshop">
                  <img src="images/job/5.png" alt="Image" className="img-responsive"/>
                  <h3>
                    <a href="#">Business Process Management Training</a>
                  </h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated">
                        <a href="#">7 Jan 10:10 pm
                        </a>
                      </span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="workshop">
                  <img src="images/job/6.png" alt="Image" className="img-responsive"/>
                  <h3>
                    <a href="#">Employee Motivation and Engagement</a>
                  </h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated">
                        <a href="#">7 Jan 10:10 pm
                        </a>
                      </span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section cta cta-two text-center">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-cta">
                  <div className="cta-icon icon-jobs">
                    <img src="images/icon/31.png" alt="Icon" className="img-responsive"/>
                  </div>
                  <h3>3,412</h3>
                  <h4>Live Jobs</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="single-cta">
                  <div className="cta-icon icon-company">
                    <img src="images/icon/32.png" alt="Icon" className="img-responsive"/>
                  </div>
                  <h3>12,043</h3>
                  <h4>Total Company</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="single-cta">
                  <div className="cta-icon icon-candidate">
                    <img src="images/icon/33.png" alt="Icon" className="img-responsive"/>
                  </div>
                  <h3>5,798,298</h3>
                  <h4>Total Candidate</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="download" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>Download on App Store</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <a href="#" className="download-app">
                <img src="images/icon/16.png" alt="Image" className="img-responsive"/>
                <span className="pull-left">
                  <span>available on</span>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>

            <div className="col-sm-4">
              <a href="#" className="download-app">
                <img src="images/icon/17.png" alt="Image" className="img-responsive"/>
                <span className="pull-left">
                  <span>available on</span>
                  <strong>App Store</strong>
                </span>
              </a>
            </div>

            <div className="col-sm-4">
              <a href="#" className="download-app">
                <img src="images/icon/18.png" alt="Image" className="img-responsive"/>
                <span className="pull-left">
                  <span>available on</span>
                  <strong>Windows Store</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>);
  }
}

export default App;
