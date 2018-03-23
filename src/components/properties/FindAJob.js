import React, { Component } from 'react';
import '../../css/SignUp.css';

class FindAJob extends Component {
  constructor(props) {
		super(props);
		this.state = {
      userName: "",
			email: "",
      password: "",
      confirmPassword: "",
      userPhoneNumber: "",
      checked: false
		};
	}
  onUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  onConfirmPasswordChange(e) {
    this.setState({ confirmPassword: e.target.value });
  }
  onUserPhoneNumberChange(e) {
    this.setState({ userPhoneNumber: e.target.value });
  }
  render() {
    var userNameChange = this.onUserNameChange.bind(this);
    var emailChange = this.onEmailChange.bind(this);
    var passwordChange = this.onPasswordChange.bind(this);
    var confirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    var userPhoneNumberChange = this.onUserPhoneNumberChange.bind(this);
    console.log(this.state);
    return (
      <div>
      <div role="tabpanel" className="tab-pane active" id="find-job">
        <form action="#">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" onChange={userNameChange}/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" onChange={emailChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={passwordChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" onChange={confirmPasswordChange}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Mobile Number" onChange={userPhoneNumberChange}/>
          </div>
          <div className="checkbox">
            <label className="pull-left" htmlFor="signing"><input type="checkbox" name="signing" id="signing"/> By signing up for an account you agree to our Terms and Conditions </label>
          </div>
          <button type="submit" className="btn">Registration</button>
        </form>
      </div>
      </div>
    );
  }
}

export default FindAJob;
