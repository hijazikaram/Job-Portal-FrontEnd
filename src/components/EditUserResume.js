import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

import '../css/EditUserResume.css';

class EditUserResume extends Component {
  constructor(props) {
    super(props);

    this.user_id = "";
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

      characters_left : 5000,
      updating : false,

      notificationMsg: '',
      updateProfileValid : false
    };

    this.education = {
      institute_name: '',
      degree: '',
      time_start: '',
      time_end: '',
      description: ''
    };

    this.history = {
      company_name: '',
      designation: '',
      time_start: '',
      time_end: '',
      job_description: ''
    };

    this.language = {
      name: '',
      rating: ''
    };

    this.user_id = localStorage.getItem('user_id');

    var self = this;
    axios.get("http://localhost:5000/api/resume/" + this.user_id).then(function (response) {
      var resume = response.data.resume;

      for(var key in self.state) {
        self.setState({ [key] : resume[key] });
      }
    }, function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    if(!this.user_id) {
      window.location.href = '/SignIn';
    }
  }
  onExpressYourSelfFullNameChange(e) {
    this.setState({ express_yourself_full_name : e.target.value });
  }

  onExpressYourSelfAdditionalInformationChange(e) {
    this.setState({ express_yourself_additional_information : e.target.value });
  }

  onCareerObjectiveChange(e) {
    this.setState({ career_objective : e.target.value });

    var characters_left = this.state.characters_left;
    characters_left = 5000 - e.target.value.length;
    this.setState({ characters_left : characters_left });
  }

  onAddEducation(e) {

    if(this.education.institute_name || this.education.degree || this.education.time_start || this.education.time_end || this.education.description) {
      var educations = this.state.education_background;
      educations.push(this.education);
      this.setState({ education_background : educations });
    }
  }

  add_institute_name(e) {
    this.education.institute_name = e.target.value;
  }

  add_degree(e) {
    this.education.degree = e.target.value;
  }

  add_time_start(e) {
    this.education.time_start = e.target.value;
  }

  add_time_end(e) {
    this.education.time_end = e.target.value;
  }

  add_description(e) {
    this.education.description = e.target.value;
  }

  onSpecialQualificationChange(e) {
    this.setState({ special_qualification : e.target.value });
  }

  onDeclarationChange(e) {
    this.setState({ declaration : e.target.value });
  }

  onPersonalFullNameChange(e) {
    this.setState({ personal_details_full_name : e.target.value });
  }
  onPersonalFatherNameChange(e) {
    this.setState({ personal_details_father_name : e.target.value });
  }
  onPersonalMotherNameChange(e) {
    this.setState({ personal_details_mother_name : e.target.value });
  }
  onPersonalDOBChange(e) {
    this.setState({ personal_details_dob : e.target.value });
  }
  onPersonalBirthPlaceChange(e) {
    this.setState({ personal_details_birth_place : e.target.value });
  }
  onPersonalNationalityChange(e) {
    this.setState({ personal_details_nationality : e.target.value });
  }
  onPersonalSexChange(e) {
    this.setState({ personal_details_sex : e.target.value });
  }
  onPersonalAddressChange(e) {
    this.setState({ personal_details_address : e.target.value });
  }
  onGetFile(file) {
    this.setState({ express_yourself_photo_for_resume : file.base64 });
  }
  onUpdateProfile(e){
    e.preventDefault();

    var self = this;

    self.state.user_id = self.user_id;

    self.setState({ updating : true });
    axios.post('http://localhost:5000/api/resume', self.state).then(function (response) {
      console.log(response);
      self.setState({ updating : false , notificationMsg : 'Updated Successfully', updateProfileValid : true });
    }, function (error) {
      console.log(error);
    });
  }

  onAddCompanyNameChange(e) {
    this.history.company_name = e.target.value;
  }
  onAddDesignation(e) {
    this.history.designation = e.target.value; 
  }
  onAddWorkHistoryTimeStartChange(e) {
    this.history.time_start = e.target.value;
  }
  onAddWorkHistoryTimeEndChange(e) {
    this.history.time_end = e.target.value;
  }
  onAddJobDescription(e) {
    this.history.job_description = e.target.value;
  }

  onAddNewHistory(e) {
    e.preventDefault();

    if(this.history.company_name || this.history.designation || this.history.time_start || this.history.time_end || this.history.job_description) {
      var history = this.state.work_history;
      history.push(this.history);

      this.setState({ work_history : history });
    }
  }

  onAddLanguageName(e) {
    this.language.name = e.target.value;
  }

  onAddRating(e) {
    var id = e.target.id;
    var rating = (11 - parseInt(id.split("star")[1])) * 0.5;

    this.language.rating = rating;
  }

  onAddNewLanguage(e) {
    if(this.language.name && this.language.rating) {
      var language = this.state.language_proficiency;
      language.push(this.language);
      this.language = {};

      this.setState({ language_proficiency: language });
    }
  }

  render() {
    /* Adding Express Yourself Information */
    var expressYourselfFullNameChange = this.onExpressYourSelfFullNameChange.bind(this);
    var expressYourselfAdditionInformationChange = this.onExpressYourSelfAdditionalInformationChange.bind(this);
    var getFile = this.onGetFile.bind(this);

    /* Adding Career Objective */
    var careerObjectiveChange = this.onCareerObjectiveChange.bind(this);

    /* Adding Experience */
    var addCompanyNameChange = this.onAddCompanyNameChange.bind(this);
    var addDesignation = this.onAddDesignation.bind(this);
    var addWorkHistoryTimeStartChange = this.onAddWorkHistoryTimeStartChange.bind(this);
    var addWorkHistoryTimeEndChange = this.onAddWorkHistoryTimeEndChange.bind(this);
    var addJobDescription = this.onAddJobDescription.bind(this);

    var addNewHistory = this.onAddNewHistory.bind(this);

    /* Adding Education */
    var addInstituteName = this.add_institute_name.bind(this);
    var addDegree = this.add_degree.bind(this);
    var addStartDate = this.add_time_start.bind(this);
    var addEndDate = this.add_time_end.bind(this);
    var addDescription = this.add_description.bind(this);

    var addEducation = this.onAddEducation.bind(this);

    /* Adding Special Qualification */
    var specialQualificationChange = this.onSpecialQualificationChange.bind(this);

    /* Adding Personal Details */
    var personalFullNameChange = this.onPersonalFullNameChange.bind(this);
    var personalFatherNameChange = this.onPersonalFatherNameChange.bind(this);
    var personalMotherNameChange = this.onPersonalMotherNameChange.bind(this);
    var personalDOBChange = this.onPersonalDOBChange.bind(this);
    var personalBirthPlaceChange = this.onPersonalBirthPlaceChange.bind(this);
    var personalNationalityChange = this.onPersonalNationalityChange.bind(this);
    var personalSexChange = this.onPersonalSexChange.bind(this);
    var personalAddressChange = this.onPersonalAddressChange.bind(this);

    /* Adding Language Proficiency */
    var addLanguageName = this.onAddLanguageName.bind(this);
    var addRating = this.onAddRating.bind(this);
    var addNewLanguage = this.onAddNewLanguage.bind(this);

    /* Adding Declaration */
    var declarationChange = this.onDeclarationChange.bind(this);

    /* Update Profile Button Action */
    var updateProfile = this.onUpdateProfile.bind(this);

    /* Updating Result Notification */
    var notification = this.state.notificationMsg ? (
      <div className='panel panel-default'>
        <div className={`notification ${!this.state.updateProfileValid ? 'error' : 'success'}`}>{ this.state.notificationMsg }
        </div>
      </div>) : (<div></div>);

    return (
      <div>
        <div className="adpost-details post-resume">
          <div className="row">
            <div className="col-md-12 clearfix">
              <form action="#">
                <fieldset>
                  <div className="section express-yourself">
                    <h4>Express Yourself</h4>
                    <div className="row form-group">
                      <label className="col-sm-4 label-title">Full Name</label>
                      <div className="col-sm-8">
                        <input type="text" name="name" className="form-control" placeholder="ex Jhon Doe" onChange={expressYourselfFullNameChange} value={this.state.express_yourself_full_name} />
                      </div>
                    </div>
                    <div className="row form-group additional-information">
                      <label className="col-sm-4 label-title">Additional Information</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" placeholder="Address: 123 West 12th Street, Suite 456 New York, NY 123456\n Phone: +012 345 678 910 \n Email: itsme@surzilegeek.com*" onChange={expressYourselfAdditionInformationChange} value={this.state.express_yourself_additional_information}></textarea>
                      </div>
                    </div>
                    <div className="row form-group photos-resume">
                      <label className="col-sm-4 label-title">Photos for your Resume</label>
                      <div className="col-sm-8">
                        <div>
                          <label className="upload-image left">
                            <FileBase64 onDone={ getFile }/>
                            Type: JPG, PNG  Size: 3.5 x 4.5 cm
                          </label>
                          <label className="upload-image">
                            <FileBase64 onDone={ getFile }/>
                            Upload Photo
                          </label>
                        </div>
                        { this.state.express_yourself_photo_for_resume ? (
                          <div className="col-sm-12">
                            <img src={this.state.express_yourself_photo_for_resume} />
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="section career-objective">
                    <h4>Career Objective</h4>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Write few lines about your career objective" rows="8" onChange={careerObjectiveChange} value={this.state.career_objective}></textarea>
                    </div>
                    <span>{this.state.characters_left} characters left</span>
                  </div>

                  <div className="section">
                    <h4>Work History</h4>

                    {this.state.work_history.length > 0 ? (this.state.work_history.map(function(history,key){
                      return (
                        <div key={key}>
                          <div className="row form-group">
                            <label className="col-sm-3 label-title">Company Name</label>
                            <label className="col-sm-3 label-title">{history.company_name}</label>
                          </div>
                          <div className="row form-group">
                            <label className="col-sm-3 label-title">Designation</label>
                            <label className="col-sm-3 label-title">{history.designation}</label>
                          </div>
                          <div className="row form-group time-period">
                            <label className="col-sm-3 label-title">Time Period</label>
                            <label className="col-sm-3 label-title">
                              {history.time_start} - {history.time_end}
                            </label>
                          </div>
                          <div className="row form-group job-description">
                            <label className="col-sm-3 label-title">Job Description</label>
                            <label className="col-sm-3 label-title">{history.job_description}</label>
                          </div>
                          <br/><br/>
                        </div>
                      )
                    })) : (<div></div>)}
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Company Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Name" onChange={addCompanyNameChange}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Designation</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Human Resource Manager" onChange={addDesignation}/>
                      </div>
                    </div>
                    <div className="row form-group time-period">
                      <label className="col-sm-3 label-title">Time Period</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="dd/mm/yy" onChange={addWorkHistoryTimeStartChange}/><span>-</span>
                        <input type="text" name="name" className="form-control pull-right" placeholder="dd/mm/yy" onChange={addWorkHistoryTimeEndChange}/>
                      </div>
                    </div>
                    <div className="row form-group job-description">
                      <label className="col-sm-3 label-title">Job Description</label>
                      <div className="col-sm-9">
                        <textarea className="form-control" placeholder="" rows="8" onChange={addJobDescription}></textarea>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="javascript:void(0)" className="btn" onClick={addNewHistory}>Add New Exprience</a>
                      <a href="#" className="btn delete">Delete</a>
                    </div>
                  </div>

                  <div className="section education-background">
                    <h4>Education Background</h4>
                    
                    {this.state.education_background.length > 0 ? (this.state.education_background.map(function(education,key){
                      return (
                        <div key={key}>
                          <div className="row form-group">
                            <label className="col-sm-3 label-title">Institute Name</label>
                            <label className="col-sm-3 label-title">{education.institute_name}</label>
                          </div>
                          <div className="row form-group">
                            <label className="col-sm-3 label-title">Degree</label>
                            <label className="col-sm-3 label-title">{education.degree}</label>
                          </div>
                          <div className="row form-group time-period">
                            <label className="col-sm-3 label-title">Time Period</label>
                            <label className="col-sm-3 label-title">
                              {education.time_start} - {education.time_end}
                            </label>
                          </div>
                          <div className="row form-group job-description">
                            <label className="col-sm-3 label-title">Description</label>
                            <label className="col-sm-3 label-title">{education.description}</label>
                          </div>
                          <br/><br/>
                        </div>
                      )
                    })):(<div></div>)}
                    
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Institute Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="ropbox" onChange={addInstituteName}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Degree</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Human Resource Manager" onChange={addDegree}/>
                      </div>
                    </div>
                    <div className="row form-group time-period">
                      <label className="col-sm-3 label-title">Time Period</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="dd/mm/yy" onChange={addStartDate}/><span>-</span>
                        <input type="text" name="name" className="form-control pull-right" placeholder="dd/mm/yy" onChange={addEndDate}/>
                      </div>
                    </div>
                    <div className="row form-group job-description">
                      <label className="col-sm-3 label-title">Description</label>
                      <div className="col-sm-9">
                        <textarea className="form-control" placeholder="" rows="8" onChange={addDescription}></textarea>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="javascript:void(0)" className="btn" onClick={addEducation}>Add New Education</a>
                      <a href="#" className="btn delete">Delete</a>
                    </div>
                  </div>

                  <div className="section special-qualification">
                    <h4>Special Qualification</h4>
                    <div className="form-group item-description">
                      <textarea className="form-control" placeholder="Write few lines about your special qualification" rows="8" onChange={specialQualificationChange} value={this.state.special_qualification}></textarea>
                    </div>
                  </div>

                  <div className="section language-proficiency">
                    <h4>Language Proficiency:</h4>

                    {this.state.language_proficiency.length > 0 ? (this.state.language_proficiency.map(function(language,key){
                      return (
                        <div key={key}>
                          <div className="row form-group">
                            <label className="col-sm-3 label-title">Language Name</label>
                            <label className="col-sm-3 label-title">{language.name}</label>
                          </div>
                          <div className="row form-group">
                            <label className="col-sm-3 label-title">Rating</label>
                            <label className="col-sm-3 label-title">{language.rating}</label>
                          </div>
                          <br/><br/>
                        </div>
                      )
                    })):(<div></div>)}

                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Language Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="English" onChange={addLanguageName}/>
                      </div>
                    </div>
                    <div className="row form-group rating">
                      <label className="col-sm-3 label-title">Rating</label>
                      <div className="col-sm-9">
                        <div className="rating-star">
                            <div className="rating">
                                <input type="radio" id="star1" name="rating" onChange={addRating}/><label className="full" htmlFor="star1"></label>

                                <input type="radio" id="star2" name="rating" onChange={addRating}/><label className="half" htmlFor="star2"></label>

                                <input type="radio" id="star3" name="rating" onChange={addRating}/><label className="full" htmlFor="star3"></label>

                                <input type="radio" id="star4" name="rating" onChange={addRating}/><label className="half" htmlFor="star4"></label>

                                <input type="radio" id="star5" name="rating" onChange={addRating}/><label className="full" htmlFor="star5"></label>

                                <input type="radio" id="star6" name="rating" onChange={addRating}/><label className="half" htmlFor="star6"></label>

                                <input type="radio" id="star7" name="rating" onChange={addRating}/><label className="full" htmlFor="star7"></label>

                                <input type="radio" id="star8" name="rating" onChange={addRating}/><label className="half" htmlFor="star8"></label>

                                <input type="radio" id="star9" name="rating" onChange={addRating}/><label className="full" htmlFor="star9"></label>

                                <input type="radio" id="star10" name="rating" onChange={addRating}/><label className="half" htmlFor="star10"></label>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="javascript:void(0)" className="btn" onClick={addNewLanguage}>Add New Language</a>
                      <a href="#" className="btn delete">Delete</a>
                    </div>
                  </div>

                  <div className="section company-information">
                    <h4>Personal Deatils</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Full Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Jhon Doe" onChange={personalFullNameChange} value={this.state.personal_details_full_name}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Father's Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Robert Doe" onChange={personalFatherNameChange} value={this.state.personal_details_father_name}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Mother's Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Ismatic Roderos Doe" onChange={personalMotherNameChange} value={this.state.personal_details_mother_name}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Date of Birth</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="26/01/1982" onChange={personalDOBChange} value={this.state.personal_details_dob}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Birth Place</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="United State of America" onChange={personalBirthPlaceChange} value={this.state.personal_details_birth_place}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Nationality</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Canadian" onChange={personalNationalityChange} value={this.state.personal_details_nationality}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Sex</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Male" onChange={personalSexChange} value={this.state.personal_details_sex}/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Address</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="121 King Street, Melbourne Victoria, 1200 USA" onChange={personalAddressChange} value={this.state.personal_details_address}/>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="#" className="btn">Add New Field</a>
                    </div>
                  </div>

                  <div className="section special-qualification">
                    <h4>Declaration</h4>
                    <div className="form-group item-description">
                      <textarea className="form-control" placeholder="" rows="8" onChange={declarationChange} value={this.state.declaration}></textarea>
                    </div>
                  </div>
                </fieldset>
                </form>

                { notification }

              <div className="buttons">
                <a href="javascript:void(0)" className="btn" onClick={updateProfile}>
                  {this.state.updating ? (
                    <div>
                      <i className="fa fa-spinner faa-spin animated action-icon"></i>
                      Updating Profile...
                    </div>
                  ) : (<div>Update Profile</div>)}
                </a>
                <a href="/UserProfile" className="btn cancle">Cancle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserResume;
