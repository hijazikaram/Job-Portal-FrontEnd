import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './properties/Footer';
import jobIcon from '../img/4.png';
import Dropdown from "react-dropdown";
import axios from 'axios';
import '../css/MyDropdown.css'
import { Redirect } from 'react-router'

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job : {},
      toJobList : false,
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
    let self = this;
    let job_id = self.props.match.params.job_id;

    axios.get('http://localhost:5000/api/job/' + job_id ).then((job) => {
      self.setState({ job : job.data });
    });
    axios.get('http://localhost:5000/api/job_search_options').then((job_search_options) => {
      self.setState({ jobCategoryOptions : job_search_options.data.jobCategoryOptions, jobLocationOptions : job_search_options.data.jobLocationOptions });
    });
  }
  
  formatData(string) {
    if (string) {
      var date = new Date(string);
      var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return monthNames[monthIndex] + ' ' + day + ', ' + year;
    }
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
    this.setState({toJobList:true});
  }

  render() {
    if (this.state.toJobList) {
      return (
        <Redirect to={{
          pathname: '/JobList',
          state: { selectedJobCategory_param: this.state.selectedJobCategory, 
            selectedJobLocation_param: this.state.selectedJobLocation, keyword_param: this.state.keyword }
        }} />
      );
    }

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
            <div className="job-details">
              <div className="section job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <img src={this.state.job_logo
                          ? this.state.job_logo
                          : jobIcon} alt="Image" className="img-responsive"/>
                    </div>
                  </div>

                  <div className="ad-info">
                    <span>
                      <span>
                        <a href="#" className="title">{this.state.job.job_title}</a>
                      </span>
                      @
                      <a href="#">
                        {this.state.job.company_name}</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>{this.state.job.location_state}, {this.state.job.location_country}</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>{this.state.job.job_type}</a>
                        </li>
                        <li>
                          <i className="fa fa-money" aria-hidden="true"></i>{
                            this.state.job.salary_negotiable
                              ? 'Negotiable'
                              : '$' + (
                              this.state.job.salary_min) + '-' + '$' + (
                              this.state.job.salary_max)
                          }</li>
                        <li>
                          <a href="#">
                            <i className="fa fa-tags" aria-hidden="true"></i>{this.state.job.job_category}</a>
                        </li>
                        <li>
                          <i className="fa fa-hourglass-start" aria-hidden="true"></i>Application Deadline : {this.formatData(this.state.job.application_deadline)}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="social-media">
                  <div className="button">
                    <a href="#" className="btn btn-primary">
                      <i className="fa fa-briefcase" aria-hidden="true"></i>Apply For This Job</a>
                    <a href="#" className="btn btn-primary bookmark">
                      <i className="fa fa-bookmark-o" aria-hidden="true"></i>Bookmark</a>
                  </div>
                  <ul className="share-social">
                    <li>Share this ad</li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-tumblr-square" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="job-details-info">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="section job-description">
                      <div className="description-info">
                        <h1>Description</h1>
                        <p>{this.state.job.job_description}</p>
                      </div>
                      <div className="responsibilities">
                        <h1>Key Responsibilities:</h1>
                        <p>{this.state.job.job_key_responsibilities}</p>
                      </div>
                      <div className="requirements">
                        <h1>Minimum Requirements</h1>
                        <p>{this.state.job.job_minimum_requirements}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="section job-short-info">
                      <h1>Short Info</h1>
                      <ul>
                        <li>
                          <span className="icon">
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                          </span>Posted: 1 day ago</li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                          </span>
                          Job poster:
                          <a href="#">Lance Ladaga</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-industry" aria-hidden="true"></i>
                          </span>Industry:
                          <a href="#">{this.state.job.company_industry}</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-line-chart" aria-hidden="true"></i>
                          </span>Experience:
                          <a href="#">{this.state.job.experience}</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-key" aria-hidden="true"></i>
                          </span>Job function: {this.state.job.job_function}</li>
                      </ul>
                    </div>
                    <div className="section company-info">
                      <h1>Company Info</h1>
                      <ul>
                        <li>Compnay Name:
                          <a href="#">{this.state.job.company_name}</a>
                        </li>
                        <li>Address: {this.state.job.company_address}</li>
                        <li>Compnay SIze: 2k Employee</li>
                        <li>Industry:
                          <a href="#">{this.state.job.company_industry}</a>
                        </li>
                        <li>Phone: {this.state.job.company_mobile}</li>
                        <li>Email:
                          <a href="#">{this.state.job.company_email}</a>
                        </li>
                        <li>Website:
                          <a href="#">www.dropbox.com</a>
                        </li>
                      </ul>
                      <ul className="share-social">
                        <li>
                          <a href={this.state.job.facebook}>
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href={this.state.job.twitter}>
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href={this.state.job.google}>
                            <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href={this.state.job.linkedin}>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="something-sell" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="title">Add your resume and let your next job find you.</h2>
              <h4>Post your Resume for free on
                <a href="#">Jobs.com</a>
              </h4>
              <a href="post-resume.html" className="btn btn-primary">Add Your Resume</a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>);
  }
}

export default JobDetails;
