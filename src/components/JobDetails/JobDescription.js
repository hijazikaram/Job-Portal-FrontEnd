import React, {Component} from 'react';
import jobIcon from '../../img/4.png';
import {Link} from 'react-router-dom';
class JobDescription extends Component {
  render() {
    const { job, postedDays } = this.props;
    return (
      <div className="job-details-info">
        <div className="row">
          <div className="col-sm-8">
            <div className="section job-description">
              <div className="description-info">
                <h1>Description</h1>
                <p>{job.job_description}</p>
              </div>
              <div className="responsibilities">
                <h1>Key Responsibilities:</h1>
                <p>{job.job_key_responsibilities}</p>
              </div>
              <div className="requirements">
                <h1>Minimum Requirements</h1>
                <p>{job.job_minimum_requirements}</p>
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
                  </span>Posted: {postedDays} </li>
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
                  <Link to="">{job.company_industry}</Link>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                  </span>Experience:
                  <Link to="">{job.experience}</Link>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </span>Job functio: {job.job_function}
                </li>
              </ul>
            </div>
            <div className="section company-info">
              <h1>Company Info</h1>
              <ul>
                <li>Compnay Name:
                  <Link to="">{job.company_name}</Link>
                </li>
                <li>Address: {job.company_address}</li>
                <li>Compnay SIze: 2k Employee</li>
                <li>Industry:
                  <Link to="">{job.company_industry}</Link>
                </li>
                <li>Phone: {job.company_mobile}</li>
                <li>Email:
                  <Link to="">{job.company_email}</Link>
                </li>
                <li>Website:
                  <Link to="">www.dropbox.com</Link>
                </li>
              </ul>
              <ul className="share-social">
                <li>
                  <a href={job.facebook}>
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href={job.twitter}>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href={job.google}>
                    <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href={job.linkedin}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDescription;
