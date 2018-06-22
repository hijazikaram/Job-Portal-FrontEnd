import React, {Component} from 'react';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import jobIcon from '../img/4.png';
import "../css/InstitutionPostedJobs.css"

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

    const id = localStorage.getItem('user_id');
    const user_type = localStorage.getItem('user_type');

    const self = this;
    if (id && user_type) {
      axios.get('http://localhost:5000/api/institution/' + id).then(function(response) {
        if (response.data.success) {
          self.setState({company_logo: response.data.institution.logo});
          axios.get('http://localhost:5000/api/jobs/' + id).then(function(response) {
            if (response.data.success) {
              const jobs = response.data.jobs;
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

  componentWillMount() {
    const id = localStorage.getItem('user_id');
    const user_type = localStorage.getItem('user_type');

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
    const self = this;

    const job_id = self.state.jobs[index]["_id"];
    self.setState({show: true});
    self.setState({job_index: job_id});
  }

  handleRemove = () => {
    const self = this;
    axios.delete('http://localhost:5000/api/jobs/' + self.state.job_index).then(function(response) {
      if (response.data.success) {
        const jobs = self.state.jobs;
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
            let created = new Date(job.created_at);
            let now = new Date();
            let postedDays = parseInt((now - created) / (1000 * 60 * 60 * 24), 10);
            let job_status = (postedDays <= 30 && postedDays >= 0);

            let removeClick = this.removeJob.bind(this, index);
            return (<div className="job-ad-item" key={index}>
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href={'/InstitutionProfile/Job/' + job._id}><image src={this.state.company_logo
                ? this.state.company_logo
                : jobIcon} alt="Image" className="img-responsive"/></a>
                  </div>
                </div>

                <div className="ad-info">
                  <span>
                    <a href={'/InstitutionProfile/Job/' + job._id} className="title">{job.job_title}</a>
                    @
                    <a href={'/InstitutionProfile/Job/' + job._id}>{job.company_name}</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>{job.location_state}, {job.location_country}
                      </li>
                      <li>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>{job.job_type}
                      </li>
                      <li>
                        <i className="fa fa-money" aria-hidden="true"></i>
                        {
                          job.salary_negotiable
                            ? 'Negotiable'
                            : '$' + (
                            job.salary_min) + '-' + '$' + (
                            job.salary_max)
                        }
                      </li>
                      <li>
                        <i className="fa fa-tags" aria-hidden="true"></i>{job.job_category}
                      </li>
                    </ul>
                  </div>
                </div>

                <a href={'/InstitutionProfile/editJob/' + job._id} className="action-icon edit-icon">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </a>

                <a className="action-icon close-icon" onClick={removeClick}>
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </a>

                <span className={job_status ? 'job-status job-status-active' : 'job-status job-status-removed'}>
                  {job_status ? 'Job Active' : 'Job Removed'}
                </span>
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
