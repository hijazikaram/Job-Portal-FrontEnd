import React, { Component } from 'react';
import userImg from '../img/user.jpg';
import axios from 'axios';

import FileBase64 from 'react-file-base64';

import '../css/PostAJob.css';

class UserHomePage extends Component {
  constructor(props) {
    super(props);
    this.temp = {

    };

    this.state = {
      logo: '',
      name : '',
      email : '',
      phoneNumber: '',
      address: '',

      oldPassword: '',
      newPassword: '',

      notificationMsg : '',
      updateProfileValid: false
    };

    this.oldPassword = '';
    this.newPassword = '';
    this.newPasswordConfirm = '';

    this.id = localStorage.getItem('user_id');

    axios.get('http://localhost:5000/api/institution/' + this.id).then(res => {
      var institution = res.data.institution;
      this.setState({ logo : institution.logo, name : institution.name, email : institution.email ,phoneNumber : institution.phoneNumber});

      if(!institution.address) {
        this.setState({ address : '' });
      } else {
        this.setState({ address : institution.address });
      }

      this.temp = this.state;

      this.logoChanged = false;
      this.nameChanged = false;
      this.emailChanged = false;
      this.mobileChanged = false;
      this.addressChanged = false;
    });
  }

  getFile(file){
    if(file.base64) {
      this.setState({ logo : file.base64 });
      this.setState({ logoChanged : true });
    }
  }

  componentWillMount() {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');

    if(!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }
  onUserNameChange = (e) => {
    this.setState({ name : e.target.value });
    if(this.temp.name != e.target.value) {
      this.nameChanged = true;
    } else {
      this.nameChanged = false;
    }
    this.forceUpdate();
  }

  onEmailChange = (e) => {
    this.setState({ email : e.target.value });

    if(this.temp.email != e.target.value) {
      this.emailChanged = true;
    } else {
      this.emailChanged = false;
    }
    this.forceUpdate();
  }

  onPhoneNumberChange = (e) => {
    this.setState({ phoneNumber : e.target.value });
    if(this.temp.phoneNumber != e.target.value) {
      this.mobileChanged = true;
    } else {
      this.mobileChanged = false;
    }
    this.forceUpdate();
  }

  onAddressChange = (e) => {
    this.setState({ address : e.target.value });
    if(this.temp.address != e.target.value) {
      this.addressChanged = true;
    } else {
      this.addressChanged = false;
    }
    this.forceUpdate();
  }

  onUpdateProfile = (e) => {
    e.preventDefault();
    var self = this;

    if(self.oldPassword !='') {
      if(!self.newPassword || !self.newPasswordConfirm) {
        // Must input new password & confirm password
        self.setState({ notificationMsg: 'Please input new Password' , updateProfileValid : false });
      } else {
        // New Password request here.
        if(self.newPassword != self.newPasswordConfirm) {
          self.setState({ notificationMsg: 'New Password doesnt match' , updateProfileValid : false });
        } else {
          self.setState({ notificationMsg: '' , updateProfileValid : false, oldPassword : self.oldPassword, newPassword : self.newPassword }, () => {
            axios.put('http://localhost:5000/api/institution/' + self.id , self.state).then(function (response) {
              if(!response.data.error) {
                self.setState({ notificationMsg: 'Updated Successfully.' , updateProfileValid : true });
                setTimeout(function () {
                  window.location.reload(true);
                },300);
              } else {
                self.setState({ notificationMsg: response.data.error , updateProfileValid : false });
              }
            }, function (error) {
              console.log(error);
            });
          });
        }
      }
    } else {
      axios.put('http://localhost:5000/api/institution/' + self.id , self.state).then(function (response) {
        console.log(response);
        if(!response.data.error) {
          self.setState({ notificationMsg: 'Updated Successfully.' , updateProfileValid : true });
          setTimeout(function () {
            window.location.reload(true);
          },300);
        }
      }, function (error) {
        console.log(error);
      });
    }
  }


  onOldPasswordInput= (e) => {
    this.oldPassword = e.target.value;
  }

  onNewPasswordChange= (e) => {
    this.newPassword = e.target.value;
  }

  onNewPasswordConfirmChange= (e) => {
    this.newPasswordConfirm = e.target.value;
  }
  render() {
    var userNameChange = this.onUserNameChange;
    var emailChange = this.onEmailChange;
    var phoneNumberChange = this.onPhoneNumberChange;
    var addressChange = this.onAddressChange;

    var oldPasswordInput = this.onOldPasswordInput;
    var newPasswordChange = this.onNewPasswordChange;
    var newPasswordConfirmChange = this.onNewPasswordConfirmChange;

    var updateProfile = this.onUpdateProfile;

    var notification = this.state.notificationMsg ? (
      <div className='panel panel-default'>
        <div className={`notification ${!this.state.updateProfileValid ? 'error' : 'success'}`}>{ this.state.notificationMsg }
        </div>
      </div>) : (<div></div>);

    return (
      <div>
        <div className="breadcrumb-section">
          <div className="profile job-profile">
    				<div className="user-pro-section">
    					<div className="profile-details section">
    						<h2>Profile Details</h2>

                {notification}

    						<form action="#">
                  <div className="form-group">
                    <label className="upload-image caption">Max 20MB</label>
                    <label className="upload-image">
                      <FileBase64 onDone={ this.getFile }/>
                      Upload Photo
                    </label>
                    { this.state.logo ? (
                      <img className="company-logo" src={this.state.logo} />
                    ) : (
                      <div></div>
                    )}
                  </div>
    							<div className="form-group">
    								<label>Username</label>
    								<input type="text" className="form-control" placeholder="Jhon Doe" value={this.state.name} onChange={userNameChange}/>
    							</div>

    							<div className="form-group">
    								<label>Email ID</label>
    								<input type="email" className="form-control" placeholder="jhondoe@mail.com"  value={this.state.email} onChange={emailChange}/>
    							</div>

    							<div className="form-group">
    								<label>Mobile</label>
    								<input type="text" className="form-control" placeholder="+213 1234 56789" value={this.state.phoneNumber} onChange={phoneNumberChange}/>
    							</div>

    							<div className="form-group">
    								<label>Your City</label>
    								<select className="form-control" value={this.state.address} onChange={addressChange}>
                      <option value="">Select the City</option>
    									<option value="Los_angeles">Los Angeles, USA</option>
    									<option value="Dhaka">Dhaka, BD</option>
    									<option value="Shanghai">Shanghai</option>
    									<option value="Karachi">Karachi</option>
    									<option value="Beijing">Beijing</option>
    									<option value="Lagos">Lagos</option>
    									<option value="Delhi">Delhi</option>
    									<option value="Tianjin">Tianjin</option>
    									<option value="Rio">Rio de Janeiro</option>
    								</select>
    							</div>

    						</form>
    					</div>
              <div className="change-password section">
                <h2>Social</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control"/>
                      <span className="form-control-feedback">
                          <i className="fa fa-twitter"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control"/>
                      <span className="form-control-feedback">
                          <i className="fa fa-linkedin"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control"/>
                      <span className="form-control-feedback">
                          <i className="fa fa-google-plus"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control"/>
                      <span className="form-control-feedback">
                          <i className="fa fa-facebook"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
    					<div className="change-password section">
                <h2>Change password</h2>
                <div className="form-group">
                  <label>Old Password</label>
                  <input type="password" className="form-control" onChange={oldPasswordInput} />
                </div>

                <div className="form-group">
                  <label>New password</label>
                  <input type="password" className="form-control" onChange={newPasswordChange}/>
                </div>

                <div className="form-group">
                  <label>Confirm password</label>
                  <input type="password" className="form-control" onChange={newPasswordConfirmChange}/>
                </div>
              </div>
    					<div className="preferences-settings section">
                <div className="buttons">
                  <a href="javascript:void(0)" className="btn" onClick={updateProfile} disabled = {!this.nameChanged && !this.emailChanged && !this.mobileChanged && !this.addressChanged && !this.commentsEnableChanged && !this.receiveNewsletterChanged && !this.receiveAdviceChanged && !this.state.logoChanged }>Update Profile</a>
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
