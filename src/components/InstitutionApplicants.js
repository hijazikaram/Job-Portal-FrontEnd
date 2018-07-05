import React, {Component} from 'react';
import axios from 'axios';

class InstitutionApplicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants : [],
      loaded: false
    }
  }
  componentDidMount() {
      const jobId = this.props.match.params.job_id;

      axios.get('http://localhost:5000/api/jobs/' + jobId + '/applications').then((response) => {
        if (response.data.applications) {
          this.setState({
            loaded: true,
            applicants: response.data.applications
          });
        }
      }, (error) => {
        console.log(error);
      });
  }
  render() {
    const applications = this.state.applicants.length > 0 ? this.state.applicants.map(applicant => (
        <tr>
          <td>{applicant.email}</td>
          <td>{applicant.phoneNumber}</td>
          <td><a href={'http://localhost:5000/api/job/resume/' + applicant.resumeId}>{applicant.resumeName}</a></td>
        </tr>
    )) : <h1>You have no applicants at this time.</h1>
    return (
      <div className="container">
        <div className="breadcrumb-section">
          <div className="profile job-profile">
            <div className="user-pro-section">
              <div className="profile-details section">
                <h2>Applicants</h2>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>phoneNumber</th>
                      <th>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstitutionApplicants;
