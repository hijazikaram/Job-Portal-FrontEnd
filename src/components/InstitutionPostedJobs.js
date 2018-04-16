import React, { Component } from 'react';
import {Switch, Route, Link} from "react-router-dom";
import axios from 'axios';
import ViewJob from "./ViewJob";

import jobIcon from '../img/4.png';

class InstitutionPostedJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };

    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');
    
    var self = this;
    if(id && user_type) {
      axios.get('http://localhost:5000/api/jobs/' + id).then(function (response) {
        if(response.data.success) {
          var jobs = response.data.jobs;
          self.setState({ jobs : jobs });
          console.log(self.state);
        }
      }, function (error) {
        console.log(error);
      })
    }
  }

  componentWillMount() {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');
    
    if(!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }
  
  render() {
    return (
        <div className="section trending-ads latest-jobs-ads">
          <h4>Posted Jobs</h4>
          {  
            this.state.jobs.map(function (job , index) {
              return (
                <div className="job-ad-item" key={index}>
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href={'/InstitutionProfile/Job/' + job._id}><img src={jobIcon} alt="Image" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span><a href={'/InstitutionProfile/Job/' + job._id} className="title">{job.job_title}</a> @ <a href="#">{job.company_name}</a></span>
                      <div className="ad-meta">
                        <ul>
                          <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>{job.company_address}</a></li>
                          <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>{job.job_type}</a></li>
                          <li><a href="#"><i className="fa fa-money" aria-hidden="true"></i>
                            {job.salary_negotiable ? 'Negotiable' : '$'+(job.salary_min) + '-' + '$'+(job.salary_max)}
                            </a>
                          </li>
                          <li><a href="#"><i className="fa fa-tags" aria-hidden="true"></i>{job.job_category}</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="close-icon">
                      <i className="fa fa-window-close" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    );
  }
}

export default InstitutionPostedJobs;
