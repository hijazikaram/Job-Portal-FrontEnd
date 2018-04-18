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
              <div className="col-md-3 col-sm-4">
                <div className="accordion">

                  <div className="panel-group" id="accordion">

                    <div className="panel panel-default panel-faq">

                      <div className="panel-heading">
                        <div className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#accordion-one">
                            <h4>Categories<span className="pull-right">
                                <i className="fa fa-minus"></i>
                              </span>
                            </h4>
                          </a>
                        </div>
                      </div>

                      <div id="accordion-one" className="panel-collapse collapse in">

                        <div className="panel-body">
                          <h5>
                            <a href="categories-main.html">
                              <i className="fa fa-caret-down"></i>
                              All Categories</a>
                          </h5>
                          <a href="#">
                            <i className="icofont icofont-man-in-glasses"></i>Engineer/Architects</a>
                          <ul>
                            <li>
                              <a href="#">Software
                                <span>(129)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Architecture
                                <span>(8342)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">UI & UX Designer
                                <span>(782)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Telecommunication
                                <span>(5247)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Civil Engineer
                                <span>(634)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Chemical Engineer
                                <span>(453)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Program Development
                                <span>(7986)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Mechanical Engineer
                                <span>(742)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Industrial Engineer
                                <span>(149)</span>
                              </a>
                            </li>
                          </ul>
                          <div className="see-more">
                            <button type="button" className="show-more one">
                              <i className="fa fa-plus-square-o" aria-hidden="true"></i>See More</button>
                            <ul className="more-category one">
                              <li>
                                <a href="#">Fron end developer<span>(289)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Back end developer<span>(5402)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">IT Department Manager<span>(3829)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">QA Department Manager<span>(352)</span>
                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default panel-faq">

                      <div className="panel-heading">
                        <div className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#accordion-two">
                            <h4>Date Posted
                              <span className="pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                            </h4>
                          </a>
                        </div>
                      </div>

                      <div id="accordion-two" className="panel-collapse collapse">

                        <div className="panel-body">
                          <label htmlFor="today"><input type="checkbox" name="today" id="today"/>
                            Today</label>
                          <label htmlFor="7-days"><input type="checkbox" name="7-days" id="7-days"/>
                            7 days</label>
                          <label htmlFor="30-days"><input type="checkbox" name="30-days" id="30-days"/>
                            30 days</label>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default panel-faq">

                      <div className="panel-heading">
                        <div className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#accordion-three">
                            <h4>
                              Salary Range
                              <span className="pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                            </h4>
                          </a>
                        </div>
                      </div>

                      <div id="accordion-three" className="panel-collapse collapse">

                        <div className="panel-body">
                          <div className="price-range">
                            <div className="price">
                              <span>$100 -
                                <strong>$700</strong>
                              </span>
                              <div className="dropdown category-dropdown pull-right">
                                <a data-toggle="dropdown" href="#">
                                  <span className="change-text">USD</span>
                                  <i className="fa fa-caret-square-o-down"></i>
                                </a>
                                <ul className="dropdown-menu category-change">
                                  <li>
                                    <a href="#">USD</a>
                                  </li>
                                  <li>
                                    <a href="#">AUD</a>
                                  </li>
                                  <li>
                                    <a href="#">EUR</a>
                                  </li>
                                  <li>
                                    <a href="#">GBP</a>
                                  </li>
                                  <li>
                                    <a href="#">JPY</a>
                                  </li>
                                </ul>
                              </div>
                              <input type="text" value="" data-slider-min="0" data-slider-max="700" data-slider-step="5" data-slider-value="[250,450]" id="price"/><br/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default panel-faq">

                      <div className="panel-heading">
                        <div className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#accordion-four">
                            <h4>Employment Type<span className="pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                            </h4>
                          </a>
                        </div>
                      </div>

                      <div id="accordion-four" className="panel-collapse collapse">

                        <div className="panel-body">
                          <label htmlFor="full-time"><input type="checkbox" name="full-time" id="full-time"/>
                            Full Time</label>
                          <label htmlFor="part-time"><input type="checkbox" name="part-time" id="part-time"/>
                            Part Time</label>
                          <label htmlFor="contractor"><input type="checkbox" name="contractor" id="contractor"/>
                            Contractor</label>
                          <label htmlFor="intern"><input type="checkbox" name="intern" id="intern"/>
                            Intern</label>
                          <label htmlFor="seasonal"><input type="checkbox" name="seasonal" id="seasonal"/>
                            Seasonal / Temp</label>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default panel-faq">
                      <div className="panel-heading">
                        <div className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#accordion-five">
                            <h4>Experience Level<span className="pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                            </h4>
                          </a>
                        </div>
                      </div>

                      <div id="accordion-five" className="panel-collapse collapse">

                        <div className="panel-body">
                          <label htmlFor="training"><input type="checkbox" name="training" id="training"/>
                            Training</label>
                          <label htmlFor="entry-level"><input type="checkbox" name="entry-level" id="entry-level"/>
                            Entry Level</label>
                          <label htmlFor="mid-senior"><input type="checkbox" name="mid-senior" id="mid-senior"/>
                            Mid-Senior Level</label>
                          <label htmlFor="top-level"><input type="checkbox" name="top-level" id="top-level"/>
                            Top Level</label>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default panel-faq">
                      <div className="panel-heading">
                        <div className="panel-title"></div>
                        <a data-toggle="collapse" data-parent="#accordion" href="#accordion-six">
                          <h4>Company<span className="pull-right">
                              <i className="fa fa-plus"></i>
                            </span>
                          </h4>
                        </a>
                      </div>

                      <div id="accordion-six" className="panel-collapse collapse">
                        <div className="panel-body">
                          <input type="text" placeholder="Search Company" className="form-control"/>
                          <label htmlFor="apple"><input type="checkbox" name="apple" id="apple"/>
                            Apple</label>
                          <label htmlFor="dropbox"><input type="checkbox" name="dropbox" id="dropbox"/>
                            Dropbox</label>
                          <label htmlFor="micromax"><input type="checkbox" name="micromax" id="micromax"/>
                            Micromax</label>
                          <label htmlFor="nokia"><input type="checkbox" name="nokia" id="nokia"/>
                            Nokia</label>
                          <label htmlFor="microsoft"><input type="checkbox" name="microsoft" id="microsoft"/>
                            Microsoft</label>
                          <label htmlFor="samsung"><input type="checkbox" name="samsung" id="samsung"/>
                            Samsung</label>
                          <div className="see-more">
                            <button type="button" className="show-more two">
                              <i className="fa fa-plus-square-o" aria-hidden="true"></i>See More</button>
                            <div className="more-category two">
                              <label htmlFor="blackBerry"><input type="checkbox" name="blackBerry" id="blackBerry"/>BlackBerry</label>
                              <label htmlFor="motorola"><input type="checkbox" name="motorola" id="motorola"/>Motorola</label>
                              <label htmlFor="lenovo"><input type="checkbox" name="lenovo" id="lenovo"/>Lenovo</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default panel-faq">
                      <div className="panel-heading">
                        <div className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#accordion-seven">
                            <h4>Location<span className="pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                            </h4>
                          </a>
                        </div>
                      </div>

                      <div id="accordion-seven" className="panel-collapse collapse">
                        <div className="panel-body">
                          <input type="text" placeholder="Search Location" className="form-control"/>
                          <label htmlFor="angeles"><input type="checkbox" name="angeles" id="angeles"/>
                            Los Angeles, CA</label>
                          <label htmlFor="kingdom"><input type="checkbox" name="kingdom" id="kingdom"/>
                            United Kingdom</label>
                          <label htmlFor="states"><input type="checkbox" name="states" id="states"/>
                            United States</label>
                          <label htmlFor="columbia"><input type="checkbox" name="columbia" id="columbia"/>
                            British Columbia</label>
                          <label htmlFor="australia"><input type="checkbox" name="australia" id="australia"/>
                            Australia</label>
                          <label htmlFor="germany"><input type="checkbox" name="germany" id="germany"/>
                            Germany</label>
                          <div className="see-more">
                            <button type="button" className="show-more three">
                              <i className="fa fa-plus-square-o" aria-hidden="true"></i>See More</button>
                            <div className="more-category three">
                              <label htmlFor="belgium"><input type="checkbox" name="belgium" id="belgium"/>Belgium</label>
                              <label htmlFor="brazil"><input type="checkbox" name="brazil" id="brazil"/>Brazil</label>
                              <label htmlFor="denmark"><input type="checkbox" name="denmark" id="denmark"/>Denmark</label>
                              <label htmlFor="indonesia"><input type="checkbox" name="indonesia" id="indonesia"/>Indonesia</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-md-7">
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
                          </ul>
                        </div>
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/7.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Industrial Manager</a>
                          @
                          <a href="#">Total Gas</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/8.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Software Engineer</a>
                          @
                          <a href="#">Dell</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/9.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Human Resource Manager</a>
                          @
                          <a href="#">Acrobat</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/10.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Program Development</a>
                          @
                          <a href="#">Adidus</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/11.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">CTO</a>
                          @
                          <a href="#">IBM</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/12.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Human Resource Manager</a>
                          @
                          <a href="#">BP</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/13.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Industrial Manager</a>
                          @
                          <a href="#">SaraLee</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/14.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Software Engineer</a>
                          @
                          <a href="#">Daman</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/15.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Program Development</a>
                          @
                          <a href="#">Helix</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/16.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">CTO</a>
                          @
                          <a href="#">Dutrigo</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/17.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Software Engineer</a>
                          @
                          <a href="#">Costa Rica</a>
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

                  <div className="job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <a href="job-details.html"><img src="images/job/18.png" alt="Image" className="img-responsive"/></a>
                        </div>
                      </div>

                      <div className="ad-info">
                        <span>
                          <a href="job-details.html" className="title">Program Development</a>
                          @
                          <a href="#">HSBC</a>
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

              <div className="col-md-2 hidden-xs hidden-sm">
                <div className="advertisement text-center">
                  <a href="#"><img src="images/ads/1.jpg" alt="" className="img-responsive"/></a>
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
