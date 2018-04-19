import React, {Component} from 'react';
import axios from 'axios';

import FormErrors from './properties/FormErrors';
import '../css/SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationMsg: '',
      loginValid: false
    };
  }
  componentWillMount = () => {
    var id = localStorage.getItem('user_id');
    var user_type = localStorage.getItem('user_type');
    if (id && !user_type) {
      window.location.href = '/UserProfile';
    }

    if (id && user_type) {
      window.location.href = '/InstitutionProfile';
    }
  }
  onLogin = (e) => {
    e.preventDefault();
    var self = this;

    /* Check if it's a normal user */
    axios.post('http://localhost:5000/api/user', self.state).then(function(response) {

      if (response.data.success) {
        // Correct credentials
        self.setState({notificationMsg: 'Login Successfully', loginValid: true});
        setTimeout(function() {
          localStorage.setItem('user_id', response.data.user._id);
          window.location.href = '/UserProfile';
        }, 1000);
      } else {

        /* Check if it's an institution account */
        axios.post('http://localhost:5000/api/institution', self.state).then(function(response) {

          if (response.data.success) {
            // Correct credentials
            self.setState({notificationMsg: 'Login Successfully', loginValid: true});
            setTimeout(function() {
              localStorage.setItem('user_id', response.data.institution._id);
              localStorage.setItem('user_type', 'institution');
              window.location.href = '/InstitutionProfile';
            }, 1000);
          } else {
            self.setState({notificationMsg: response.data.error, loginValid: false});
          }
        }, function(error) {
          console.log(error);
        });
      }
    }, function(error) {
      console.log(error);
    })
  }

  onEmailInput = (e) => {
    this.setState({email: e.target.value});
  }

  onPasswordInput = (e) => {
    this.setState({password: e.target.value});
  }

  render() {
    var login = this.onLogin;
    var emailInput = this.onEmailInput;
    var passwordInput = this.onPasswordInput;

    var loginNotification = this.state.notificationMsg
      ? (<div className='panel panel-default'>
        <div className={`notification ${ !this.state.loginValid
            ? 'error'
            : 'success'}`}>{this.state.notificationMsg}
        </div>
      </div>)
      : (<div></div>);

    return (<div>
      <section className="clearfix job-bg user-page">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" id="login-page">
              <div className="user-account">
                <h2>User Login</h2>

                {loginNotification}

                <form action="#">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" onChange={emailInput}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" onChange={passwordInput}/>
                  </div>
                  <button type="submit" className="btn" onClick={login}>Login</button>
                </form>

                <div className="user-option">
                  <div className="checkbox pull-left">
                    <label htmlFor="logged"><input type="checkbox" name="logged" id="logged"/>
                      Keep me logged in
                    </label>
                  </div>
                  <div className="pull-right forgot-password">
                    <a href="#">Forgot password</a>
                  </div>
                </div>
              </div>
              <a href="/SignUp" className="btn-primary">Create a New Account</a>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

export default SignIn;
