import React, { Component } from 'react';
import '../css/SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div>
      <section className="clearfix job-bg user-page">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div className="user-account">
                <h2>User Login</h2>
                <form action="#">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" href="#" className="btn">Login</button>
                </form>


                <div className="user-option">
                  <div className="checkbox pull-left">
                    <label htmlFor="logged"><input type="checkbox" name="logged" id="logged"/> Keep me logged in </label>
                  </div>
                  <div className="pull-right forgot-password">
                    <a href="#">Forgot password</a>
                  </div>
                </div>
              </div>
              <a href="#" className="btn-primary">Create a New Account</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default SignIn;
