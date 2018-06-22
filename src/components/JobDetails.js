import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './properties/Footer';
import jobIcon from '../img/4.png';
import Dropdown from "react-dropdown";
import {Modal, Button, FormControl} from 'react-bootstrap';
import axios from 'axios';
import '../css/MyDropdown.css';
import { Redirect } from 'react-router';
class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job : {},
      postedDays : "",
      modal: false,
      applyjob : false,
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
      let created = new Date(job.data.created_at);
      let now = new Date();
      let postedDays = parseInt((now - created) / (1000 * 60 * 60 * 24), 10);
      self.setState({applyjob : (postedDays <= 30 && postedDays >= 0)});
      if (postedDays === 0) {
        postedDays = "Today";
      } else if (postedDays === 1){
        postedDays = "Yesterday";
        // postedDays = postedDays.toString() + " day ago";
      } else {
        postedDays = postedDays.toString() + " days ago";
      }
      self.setState({ postedDays : postedDays });

      axios.get('http://localhost:5000/api/job_search_options').then((job_search_options) => {
        self.setState({ jobCategoryOptions : job_search_options.data.jobCategoryOptions, jobLocationOptions : job_search_options.data.jobLocationOptions });
      });
    });
  }
  formatData(string) {
    if (string) {
      const date = new Date(string);
      const monthNames = [
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

      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

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
  _onModalToggle = () => {
    this.setState({modal: !this.state.modal});
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
                          : jobIcon} alt="" className="img-responsive"/>
                    </div>
                  </div>

                  <div className="ad-info">
                    <span>
                      <span>
                        <Link t0="" className="title">{this.state.job.job_title}</Link>
                      </span>
                      @
                      <Link to="">
                        {this.state.job.company_name}</Link>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <Link to="">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>{this.state.job.location_state}, {this.state.job.location_country}</Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>{this.state.job.job_type}</Link>
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
                          <Link to="">
                            <i className="fa fa-tags" aria-hidden="true"></i>{this.state.job.job_category}</Link>
                        </li>
                        <li>
                          <i className="fa fa-hourglass-start" aria-hidden="true"></i>Application Deadline : {this.formatData(this.state.job.application_deadline)}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="social-media">
                  <div className="button">
                    <span onClick={this._onModalToggle} className="btn btn-primary" disabled={!this.state.applyjob}>
                      <i className="fa fa-briefcase" aria-hidden="true"></i>Apply For This Job</span>
                    <Link to="" className="btn btn-primary bookmark">
                      <i className="fa fa-bookmark-o" aria-hidden="true"></i>Bookmark</Link>
                  </div>
                  <ul className="share-social">
                    <li>Share this ad</li>
                    <li>
                      <Link to="">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                      </Link>
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
                          </span>Posted: {this.state.postedDays} </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                          </span>
                          Job poster:
                          <Link to="">Lance Ladaga</Link>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-industry" aria-hidden="true"></i>
                          </span>Industry:
                          <Link to="">{this.state.job.company_industry}</Link>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-line-chart" aria-hidden="true"></i>
                          </span>Experience:
                          <Link to="">{this.state.job.experience}</Link>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-key" aria-hidden="true"></i>
                          </span>Job functio: {this.state.job.job_function}
                        </li>
                      </ul>
                    </div>
                    <div className="section company-info">
                      <h1>Company Info</h1>
                      <ul>
                        <li>Compnay Name:
                          <Link to="">{this.state.job.company_name}</Link>
                        </li>
                        <li>Address: {this.state.job.company_address}</li>
                        <li>Compnay SIze: 2k Employee</li>
                        <li>Industry:
                          <Link to="">{this.state.job.company_industry}</Link>
                        </li>
                        <li>Phone: {this.state.job.company_mobile}</li>
                        <li>Email:
                          <Link to="">{this.state.job.company_email}</Link>
                        </li>
                        <li>Website:
                          <Link to="">www.dropbox.com</Link>
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
                <Link to="">Jobs.com</Link>
              </h4>
              <Link to="" className="btn btn-primary">Add Your Resume</Link>
            </div>
          </div>
        </div>
      </section>

      <Modal show={this.state.modal} onHide={this._onModalToggle}>
        <form enctype="multipart/form-data" action={`http://localhost:5000/api/jobs/${this.state.job._id}/apply`} method="post" >
          <Modal.Header closeButton>
            <Modal.Title>Apply</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <input type="text" name='name' className="form-control applyInfo" placeholder="Name" />
              <input type="text" name='email' className="form-control applyInfo" placeholder="Email" />
              <input type="text" name='phoneNumber' className="form-control applyInfo" placeholder="Phone Number" />
              <FormControl type="file" name='resume' className="applyInfo"/>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            <Button type="submit">Submit Application</Button>
          </Modal.Footer>
        </form>
      </Modal>
      <Footer/>
    </div>);
  }
}

export default JobDetails;
