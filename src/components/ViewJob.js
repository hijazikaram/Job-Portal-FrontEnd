import React, {Component} from 'react';
import jobIcon from '../img/4.png';
import Footer from './properties/Footer';
import axios from 'axios';

class ViewJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {},
      job_logo: ''
    }

    var job_id = this.props.match.params.job_id;
    var id = localStorage.getItem('user_id');

    var self = this;
    axios.get('http://localhost:5000/api/institution/' + id).then(function(response) {
      console.log(response);
      if (response.data.success) {
        self.setState({job_logo: response.data.institution.logo});
        axios.get("http://localhost:5000/api/jobsWithId/" + job_id).then(function(response) {
          if (response.data.success) {
            self.setState({job: response.data.job});
          }
        }, function(error) {
          console.log(error);
        });
      }
    }, function(error) {
      console.log(error)
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

  componentWillMount() {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');

    if (!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
      }
    return true;
  }

  render() {
    console.log(this.state.job);
    return (<div>
      {
        !this.isEmpty(this.state.job)
          ? (<div>
            <div className="container">
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
                        <a href="#">
                          <i className="fa fa-tumblr-square" aria-hidden="true"></i>
                        </a>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>)
          : (<div></div>)
      }
    </div>);
  }
}

export default ViewJob;
