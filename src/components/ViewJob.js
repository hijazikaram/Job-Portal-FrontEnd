import React, { Component } from 'react';
import jobIcon from '../img/4.png';

import axios from 'axios';

class ViewJob extends Component {
  constructor(props) {
    super(props);

    this.state ={
      job: {}
    }

    var job_id = this.props.match.params.job_id;

    var self = this;
    axios.get("http://localhost:5000/api/jobsWithId/" + job_id).then(function (response) {
      if(response.data.success) {
        self.setState({ job : response.data.job });
      }
    }, function (error) {
      console.log(error);
    });
  }

  formatData(string) {
    if(string) {
      var date = new Date(string);
       var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
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
    
    if(!id || !user_type) {
      window.location.href = '/SignIn';
    }    
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        {
          !this.isEmpty(this.state.job) ? (
            <div>
              <div className="container">
                <div className="job-details">
                  <div className="section job-ad-item">
                    <div className="item-info">
                      <div className="item-image-box">
                        <div className="item-image">
                          <img src={jobIcon} alt="Image" className="img-responsive" />
                        </div>
                      </div>

                      <div className="ad-info">
                        <span><span><a href="#" className="title">{ this.state.job.job_title }</a></span> @ <a href="#"> { this.state.job.company_name }</a></span>
                        <div className="ad-meta">
                          <ul>
                            <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>{ this.state.job.location_state }, { this.state.job.location_country }</a></li>
                            <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>{ this.state.job.job_type }</a></li>
                            <li><i className="fa fa-money" aria-hidden="true"></i>{this.state.job.salary_negotiable ? 'Negotiable' : '$'+(this.state.job.salary_min) + '-' + '$'+(this.state.job.salary_max)}</li>
                            <li><a href="#"><i className="fa fa-tags" aria-hidden="true"></i>{ this.state.job.job_category }</a></li>
                            <li><i className="fa fa-hourglass-start" aria-hidden="true"></i>Application Deadline : { this.formatData(this.state.job.application_deadline) }</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="social-media">
                      <div className="button">
                        <a href="#" className="btn btn-primary"><i className="fa fa-briefcase" aria-hidden="true"></i>Apply For This Job</a>
                        <a href="#" className="btn btn-primary bookmark"><i className="fa fa-bookmark-o" aria-hidden="true"></i>Bookmark</a>
                      </div>
                      <ul className="share-social">
                        <li>Share this ad</li>
                        <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-tumblr-square" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>          
                  </div>
                  
                  <div className="job-details-info">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="section job-description">
                          <div className="description-info">
                            <h1>Description</h1>
                            <p>{ this.state.job.job_description }</p>
                          </div>
                          <div className="responsibilities">
                            <h1>Key Responsibilities:</h1>
                            <p>-Execute all visual design stages of website design from concept to final hand-off to development-Create print advertisements, social media advertisements, client collateral & digital resizes according to Client demands With direction of the Creative team, input into new design ideas for client branding-Update & keep all agency collateral materials, including keeping records of Client's logos, fonts, images, etc.  </p>
                          </div>
                          <div className="requirements">
                            <h1>Minimum Requirements</h1>
                            <ul>
                              <li>Bachelor's Degree</li>
                              <li>2-5 years of relevant experience ( or equivalent educational experience)</li>
                              <li>Experience developing in Wordpress and other web design platforms</li>
                              <li>HTML, CSS and JavaScript experience a plus</li>
                              <li>In depth knowledge & technical experience of Photoshop, Illustrator, InDesign, Adobe PDF, Keynote, PowerPoint, Microsoft Word & Excel</li>
                              <li>Exceptional eye for design, deep understanding of creativity and ability to recognize fresh approaches to Advertising </li>
                              <li>Must be fluent in Spanish; working written and spoken proficiency</li>
                              <li>**All applicants must be eligible to work in the U.S. without sponsorship</li>
                            </ul>
                          </div>              
                        </div>              
                      </div>
                      <div className="col-sm-4">
                        <div className="section job-short-info">
                          <h1>Short Info</h1>
                          <ul>
                            <li><span className="icon"><i className="fa fa-bolt" aria-hidden="true"></i></span>Posted: 1 day ago</li>
                            <li><span className="icon"><i className="fa fa-user-plus" aria-hidden="true"></i></span> Job poster: <a href="#">Lance Ladaga</a></li>
                            <li><span className="icon"><i className="fa fa-industry" aria-hidden="true"></i></span>Industry: <a href="#">{ this.state.job.company_industry }</a></li>
                            <li><span className="icon"><i className="fa fa-line-chart" aria-hidden="true"></i></span>Experience: <a href="#">{ this.state.job.experience }</a></li>
                            <li><span className="icon"><i className="fa fa-key" aria-hidden="true"></i></span>Job function: { this.state.job.job_function }</li>
                          </ul>
                        </div>
                        <div className="section company-info">
                          <h1>Company Info</h1>
                          <ul>
                            <li>Compnay Name: <a href="#">{ this.state.job.company_name }</a></li>
                            <li>Address: { this.state.job.company_address }</li>
                            <li>Compnay SIze:  2k Employee</li>
                            <li>Industry: <a href="#">{ this.state.job.company_industry }</a></li>
                            <li>Phone: { this.state.job.company_mobile }</li>
                            <li>Email: <a href="#">{ this.state.job.company_email }</a></li>
                            <li>Website: <a href="#">www.dropbox.com</a></li>
                          </ul>
                          <ul className="share-social">
                            <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
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
                      <h4>Post your Resume for free on <a href="#">Jobs.com</a></h4>
                      <a href="post-resume.html" className="btn btn-primary">Add Your Resume</a>
                    </div>
                  </div>
                </div>
              </section>

              <footer id="footer" className="clearfix">
                
                <section className="footer-top clearfix">
                  <div className="container">
                    <div className="row">
                      
                      <div className="col-sm-3">
                        <div className="footer-widget">
                          <h3>Quik Links</h3>
                          <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">All Cities</a></li>
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Advertise With Us</a></li>
                          </ul>
                        </div>
                      </div>

                      
                      <div className="col-sm-3">
                        <div className="footer-widget">
                          <h3>How to sell fast</h3>
                          <ul>
                            <li><a href="#">How to sell fast</a></li>
                            <li><a href="#">Membership</a></li>
                            <li><a href="#">Banner Advertising</a></li>
                            <li><a href="#">Promote your ad</a></li>
                            <li><a href="#">Jobs Delivers</a></li>
                            <li><a href="#">FAQ</a></li>
                          </ul>
                        </div>
                      </div>

                      
                      <div className="col-sm-3">
                        <div className="footer-widget social-widget">
                          <h3>Follow us on</h3>
                          <ul>
                            <li><a href="#"><i className="fa fa-facebook-official"></i>Facebook</a></li>
                            <li><a href="#"><i className="fa fa-twitter-square"></i>Twitter</a></li>
                            <li><a href="#"><i className="fa fa-google-plus-square"></i>Google+</a></li>
                            <li><a href="#"><i className="fa fa-youtube-play"></i>youtube</a></li>
                          </ul>
                        </div>
                      </div>

                      
                      <div className="col-sm-3">
                        <div className="footer-widget news-letter">
                          <h3>Newsletter</h3>
                          <p>Jobs is Worldest leading Portal platform that brings!</p>
                          
                          <form action="#">
                            <input type="email" className="form-control" placeholder="Your email id"/>
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <div className="footer-bottom clearfix text-center">
                  <div className="container">
                    <p>Copyright &copy; <a href="#">Jobs</a> 2017. Developed by <a href="http://themeregion.com/">ThemeRegion</a></p>
                  </div>
                </div>
              </footer>
            </div>
          ) : (<div></div>)
        }
      </div>
    );
  }
}

export default ViewJob;
