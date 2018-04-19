import React, {Component} from 'react';
import jobIcon from '../img/4.png';

class UserAppliedJobs extends Component {
  render() {
    return (<div className="section trending-ads latest-jobs-ads">
      <h4>Applied Jobs</h4>
      <div className="job-ad-item">
        <div className="item-info">
          <div className="item-image-box">
            <div className="item-image">
              <a href="job-details.html"><img src={jobIcon} alt="Image" className="img-responsive"/></a>
            </div>
          </div>

          <div className="ad-info">
            <span>
              <a href="job-details.html" className="title">Human Resource Manager</a>
              @
              <a href="#">Dropbox Inc</a>
            </span>
            <div className="ad-meta">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Full Time</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-money" aria-hidden="true"></i>$25,000 - $35,000</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="close-icon">
            <i className="fa fa-window-close" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default UserAppliedJobs;
