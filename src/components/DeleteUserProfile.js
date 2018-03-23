import React, { Component } from 'react';
import '../css/App.css';
import userIcon from '../img/user.jpg';

class DeleteUserProfile extends Component {
  render() {
    return (
      <div>
        <div className="close-account text-center">
          <div className="delete-account section">
            <h2>Delete Your Account</h2>
            <h4>Are you sure, you want to delete your account?</h4>
            <a href="#" className="btn">Delete Account</a>
            <a href="#" className="btn cancle">Cancel</a>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteUserProfile;
