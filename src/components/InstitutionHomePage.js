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
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      facebook: '',
      twitter: '',
      google: '',
      linkedin: '',

      oldPassword: '',
      newPassword: '',

      notificationMsg: '',
      updateProfileValid: false
    };

    this.oldPassword = '';
    this.newPassword = '';
    this.newPasswordConfirm = '';

    this.id = localStorage.getItem('user_id');

    axios.get('http://localhost:5000/api/institution/' + this.id).then(res => {
      var institution = res.data.institution;
      this.setState({ logo: institution.logo, name: institution.name, email: institution.email, phoneNumber: institution.phoneNumber, facebook: institution.facebook, twitter: institution.twitter, google: institution.google, linkedin: institution.linkedin });

      if (!institution.address) {
        this.setState({ address: '' });
      } else {
        this.setState({ address: institution.address });
      }

      this.temp = this.state;

      this.logoChanged = false;
      this.nameChanged = false;
      this.emailChanged = false;
      this.mobileChanged = false;
      this.addressChanged = false;
      this.facebook = false;
      this.twitter = false;
      this.google = false;
      this.linkedin = false;

    });
  }

  getFile = (file) => {
    if (file.base64) {
      this.setState({ logo: file.base64 });
      this.setState({ logoChanged: true });
    }
  }

  componentWillMount = (e) => {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');

    if (!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }
  onUserNameChange = (e) => {
    this.setState({ name: e.target.value });
    if (this.temp.name != e.target.value) {
      this.nameChanged = true;
    } else {
      this.nameChanged = false;
    }
    this.forceUpdate();
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });

    if (this.temp.email != e.target.value) {
      this.emailChanged = true;
    } else {
      this.emailChanged = false;
    }
    this.forceUpdate();
  }

  onPhoneNumberChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
    if (this.temp.phoneNumber != e.target.value) {
      this.mobileChanged = true;
    } else {
      this.mobileChanged = false;
    }
    this.forceUpdate();
  }

  onAddressChange = (e) => {
    this.setState({ address: e.target.value });
    if (this.temp.address != e.target.value) {
      this.addressChanged = true;
    } else {
      this.addressChanged = false;
    }
    this.forceUpdate();
  }
  onFacebookChange = (e) => {
    this.setState({ facebook: e.target.value });
    if (this.temp.facebook != e.target.value) {
      this.facebookChanged = true;
    } else {
      this.facebookChanged = false;
    }
    this.forceUpdate();
  }
  onTwitterChange = (e) => {
    this.setState({ twitter: e.target.value });
    if (this.temp.twitter != e.target.value) {
      this.twitterChanged = true;
    } else {
      this.twitterChanged = false;
    }
    this.forceUpdate();
  }
  onGoogleChange = (e) => {
    this.setState({ google: e.target.value });
    if (this.temp.google != e.target.value) {
      this.googleChanged = true;
    } else {
      this.googleChanged = false;
    }
    this.forceUpdate();
  }
  onLinkedinChange = (e) => {
    this.setState({ linkedin: e.target.value });
    if (this.temp.linkedin != e.target.value) {
      this.linkedinChanged = true;
    } else {
      this.linkedinChanged = false;
    }
    this.forceUpdate();
  }

  onUpdateProfile = (e) => {
    e.preventDefault();
    var self = this;

    if (self.oldPassword != '') {
      if (!self.newPassword || !self.newPasswordConfirm) {
        // Must input new password & confirm password
        self.setState({ notificationMsg: 'Please input new Password', updateProfileValid: false });
      } else {
        // New Password request here.
        if (self.newPassword != self.newPasswordConfirm) {
          self.setState({ notificationMsg: 'New Password doesnt match', updateProfileValid: false });
        } else {
          self.setState({ notificationMsg: '', updateProfileValid: false, oldPassword: self.oldPassword, newPassword: self.newPassword }, () => {
            axios.put('http://localhost:5000/api/institution/' + self.id, self.state).then(function (response) {
              if (!response.data.error) {
                self.setState({ notificationMsg: 'Updated Successfully.', updateProfileValid: true });
                setTimeout(function () {
                  window.location.reload(true);
                }, 300);
              } else {
                self.setState({ notificationMsg: response.data.error, updateProfileValid: false });
              }
            }, function (error) {
              console.log(error);
            });
          });
        }
      }
    } else {
      axios.put('http://localhost:5000/api/institution/' + self.id, self.state).then(function (response) {
        console.log(response);
        if (!response.data.error) {
          self.setState({ notificationMsg: 'Updated Successfully.', updateProfileValid: true });
          setTimeout(function () {
            window.location.reload(true);
          }, 300);
        }
      }, function (error) {
        console.log(error);
      });
    }
  }


  onOldPasswordInput = (e) => {
    this.oldPassword = e.target.value;
  }

  onNewPasswordChange = (e) => {
    this.newPassword = e.target.value;
  }

  onNewPasswordConfirmChange = (e) => {
    this.newPasswordConfirm = e.target.value;
  }
  render() {
    var userNameChange = this.onUserNameChange;
    var emailChange = this.onEmailChange;
    var phoneNumberChange = this.onPhoneNumberChange;
    var addressChange = this.onAddressChange;
    var facebookChange = this.onFacebookChange;
    var twitterChange = this.onTwitterChange;
    var googleChange = this.onGoogleChange;
    var linkedinChange = this.onLinkedinChange;

    var oldPasswordInput = this.onOldPasswordInput;
    var newPasswordChange = this.onNewPasswordChange;
    var newPasswordConfirmChange = this.onNewPasswordConfirmChange;

    var updateProfile = this.onUpdateProfile;

    var notification = this.state.notificationMsg ? (
      <div className='panel panel-default'>
        <div className={`notification ${!this.state.updateProfileValid ? 'error' : 'success'}`}>{this.state.notificationMsg}
        </div>
      </div>) : (<div></div>);
    console.log(this.state);
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
                      <FileBase64 onDone={this.getFile} />
                      Upload Photo
                    </label>
                    {this.state.logo ? (
                      <img className="company-logo" src={this.state.logo} />
                    ) : (
                        <div></div>
                      )}
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Jhon Doe" value={this.state.name} onChange={userNameChange} />
                  </div>

                  <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" className="form-control" placeholder="jhondoe@mail.com" value={this.state.email} onChange={emailChange} />
                  </div>

                  <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" className="form-control" placeholder="+213 1234 56789" value={this.state.phoneNumber} onChange={phoneNumberChange} />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="8003 River Field ct" value={this.state.address} onChange={addressChange} />
                  </div>

                </form>
              </div>
              <div className="change-social section">
                <h2>Social</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control" value={this.state.facebook} onChange={facebookChange} />
                      <span className="form-control-feedback">
                        <i className="fa fa-facebook"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control" value={this.state.twitter} onChange={twitterChange}/>
                      <span className="form-control-feedback">
                        <i className="fa fa-twitter"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control" value={this.state.google} onChange={googleChange}/>
                      <span className="form-control-feedback">
                        <i className="fa fa-google-plus"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control" value={this.state.linkedin} onChange={linkedinChange}/>
                      <span className="form-control-feedback">
                        <i className="fa fa-linkedin"></i>
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
                  <input type="password" className="form-control" onChange={newPasswordChange} />
                </div>

                <div className="form-group">
                  <label>Confirm password</label>
                  <input type="password" className="form-control" onChange={newPasswordConfirmChange} />
                </div>
              </div>
              <div className="preferences-settings section">
                <div className="buttons">
                  <a href="javascript:void(0)" className="btn" onClick={updateProfile} disabled={!this.nameChanged && !this.emailChanged && !this.mobileChanged && !this.addressChanged && !this.facebookChanged && !this.twitterChanged && !this.googleChanged&& !this.linkedinChanged }>Update Profile</a>
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
