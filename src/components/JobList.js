import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './properties/Footer';
import axios from 'axios';
import Pagination from "react-js-pagination";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs : [],
      job_to_show: [],
      activePage : 1
    }
  }

  componentWillMount() {
    let self = this;
    axios.get('http://localhost:5000/api/jobs').then((jobs) => {
      self.setState({ jobs : jobs.data, job_to_show : jobs.data.slice(0,10) });
    });
  }

  handlePageChange(pageNumber) {
    let jobs = this.state.jobs;

    jobs = jobs.slice(10 * (pageNumber -1) , 10 * pageNumber);
    this.setState({activePage: pageNumber, job_to_show: jobs});
  }

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
                    <h4>Showing {this.state.job_to_show.length}</h4>
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

                  { this.state.job_to_show.map((job , index) =>{
                    return(
                      <div className="job-ad-item" key={index}>
                        <div className="item-info">
                          <div className="item-image-box">
                            <div className="item-image">
                              <a href={'JobList/'+ job._id }><img src="images/job/1.png" alt="Image" className="img-responsive"/></a>
                            </div>
                          </div>

                          <div className="ad-info">
                            <span>
                              <a href={'JobList/'+ job._id } className="title">{job.job_title}</a>
                              @
                              <a href="#">{job.company_name}</a>
                            </span>
                            <div className="ad-meta">
                              <ul>
                                <li>
                                  <a href={'JobList/'+ job._id }>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>{job.company_address}
                                  </a>
                                </li>
                                <li>
                                  <a href={'JobList/'+ job._id }>
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>{job.job_type}</a>
                                </li>
                                <li>
                                  <a href={'JobList/'+ job._id }>
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                      {
                                        job.salary_negotiable
                                          ? 'Negotiable'
                                          : '$' + (
                                          job.salary_min) + '-' + '$' + (
                                          job.salary_max)
                                      }
                                    </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  <div className="ad-section text-center">
                    <a href="#"><img src="images/ads/3.jpg" alt="Image" className="img-responsive"/></a>
                  </div>

                  <div className="text-center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={10}
                      totalItemsCount={this.state.jobs.length}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange.bind(this)}
                    />
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
