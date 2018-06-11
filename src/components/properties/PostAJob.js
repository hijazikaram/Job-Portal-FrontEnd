import React, {Component} from 'react';
import '../../css/SignUp.css';

import axios from 'axios';
import FormErrors from './FormErrors';

class PostAJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institutionName: "",
      email: "",
      password: "",
      confirmPassword: "",
      institutionPhoneNumber: "",
      checked: false,

      formErrors: {
        Name: '',
        Email: '',
        Password: '',
        Phone: '',
        confirmPassword: '',
        checkbox: ''
      },

      institutionNameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      phoneNumberValid: false,
      checkedValid: false,

      registerErrMsg: '',
      registerSuccess: false
    };
  }
  onInstitutionNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      institutionName: e.target.value
    }, () => {
      this.validateField('institutionName', value)
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
    const value = e.target.value
    this.setState({
      confirmPassword: e.target.value
    }, () => {
      this.validateField('confirmPassword', value)
    });
  }
  onInstitutionPhoneNumberChange = (e) => {
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (e.target.value == '' || re.test(e.target.value)) {
      this.setState({
        institutionPhoneNumber: e.target.value
      }, () => {
        this.validateField('institutionPhoneNumber', value)
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

  onRegister = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/institutions', {
      name: this.state.institutionName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.institutionPhoneNumber
    }).then(res => {
      if (res.data.success) {
        this.setState({registerErrMsg: "Registered Successfully.", registerSuccess: true});

        setTimeout(function() {
          localStorage.setItem('user_id', res.data.institution._id);
          localStorage.setItem('user_type', 'institution');
          window.location.href = '/InstitutionProfile';
        }, 1000);

      } else {
        this.setState({registerErrMsg: res.data.error, registerSuccess: false});
      }
    });
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;

    let institutionNameValid = this.state.institutionNameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    let checkedValid = this.state.checkedValid;

    switch (fieldName) {
      case 'institutionName':
        if (value == '') {
          institutionNameValid = false;
        } else {
          institutionNameValid = true;
        }

        fieldValidationErrors.Name = institutionNameValid
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
      case 'institutionPhoneNumber':
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
      institutionNameValid: institutionNameValid,
      emailValid: emailValid,
      passwordValid: passwordValid,
      confirmPasswordValid: confirmPasswordValid,
      phoneNumberValid: phoneNumberValid,
      checkedValid: checkedValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.institutionNameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid && this.state.phoneNumberValid && this.state.checkedValid
    });
  }

  render() {
    const institutionNameChange = this.onInstitutionNameChange;
    const emailChange = this.onEmailChange;
    const passwordChange = this.onPasswordChange;
    const confirmPasswordChange = this.onConfirmPasswordChange;
    const institutionPhoneNumberChange = this.onInstitutionPhoneNumberChange;
    const register = this.onRegister;
    const agreeTermsAndCondition = this.onAgreeTermsAndCondition;

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
      <div role="tabpanel" className="tab-pane" id="post-job">

        {validationNotification}

        {registerNotification}

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
          <input type="text" className="form-control" placeholder="Contact Number" onChange={institutionPhoneNumberChange} value={this.state.institutionPhoneNumber}/>
        </div>
        <div className="checkbox">
          <label className={`pull-left ${this.state.checked
              ? 'checked'
              : ''}`} htmlFor="signing-2"><input type="checkbox" name="signing-2" id="signing-2" onChange={agreeTermsAndCondition}/>
            By signing up for an account you agree to our Terms and Conditions
          </label>
        </div>
        <button type="submit" className="btn" onClick={register} disabled={!this.state.formValid}>Registration</button>
      </div>
    </div>);
  }
}

export default PostAJob;
