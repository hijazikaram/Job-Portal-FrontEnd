import React, {Component} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';

import ViewJob from "./ViewJob";
import jobIcon from '../img/4.png';

class InstitutionPostedJobs extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow;
    this.handleClose = this.handleClose;
    this.handleRemove = this.handleRemove;

    this.state = {
      jobs: [],
      show: false,
      job_index: 0,
      company_logo: ''
    };

    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');

    var self = this;
    if (id && user_type) {
      axios.get('http://localhost:5000/api/institution/' + id).then(function(response) {
        console.log(response);
        if (response.data.success) {
          self.setState({company_logo: response.data.institution.logo});
          axios.get('http://localhost:5000/api/jobs/' + id).then(function(response) {
            if (response.data.success) {
              var jobs = response.data.jobs;
              console.log(jobs.length);
              self.setState({jobs: jobs});
            }
          }, function(error) {
            console.log(error);
          });
        }
      }, function(error) {
        console.log(error);
      });
    }
  }

  componentWillMount = () => {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');

    if (!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }

  handleClose = () => {
    this.setState({show: false});
  }

  handleShow = () => {
    this.setState({show: true});
  }

  removeJob = (index) => {
    var self = this;

    var job_id = self.state.jobs[index]["_id"];
    self.setState({show: true});
    self.setState({job_index: job_id});
  }

  handleRemove = () => {
    var self = this;
    axios.delete('http://localhost:5000/api/jobs/' + self.state.job_index).then(function(response) {
      if (response.data.success) {
        var jobs = self.state.jobs;
        jobs.splice(self.state.job_index, 1);
        self.setState({jobs: jobs});
      }
    }, function(error) {
      console.log(error);
    });
    self.setState({show: false});
  }

  render() {
    return (<div>
      <div className="section trending-ads latest-jobs-ads">
        <h4>Posted Jobs</h4>
        {
          this.state.jobs.map((job, index) => {

            let removeClick = this.removeJob.bind(this, index);
            return (<div className="job-ad-item" key={index}>
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href={'/InstitutionProfile/Job/' + job._id}><img src={this.state.company_logo
                ? this.state.company_logo
                : jobIcon} alt="Image" className="img-responsive"/></a>
                  </div>
                </div>

                <div className="ad-info">
                  <span>
                    <a href={'/InstitutionProfile/Job/' + job._id} className="title">{job.job_title}</a>
                    @
                    <a href="#">{job.company_name}</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>{job.location_state}, {job.location_country}</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>{job.job_type}</a>
                      </li>
                      <li>
                        <a href="#">
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
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>{job.job_category}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <a href={'/InstitutionProfile/editJob/' + job._id} className="action-icon edit-icon">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </a>

                <div className="action-icon close-icon" onClick={removeClick}>
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>)
          })
        }
      </div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Be careful ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Do you really want to remove this job post ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>No</Button>
          <Button className="btn-warning" onClick={this.handleRemove}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </div>);
  }
}

export default InstitutionPostedJobs;
