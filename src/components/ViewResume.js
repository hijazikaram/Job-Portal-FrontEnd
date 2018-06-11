import React, { Component } from 'react';
import {Switch, Route, Link} from "react-router-dom";
import axios from 'axios';

import UserPageNavBar from './properties/UserPageNavBar';
import resumeIcon from '../img/resume.jpg';
import userIcon from '../img/user.jpg';
import '../css/ViewResume.css';
class ViewResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      express_yourself_full_name : '',
      express_yourself_additional_information : '',
      express_yourself_photo_for_resume : '',
      career_objective : '',
      special_qualification : '',
      personal_details_full_name: '',
      personal_details_father_name: '',
      personal_details_mother_name: '',
      personal_details_dob: '',
      personal_details_birth_place: '',
      personal_details_nationality: '',
      personal_details_sex: '',
      personal_details_address: '',
      declaration : '',

      work_history : [],
      education_background : [],
      language_proficiency : [],

      photoAvailable : false,
      resumeAvailable : false,
    };

    this.id = localStorage.getItem('user_id');

    var self = this;
    axios.get("http://localhost:5000/api/resume/" + this.id).then(function (response) {
      if(response.data.resume) {
        var resume = response.data.resume;
        for(var key in self.state) {
          self.setState({ [key] : resume[key]});
        }

        if(self.state.express_yourself_photo_for_resume) {
          self.setState({ photoAvailable : true });
        }
        self.setState({ resumeAvailable: true });
      } else {
        self.setState({ resumeAvailable: false });
      }
    }, function (error) {
      self.setState({ resumeAvailable: false });
    });
  }

  componentWillMount() {
    if(!this.id) {
      window.location.href = '/SignIn';
    }
  }

  render() {
    var main_content = this.state.resumeAvailable ? (
          <div className="container">
            <div className="resume-content">
              <div className="profile section clearfix">
                <div className="profile-logo">
                  <img className="img-responsive user-photo" src={userIcon} alt="Image" />
                </div>
                <div className="profile-info">
                  <h1>{this.state.express_yourself_full_name}</h1>
                  <address>
                    <p dangerouslySetInnerHTML={{__html: this.state.express_yourself_additional_information}}></p>
                  </address>
                </div>
              </div>

              <div className="photo-of-resume section">
                <div className="icons">
                  <i className="fa fa-image" aria-hidden="true"></i>
                </div>
                <div className="career-info">
                  <h3>Photo of Resume</h3>
                  <p>
                    <a href={this.state.photoAvailable ? this.state.express_yourself_photo_for_resume : resumeIcon} download="resume_photo.jpg">
                      <button className="btn download-resume-photo">Download Resume(The picture he saved)</button>
                    </a>
                  </p>
                </div>
              </div>

              <div className="career-objective section">
                <div className="icons">
                  <i className="fa fa-black-tie" aria-hidden="true"></i>
                </div>
                <div className="career-info">
                  <h3>Career Objective</h3>
                  <p dangerouslySetInnerHTML={{__html: this.state.career_objective}}></p>
                </div>
              </div>

              <div className="work-history section">
                <div className="icons">
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                </div>
                <div className="work-info">
                  <h3>Work History</h3>
                  <ul>
                    {this.state.work_history.length > 0 ? (this.state.work_history.map(function(history,key){
                        return (
                          <li key={key}>
                            <h4>{history.designation} @ {history.company_name} <span>{history.time_start} - {history.time_end}</span></h4>
                            <p>{history.job_description}</p>
                          </li>
                        )
                      })) : (<li></li>)}
                  </ul>
                </div>
              </div>

              <div className="educational-background section">
                <div className="icons">
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <div className="educational-info">
                  <h3>Education Background</h3>
                  <ul>
                    {this.state.education_background.length > 0 ? (this.state.education_background.map(function(education,key){
                        return (
                          <li key={key}>
                            <h4>{education.degree} @ {education.institute_name}</h4>
                            <ul>
                              <li>Year: <span>{education.time_start} - {education.time_end}</span> </li>
                              <li>Concentration/Major: <span>Major in Accounting</span></li>
                              <li>Course Duration: <span>2 Years</span></li>
                              <li>Result: <span>4.00</span></li>
                            </ul>
                            <p>{education.description}</p>
                          </li>
                        )
                      })) : (<li></li>)}
                  </ul>
                </div>
              </div>

              <div className="special-qualification: section">
                <div className="icons">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </div>
                <div className="qualification">
                  <h3>Special Qualification:</h3>
                  <p dangerouslySetInnerHTML={{__html: this.state.special_qualification}}></p>
                </div>
              </div>

              <div className="language-proficiency section">
                <div className="icons">
                  <i className="fa fa-language" aria-hidden="true"></i>
                </div>
                <div className="proficiency">
                  <h3>Language Proficiency</h3>
                  <ul className="list-inline">
                    {this.state.language_proficiency.length > 0 ? (this.state.language_proficiency.map(function(language,key){
                        return (
                          <li key={key}>
                            <span>{language.name}</span>
                            <ul>
                              <li><i className={`fa ${language.rating >= 1 ? 'fa-star': 'fa-star-o'}  `} aria-hidden="true"></i></li>
                              <li><i className={`fa ${language.rating >= 2 ? 'fa-star': 'fa-star-o'}  `} aria-hidden="true"></i></li>
                              <li><i className={`fa ${language.rating >= 3 ? 'fa-star': 'fa-star-o'}  `} aria-hidden="true"></i></li>
                              <li><i className={`fa ${language.rating >= 4 ? 'fa-star': 'fa-star-o'}  `} aria-hidden="true"></i></li>
                              <li><i className={`fa ${language.rating >= 5 ? 'fa-star': 'fa-star-o'}  `} aria-hidden="true"></i></li>
                            </ul>
                          </li>
                        )
                      })) : (<li></li>)}
                  </ul>
                </div>
              </div>

              <div className="personal-deatils section">
                <div className="icons">
                  <i className="fa fa-user-secret" aria-hidden="true"></i>
                </div>
                <div className="personal-info">
                  <h3>Personal Deatils</h3>
                  <ul className="address">
                    <li><h5>Full Name </h5> <span>:</span>{this.state.personal_details_full_name}</li>
                    <li><h5>Father's Name </h5> <span>:</span>{this.state.personal_details_father_name}</li>
                    <li><h5>Mother's Name </h5> <span>:</span>{this.state.personal_details_mother_name}</li>
                    <li><h5>Date of Birth </h5> <span>:</span>{this.state.personal_details_dob}</li>
                    <li><h5>Birth Place </h5> <span>:</span>{this.state.personal_details_birth_place}</li>
                    <li><h5>Nationality </h5> <span>:</span>{this.state.personal_details_nationality}</li>
                    <li><h5>Sex </h5> <span>:</span>{this.state.personal_details_sex}</li>
                    <li><h5>Address </h5> <span>:</span>{this.state.personal_details_address}</li>
                  </ul>
                </div>
              </div>

              <div className="declaration section">
                <div className="icons">
                  <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
                </div>
                <div className="declaration-info">
                  <h3>Declaration</h3>
                  <p dangerouslySetInnerHTML={{__html: this.state.declaration}}></p>
                </div>
              </div>
              <div className="buttons">
                <a href="#" className="btn">Send Email</a>
              </div>
            </div>
          </div>) : (

          <div className='no-resume'><Link to={"/UserProfile/EditResume"}>Please enter your information</Link></div>
        );
    return (
      <div>
        <Route exact path={this.props.match.path} component={UserPageNavBar}/>

        { main_content }
      </div>
    );
  }
}

export default ViewResume;
