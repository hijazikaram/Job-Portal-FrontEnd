import React, {Component} from 'react';
import '../css/MyProfile.css';
import '../css/Responsive.css';
import '../css/Preset.css';
import '../css/index.css';
import InstitutionPageNavBar from './properties/InstitutionPageNavBar';


import Home from "./InstitutionHomePage";
import InstitutionPostAJob from "./InstitutionPostAJob";
import EditUserResume from "./EditUserResume";
import DeleteUserProfile from "./DeleteUserProfile";
import InstitutionPostedJobs from "./InstitutionPostedJobs";

class Transactions extends Component {
  render() {
    return (<div>
      <section className="job-bg ad-profile-page">
        <div className="container">
        <div class="breadcrumb-section">
<div class="profile job-profile">
<div class="user-pro-section">
<div class="profile-details section">
<h2>Transactions</h2>
			
			
	<table class="table table-hover">
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Total Jobs</th>
        <th>Used</th>
        <th>Reamining</th>
        <th>Job Duration</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#2256</td>
        <td>135</td>
        <td>5</td>
        <td>7</td>
        <td>30 days</td>
        <td><span class="dot-active"></span> Accepted</td>
      </tr>
      <tr>
        <td class="table-active">#2584</td>
        <td class="table-active">102</td>
        <td class="table-active">10</td>
        <td class="table-active">1</td>
        <td class="table-active">18 days</td>
        <td class="table-active"><span class="dot-inactive"></span> Pending</td>
      </tr>
      <tr>
        <td>#5612</td>
        <td>188</td>
        <td>3</td>
        <td>8</td>
        <td>25 days</td>
        <td><span class="dot-active"></span> Accepted</td>
        
      </tr>
      <tr>
        <td class="table-active">#2584</td>
        <td class="table-active">102</td>
        <td class="table-active">10</td>
        <td class="table-active">1</td>
        <td class="table-active">18 days</td>
        <td class="table-active"><span class="dot-inactive"></span> Pending</td>
      </tr>
      <tr>
        <td>#5612</td>
        <td>188</td>
        <td>3</td>
        <td>8</td>
        <td>25 days</td>
        <td><span class="dot-active"></span> Accepted</td>
        
      </tr>
    </tbody>
  </table>		
			
			
			
</div>
</div>
</div>
</div>
        </div>
      </section>
    </div>);
  }
}

export default Transactions;
