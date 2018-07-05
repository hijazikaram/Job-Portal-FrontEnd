import React, {Component} from 'react';
import jobIcon from '../img/4.png';
import UserPageNavBar from './properties/UserPageNavBar';
import axios from 'axios';
class UserAppliedJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      applications: [],
    }
  }
  componentDidMount() {
      const userId = localStorage.getItem('user_id');
      axios.get('http://localhost:5000/api/users/' + userId + '/applications').then((response) => {
        if (response.data.applications) {
          this.setState({
            loaded: true,
            applications: response.data.applications
          });
        }
      }, (error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="section trending-ads latest-jobs-ads">
          <h4>Applied Jobs</h4>
            { this.state.applications.map((job , index) =>{
              return(
                <div className="job-ad-item" key={index}>
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href={'../JobList/'+ job._id }><img src="images/job/1.png" alt="" className="img-responsive"/></a>
                      </div>
                    </div>

                    <div className="ad-info">
                      <span>
                        <a href={'../JobList/'+ job._id } className="title">{job.job_title}</a>
                        @
                        <a href={'../JobList/'+ job._id }>{job.company_name}</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href={'../JobList/'+ job._id }>
                              <i className="fa fa-map-marker" aria-hidden="true"></i>{job.company_address}
                            </a>
                          </li>
                          <li>
                            <a href={'../JobList/'+ job._id }>
                              <i className="fa fa-clock-o" aria-hidden="true"></i>{job.job_type}</a>
                          </li>
                          <li>
                            <a href={'../JobList/'+ job._id }>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      );
  }
}

export default UserAppliedJobs;
