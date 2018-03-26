import React, { Component } from 'react';
import axios from 'axios';

import userImg from '../img/user.jpg';

class UserHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      password: '',
      phoneNumber: ''
    };

    this.id = this.props.location.search.split("?id=")[1];
    axios.get('http://localhost:5000/api/user/' + this.id).then(res => {
      var user = res.data.user;
      this.setState({ name : user.name, email : user.email, password : user.password ,phoneNumber : user.phoneNumber });
    });
  }
  render() {
    
    return (
      <div>
      <div className="breadcrumb-section">
        <div className="profile job-profile">
    				<div className="user-pro-section">
    					<div className="profile-details section">
    						<h2>Profile Details</h2>
    						<form action="#">
    							<div className="form-group">
    								<label>Username</label>
    								<input type="text" className="form-control" placeholder="Jhon Doe" value={this.state.name}/>
    							</div>

    							<div className="form-group">
    								<label>Email ID</label>
    								<input type="email" className="form-control" placeholder="jhondoe@mail.com" value={this.state.email}/>
    							</div>

    							<div className="form-group">
    								<label>Mobile</label>
    								<input type="text" className="form-control" placeholder="+213 1234 56789" value={this.state.phoneNumber}/>
    							</div>

    							<div className="form-group">
    								<label>Address</label>
    								<input type="text" className="form-control" placeholder="San Francisco, CA, US"/>
    							</div>

    							<div className="form-group">
    								<label>Industry Expertise</label>
            <input type="text" className="form-control" placeholder="UI & UX Designer"/>
    							</div>
    						</form>
    					</div>
    					<div className="change-password section">
    						<h2>Change password</h2>
    						<div className="form-group">
    							<label>Old Password</label>
    							<input type="password" className="form-control" />
    						</div>

    						<div className="form-group">
    							<label>New password</label>
    							<input type="password" className="form-control"/>
    						</div>

    						<div className="form-group">
    							<label>Confirm password</label>
    							<input type="password" className="form-control"/>
    						</div>
    					</div>
    					<div className="preferences-settings section">
    						<h2>Preferences Settings</h2>
    						<div className="checkbox">
    							<label><input type="checkbox" name="logged"/>Comments are enabled on my Resume</label>
    							<label><input type="checkbox" name="receive"/>I want to receive newsletter.</label>
    							<label><input type="checkbox" name="want"/>I want to receive advice on portfolio</label>
    						</div>

    						<div className="buttons">
    							<a href="#" className="btn">Update Profile</a>
    							<a href="#" className="btn cancle">Cancel</a>
    						</div>
    					</div>
    				</div>
        </div>
      </div>
      </div>
    );
    }
}

export default UserHomePage;
