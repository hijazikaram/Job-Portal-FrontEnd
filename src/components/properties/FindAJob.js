import React, {Component} from 'react';
import axios from 'axios';

import '../../css/SignUp.css';
import FormErrors from './FormErrors';

class FindAJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      checked: false,
      formErrors: {
        Name: '',
        Email: '',
        Password: '',
        Phone: '',
        confirmPassword: '',
        checkbox: ''
      },

      userNameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      phoneNumberValid: false,
      checkedValid: false,

      registerErrMsg: '',
      registerSuccess: false
    };

    this.no_errors = true;
  }
  onUserNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: e.target.value
    }, () => {
      this.validateField('name', value)
    });
  }
  onEmailChange = (e) => {
    const value = e.target.value;
    this.setState({
      email: e.target.value
    }, () => {
      this.validateField('email', value)
    });
  }
  onPasswordChange = (e) => {
    const value = e.target.value;
    this.setState({
      password: e.target.value
    }, () => {
      this.validateField('password', value)
    });
  }
  onConfirmPasswordChange = (e) => {
    const value = e.target.value;
    this.setState({
      confirmPassword: e.target.value
    }, () => {
      this.validateField('confirmPassword', value)
    });
  }
  onUserPhoneNumberChange = (e) => {
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (e.target.value == '' || re.test(e.target.value)) {
      this.setState({
        phoneNumber: e.target.value
      }, () => {
        this.validateField('userPhoneNumber', value)
      });
    }
  }
  onAgreeTermsAndCondition = (e) => {
    const value = e.target.checked;
    this.setState({
      checked: value
    }, () => {
      this.validateField('checked', value)
    });
  }
  onRegisterUser = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/users', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber
    }).then(res => {
      if (res.data.success) {
        this.setState({registerErrMsg: "Registered Successfully.", registerSuccess: true});

        setTimeout(function() {
          localStorage.setItem('user_id', res.data.user._id);
          window.location.href = '/UserProfile';
        }, 1000);

      } else {
        this.setState({registerErrMsg: res.data.error, registerSuccess: false});
      }
    });
  }
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;

    let userNameValid = this.state.userNameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    let checkedValid = this.state.checkedValid;

    switch (fieldName) {
      case 'name':
        if (value == '') {
          userNameValid = false;
        } else {
          userNameValid = true;
        }

        fieldValidationErrors.Name = userNameValid
          ? ''
          : ' is required';
        break;
      case 'email':
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        emailValid = regexp.test(value);
        fieldValidationErrors.Email = emailValid
          ? ''
          : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.Password = passwordValid
          ? ''
          : ' is too short';
        break;
      case 'confirmPassword':
        const password = this.state.password;
        if (value != password) {
          confirmPasswordValid = false;
        } else {
          confirmPasswordValid = true;
        }

        fieldValidationErrors.confirmPassword = confirmPasswordValid
          ? ''
          : 'Password not match';
        break;
      case 'userPhoneNumber':
        phoneNumberValid = value.length > 0;
        fieldValidationErrors.Phone = phoneNumberValid
          ? ''
          : ' is required';
        break;
      case 'checked':
        checkedValid = value;
        fieldValidationErrors.checked = value
          ? ''
          : 'Please check the box';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      userNameValid: userNameValid,
      emailValid: emailValid,
      passwordValid: passwordValid,
      confirmPasswordValid: confirmPasswordValid,
      phoneNumberValid: phoneNumberValid,
      checkedValid: checkedValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.userNameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid && this.state.phoneNumberValid && this.state.checkedValid
    });
  }

  render() {

    const userNameChange = this.onUserNameChange;
    const emailChange = this.onEmailChange;
    const passwordChange = this.onPasswordChange;
    const confirmPasswordChange = this.onConfirmPasswordChange;
    const userPhoneNumberChange = this.onUserPhoneNumberChange;
    const registerUser = this.onRegisterUser;
    const agreeTermsAndCondition = this.onAgreeTermsAndCondition;

    for (const key in this.state.formErrors) {
      if (this.state.formErrors[key]) {
        this.no_errors = false;
        break;
      } else {
        this.no_errors = true;
      }
    }

    const validationNotification = this.no_errors
      ? (<div></div>)
      : (<div className='panel panel-default'>
        <FormErrors formErrors={this.state.formErrors}/>
      </div>);

    const registerNotification = this.state.registerErrMsg
      ? (<div className='panel panel-default'>
        <div className={`notification ${ !this.state.registerSuccess
            ? 'error'
            : 'success'}`}>{this.state.registerErrMsg}
        </div>
      </div>)
      : (<div></div>);

    return (<div>
      <div role="tabpanel" className="tab-pane active" id="find-job">

        {validationNotification}

        {registerNotification}

        <form name="registerForm">
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
            <input type="text" className="form-control" placeholder="Mobile Number" onChange={userPhoneNumberChange} value={this.state.phoneNumber}/>
          </div>
          <div className="checkbox">
            <label className={`pull-left ${this.state.checked
                ? 'checked'
                : ''}`} htmlFor="signing"><input type="checkbox" name="signing" id="signing" onChange={agreeTermsAndCondition}/>
              By signing up for an account you agree to our Terms and Conditions
            </label>
          </div>
          <button type="submit" className="btn" disabled={!this.state.formValid} onClick={registerUser}>Registration</button>
        </form>
      </div>
    </div>);
  }
}

export default FindAJob;
