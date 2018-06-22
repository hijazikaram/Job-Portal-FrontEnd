import React, {Component} from 'react';
import jobIcon from '../img/4.png';

class UserFavoriteJobs extends Component {
  render() {
    return (<div className="section trending-ads latest-jobs-ads">
      <h4>Bookmark</h4>
      <div className="job-ad-item">
        <div className="item-info">
          <div className="item-image-box">
            <div className="item-image">
              <a href="job-details.html"><image src={jobIcon} alt="Image" className="img-responsive"/></a>
            </div>
          </div>

          <div className="ad-info">
            <span>
              <a href="job-details.html" className="title">Human Resource Manager</a>
              @
              Dropbox Inc
            </span>
            <div className="ad-meta">
              <ul>
                <li>

                    <i className="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US
                  
                </li>
                <li>

                    <i className="fa fa-clock-o" aria-hidden="true"></i>Full Time
                </li>
                <li>

                    <i className="fa fa-money" aria-hidden="true"></i>$25,000 - $35,000
                </li>
                <li>

                    <i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development
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

export default UserFavoriteJobs;
