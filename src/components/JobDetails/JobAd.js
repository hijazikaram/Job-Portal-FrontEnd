import React, {Component} from 'react';
import jobIcon from '../../img/4.png';
import {Link} from 'react-router-dom';
class JobAd extends Component {
  render() {
    const { job, applyjob, _onModalToggle,  _onOpenBookmarkModalToggle, formatData, job_logo, jobIcon } = this.props;
    return (
      <div className="section job-ad-item">
        <div className="item-info">
          <div className="item-image-box">
            <div className="item-image">
              <img src={job_logo
                  ? job_logo
                  : jobIcon} alt="" className="img-responsive"/>
            </div>
          </div>

          <div className="ad-info">
            <span>
              <span>
                <a href="" className="title">{job.job_title}</a>
              </span>
              @
              <a href="">
                {job.company_name}</a>
            </span>
            <div className="ad-meta">
              <ul>
                <li>
                  <Link to="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{job.location_state}, {job.location_country}</Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>{job.job_type}</Link>
                </li>
                <li>
                  <i className="fa fa-money" aria-hidden="true"></i>{
                    job.salary_negotiable
                      ? 'Negotiable'
                      : '$' + (
                      job.salary_min) + '-' + '$' + (
                      job.salary_max)
                  }</li>
                <li>
                  <Link to="">
                    <i className="fa fa-tags" aria-hidden="true"></i>{job.job_category}</Link>
                </li>
                <li>
                  <i className="fa fa-hourglass-start" aria-hidden="true"></i>Application Deadline : {formatData(job.application_deadline)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social-media">
          <div className="button">
            <span onClick={_onModalToggle} className="btn btn-primary" disabled={!applyjob}>
              <i className="fa fa-briefcase" aria-hidden="true"></i>Apply For This Job</span>
            <span onClick={_onOpenBookmarkModalToggle} className="btn btn-primary" disabled={!applyjob}>
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>Bookmark</span>
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
    );
  }
}

export default JobAd;
