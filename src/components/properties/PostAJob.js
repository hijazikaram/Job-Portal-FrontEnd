import React, { Component } from 'react';
import '../../css/SignUp.css';


class PostAJob extends Component {
  constructor(props) {
		super(props);
		this.state = {
      institutionName: "",
			email: "",
      password: "",
      confirmPassword: "",
      institutionPhoneNumber: "",
      checked: false
		};
	}
  onInstitutionNameChange(e) {
    this.setState({ institutionName: e.target.value });
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
  onInstitutionPhoneNumberChange(e) {
    this.setState({ institutionPhoneNumber: e.target.value });
  }
  render() {
    var institutionNameChange = this.onInstitutionNameChange.bind(this);
    var emailChange = this.onEmailChange.bind(this);
    var passwordChange = this.onPasswordChange.bind(this);
    var confirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    var institutionPhoneNumberChange = this.onInstitutionPhoneNumberChange.bind(this);
    console.log(this.state);
    return (
      <div>
        <div role="tabpanel" className="tab-pane" id="post-job">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Institution Name" onChange={institutionNameChange}/>
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
              <input type="text" className="form-control" placeholder="Contact Number" onChange={institutionPhoneNumberChange}/>
            </div>
            <div className="checkbox">
              <label className="pull-left" htmlFor="signing-2"><input type="checkbox" name="signing-2" id="signing-2"/>By signing up for an account you agree to our Terms and Conditions</label>
            </div>
            <button type="submit" className="btn">Registration</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostAJob;
