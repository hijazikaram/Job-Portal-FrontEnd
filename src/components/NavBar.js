import React, {Component} from 'react';
import logo from '../img/Islamic_Jobs_0701 copy.png';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (<div>
      <header id="header" className="clearfix">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><img className="img-responsive" src={logo} alt="Logo"/></a>
            </div>

            <div className="navbar-left">
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="job-list.html">Job list</a>
                  </li>
                  <li>
                    <a href="details.html">Job Details</a>
                  </li>
                  <li>
                    <a href="resume.html">Resume</a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">Pages<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="post-resume.html">Post Resume</a>
                      </li>
                      <li>
                        <a href="post.html">Job Post</a>
                      </li>
                      <li>
                        <a href="edit-resume.html">Edit Resume</a>
                      </li>
                      <li>
                        <a href="profile-details.html">profile Details</a>
                      </li>
                      <li>
                        <a href="bookmark.html">Bookmark</a>
                      </li>
                      <li>
                        <a href="applied-job.html">Applied Job</a>
                      </li>
                      <li>
                        <a href="delete-account.html">Close Account</a>
                      </li>
                      <li>
                        <a href="signup.html">Job Signup</a>
                      </li>
                      <li>
                        <a href="signin.html">Job Signin</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right">
              <ul className="sign-in">
                <li>
                  <i className="fa fa-user"></i>
                </li>
                <li>
                  <a href="/SignIn">Sign In</a>
                </li>
                <li>
                  <a href="/SignUp">Register</a>
                </li>
              </ul>

              <a href="post.html" className="btn">Post Your Job</a>
            </div>
          </div>
        </nav>
      </header>
    </div>);
  }
}

export default NavBar;
