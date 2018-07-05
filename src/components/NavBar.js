import React, {Component} from 'react';
import logo from '../img/Islamic_Jobs_0701 copy.png';
import profilePic from '../img/user.jpg';
import '../css/NavBar.css';

const styles = {
  profilePic: {
    width: 40,
    height: 40,
    display: 'inline-block'
  },
  picture: {
    borderRadius: '50%'
  }
}

class NavBar extends Component {
  render() {
    let id = localStorage.getItem('user_id');
    let user_type = localStorage.getItem('user_type');
    let url = user_type === 'institution' ? '/InstitutionProfile' : '/UserProfile';
    const navbar = id
      ? (
          <div style={styles.profilePic}>
            <a href={url}><img alt="Profile Picture" style={styles.picture} src={profilePic}/></a>
          </div>
        )
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
                    <a href="/" activeclassname="active">Home</a>
                  </li>
                  <li>
                    <a href="/JobList" activeclassname="active">Job List</a>
                  </li>
                  <li>
                    <a href="/Prices" activeclassname="active">Price</a>
                  </li>
                  <li>
                    <a href="/JobList" activeclassname="active">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right">
              {navbar}

              <a href="/SignIn" className="btn">Post Your Job</a>
            </div>
          </div>
        </nav>
      </header>
    </div>);
  }
}

export default NavBar;
