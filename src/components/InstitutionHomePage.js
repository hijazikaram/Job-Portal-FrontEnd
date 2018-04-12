import React, { Component } from 'react';
import userImg from '../img/user.jpg';
import axios from 'axios';

class UserHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : '',
      email : '',
      phoneNumber: '',
      address: '',
      comments_enable : false,
      receive_newsletter: false,
      receive_advice: false,

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
      this.setState({ name : institution.name, email : institution.email ,phoneNumber : institution.phoneNumber, comments_enable: institution.comments_enable, receive_newsletter: institution.receive_newsletter, receive_advice: institution.receive_advice});

      if(!institution.address) {
        this.setState({ address : '' });
      } else {
        this.setState({ address : institution.address });
      }
    });
  }

  componentWillMount() {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');
    
    if(!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }
  onUserNameChange(e) {
    this.setState({ name : e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email : e.target.value });
  }

  onPhoneNumberChange(e) {
    this.setState({ phoneNumber : e.target.value });
  }

  onAddressChange(e) {
    this.setState({ address : e.target.value });
  }

  onUpdateProfile(e) {
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

  onUpdateCommentsEnable(e) {
    this.setState({ comments_enable : e.target.checked });
  }

  onUpdateReceiveNewsletter(e) {
    this.setState({ receive_newsletter : e.target.checked });
  }

  onUpdateReceiveAdvice(e) {
    this.setState({ receive_advice : e.target.checked });
  }

  onOldPasswordInput(e) {
    this.oldPassword = e.target.value;
  }

  onNewPasswordChange(e) {
    this.newPassword = e.target.value; 
  }

  onNewPasswordConfirmChange(e) {
    this.newPasswordConfirm = e.target.value;
  }
  render() {
    var userNameChange = this.onUserNameChange.bind(this);
    var emailChange = this.onEmailChange.bind(this);
    var phoneNumberChange = this.onPhoneNumberChange.bind(this);
    var addressChange = this.onAddressChange.bind(this);

    var oldPasswordInput = this.onOldPasswordInput.bind(this);
    var newPasswordChange = this.onNewPasswordChange.bind(this);
    var newPasswordConfirmChange = this.onNewPasswordConfirmChange.bind(this);

    var updateCommentsEnable = this.onUpdateCommentsEnable.bind(this);
    var updateReceiveNewsletter = this.onUpdateReceiveNewsletter.bind(this);
    var updateReceiveAdvice = this.onUpdateReceiveAdvice.bind(this);

    var updateProfile = this.onUpdateProfile.bind(this);
    
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
                <h2>Preferences Settings</h2>
                <div className="checkbox">
                  <label className ={`${this.state.comments_enable ? 'checked' : ''}`}>
                    <input type="checkbox" name="logged" checked={this.state.comments_enable} onChange={updateCommentsEnable}/>
                    Comments are enabled on my Resume
                  </label>

                  <label className ={`${this.state.receive_newsletter ? 'checked' : ''}`}>
                    <input type="checkbox" name="receive" checked={this.state.receive_newsletter} onChange={updateReceiveNewsletter}/>
                    I want to receive newsletter.
                  </label>

                  <label className ={`${this.state.receive_advice ? 'checked' : ''}`}>
                    <input type="checkbox" name="want" checked={this.state.receive_advice} onChange={updateReceiveAdvice}/>
                    I want to receive advice on portfolio
                  </label>
                </div>

                <div className="buttons">
                  <a href="javascript:void(0)" className="btn" onClick={updateProfile}>Update Profile</a>
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
