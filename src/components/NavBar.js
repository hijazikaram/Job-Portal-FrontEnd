import React, {Component} from 'react';
import logo from '../img/Islamic_Jobs_0701 copy.png';
import '../css/NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    let id = localStorage.getItem('user_id');
    let user_type = localStorage.getItem('user_type');
    const navbar = id && user_type
      ? (<ul className="navBarBtn">
        <li>
          <button>test</button>
        </li>
      </ul>)
      : (<ul className="sign-in">
        <li>
          <i className="fa fa-user"></i>
        </li>
        <li>
          <a href="/SignIn">Sign In</a>
        </li>
        <li>
          <a href="/SignUp">Register</a>
        </li>
      </ul>);
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
                  <li className="">
                    <Link to="/" activeclassname="active">Home</Link>
                  </li>
                  <li>
                    <Link to="/JobList" activeclassname="active">Job List</Link>
                  </li>
                  <li>
                    <Link to="/Prices" activeclassname="active">Price</Link>
                  </li>
                  <li>
                    <Link to="/JobList" activeclassname="active">Contact Us</Link>
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

              <Link to="/SignIn" className="btn">Post Your Job</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>);
  }
}

export default NavBar;
