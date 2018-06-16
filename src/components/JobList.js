import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './properties/Footer';
import axios from 'axios';
import Pagination from "react-js-pagination";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../css/MyDropdown.css"

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs : [],
      jobs_count : 0,
      job_to_show : [],
      activePage : 1, 
      jobCategoryOptions : [
       'Job Category', 
       'Customer Service', 
       'Software Engineer', 
       'Program Development', 
       'Project Manager', 
       'Graphics Designer'],
      jobLocationOptions : [
       'Location 1', 
       'Location 2', 
       'Location 3'],
      selectedJobCategory : "Job Category", 
      selectedJobLocation : "Job Location", 
      keyword : ""
    }
  }

  componentWillMount() {
    if (this.props.location.state && this.props.location.state.selectedJobCategory_param)
      this.setState({selectedJobCategory : this.props.location.state.selectedJobCategory_param});
    if (this.props.location.state && this.props.location.state.selectedJobLocation_param)
      this.setState({selectedJobLocation : this.props.location.state.selectedJobLocation_param});
    if (this.props.location.state && this.props.location.state.keyword_param)
      this.setState({keyword : this.props.location.state.keyword_param});

    let self = this;
    axios.get('http://localhost:5000/api/jobs').then((jobs) => {
      self.setState({ jobs : jobs.data});

      let jobCategoryOptions = ["Job Category"], jobLocationOptions = ["Job Location"];
      jobs.data.map(function (job) {
        if (job.job_category && !jobCategoryOptions.includes(job.job_category)) {
          jobCategoryOptions.push(job.job_category);
        }
        let job_location = job.location_state;
        if (job_location)
          job_location += ", ";
        job_location += job.location_country;
        if (job_location && !jobLocationOptions.includes(job_location)) {
          jobLocationOptions.push(job_location);
        }
      });
      self.setState({jobCategoryOptions, jobLocationOptions});
      self.handlePageChange(1);
    });
  }

  handlePageChange(pageNumber) {
    let {selectedJobCategory, selectedJobLocation, keyword} = this.state;
    let jobs = this.state.jobs;

    if (keyword) {
      jobs = jobs.filter(function (job) {
                  return job.job_description.toLowerCase().includes(keyword.toLowerCase()) 
                      || job.job_title.toLowerCase().includes(keyword.toLowerCase());
                });
    }
    if (selectedJobCategory != "Job Category") {
      jobs = jobs.filter(function (job) {
                  return job.job_category === selectedJobCategory;
                });
    }
    if (selectedJobLocation != "Job Location") {
      jobs = jobs.filter(function (job) {
                  let job_location = job.location_state;
                  if (job_location)
                    job_location += ", ";
                  job_location += job.location_country;
                  return job_location === selectedJobLocation;
                });
    }

    this.setState({jobs_count: jobs.length});
    jobs = jobs.slice(10 * (pageNumber -1) , 10 * pageNumber);
    this.setState({activePage: pageNumber, job_to_show: jobs});
  }

  _onSelectJobCategory(selectedJobCategory) {
    this.setState({selectedJobCategory : selectedJobCategory.value === "none"?"Job Category":selectedJobCategory.value});
  }
  _onSelectJobLocation(selectedJobLocation) {
    this.setState({selectedJobLocation : selectedJobLocation.value === "none"?"Job Location":selectedJobLocation.value});
  }
  _onKeyword(event) {
    this.setState({keyword:event.target.value});
  }
  _onSearch(event) {
    this.handlePageChange(1);
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
              <div className='mydropdown-div'>
                <Dropdown
                  options={this.state.jobCategoryOptions}
                  onChange={this._onSelectJobCategory.bind(this)}
                  value={this.state.selectedJobCategory}
                  className='mydropdown' 
                  controlClassName='mydropdown-control' 
                  placeholderClassName='mydropdown-placeholder'
                  menuClassName='mydropdown-menu' 
                  arrowClassName='mydropdown-arrow'
                />
              </div>
              <div className='mydropdown-div'>
                <Dropdown
                  options={this.state.jobLocationOptions}
                  onChange={this._onSelectJobLocation.bind(this)}
                  value={this.state.selectedJobLocation}
                  className='mydropdown' 
                  controlClassName='mydropdown-control' 
                  placeholderClassName='mydropdown-placeholder'
                  menuClassName='mydropdown-menu' 
                  arrowClassName='mydropdown-arrow'
                />
              </div>
              <input type="text" className="form-control" onChange={this._onKeyword.bind(this)} value={this.state.keyword} placeholder="Type your key word" />
              <button type="submit" className="btn btn-primary" onClick={this._onSearch.bind(this)} value="Search">Search</button>
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
                      totalItemsCount={this.state.jobs_count}
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
