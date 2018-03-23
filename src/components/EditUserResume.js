import React, { Component } from 'react';

class EditUserResume extends Component {
  render() {
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
                        <input type="text" name="name" className="form-control" placeholder="ex Jhon Doe"/>
                      </div>
                    </div>
                    <div className="row form-group additional-information">
                      <label className="col-sm-4 label-title">Additional Information</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" placeholder="Address: 123 West 12th Street, Suite 456 New York, NY 123456\n Phone: +012 345 678 910 \n Email: itsme@surzilegeek.com*"></textarea>
                      </div>
                    </div>
                    <div className="row form-group photos-resume">
                      <label className="col-sm-4 label-title">Photos for your Resume</label>
                      <div className="col-sm-8 ">
                        <label className="upload-image left" htmlFor="upload-image-one">
                          <input type="file" id="upload-image-one"/>
                          Type: JPG, PNG  Size: 3.5 x 4.5 cm
                        </label>
                        <label className="upload-image" htmlFor="upload-image-two">
                          <input type="file" id="upload-image-two"/>
                          Upload Photo
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="section career-objective">
                    <h4>Career Objective</h4>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Write few lines about your career objective" rows="8"></textarea>
                    </div>
                    <span>5000 characters left</span>
                  </div>

                  <div className="section">
                    <h4>Work History</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Compnay Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Name"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Designation</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Human Resource Manager"/>
                      </div>
                    </div>
                    <div className="row form-group time-period">
                      <label className="col-sm-3 label-title">Time Period</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="dd/mm/yy"/><span>-</span>
                        <input type="text" name="name" className="form-control pull-right" placeholder="dd/mm/yy"/>
                      </div>
                    </div>
                    <div className="row form-group job-description">
                      <label className="col-sm-3 label-title">Job Description</label>
                      <div className="col-sm-9">
                        <textarea className="form-control" placeholder="" rows="8"></textarea>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="#" className="btn">Add New Exprience</a>
                      <a href="#" className="btn delete">Delete</a>
                    </div>
                  </div>

                  <div className="section education-background">
                    <h4>Education Background</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Institute Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="ropbox"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Degree</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Human Resource Manager"/>
                      </div>
                    </div>
                    <div className="row form-group time-period">
                      <label className="col-sm-3 label-title">Time Period</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="dd/mm/yy"/><span>-</span>
                        <input type="text" name="name" className="form-control pull-right" placeholder="dd/mm/yy"/>
                      </div>
                    </div>
                    <div className="row form-group job-description">
                      <label className="col-sm-3 label-title">Description</label>
                      <div className="col-sm-9">
                        <textarea className="form-control" placeholder="" rows="8"></textarea>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="#" className="btn">Add New Education</a>
                      <a href="#" className="btn delete">Delete</a>
                    </div>
                  </div>

                  <div className="section special-qualification">
                    <h4>Special Qualification</h4>
                    <div className="form-group item-description">
                      <textarea className="form-control" placeholder="Write few lines about your special qualification" rows="8"></textarea>
                    </div>
                  </div>

                  <div className="section language-proficiency">
                    <h4>Language Proficiency:</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Language Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="English"/>
                      </div>
                    </div>
                    <div className="row form-group rating">
                      <label className="col-sm-3 label-title">Rating</label>
                      <div className="col-sm-9">
                        <div className="rating-star">
                            <div className="rating">
                                <input type="radio" id="star1" name="rating"/><label className="full" htmlFor="star1"></label>

                                <input type="radio" id="star2" name="rating"/><label className="half" htmlFor="star2"></label>

                                <input type="radio" id="star3" name="rating"/><label className="full" htmlFor="star3"></label>

                                <input type="radio" id="star4" name="rating"/><label className="half" htmlFor="star4"></label>

                                <input type="radio" id="star5" name="rating"/><label className="full" htmlFor="star5"></label>

                                <input type="radio" id="star6" name="rating"/><label className="half" htmlFor="star6"></label>

                                <input type="radio" id="star7" name="rating"/><label className="full" htmlFor="star7"></label>

                                <input type="radio" id="star8" name="rating"/><label className="half" htmlFor="star8"></label>

                                <input type="radio" id="star9" name="rating"/><label className="full" htmlFor="star9"></label>

                                <input type="radio" id="star10" name="rating"/><label className="half" htmlFor="star10"></label>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="#" className="btn">Add New Language</a>
                      <a href="#" className="btn delete">Delete</a>
                    </div>
                  </div>

                  <div className="section company-information">
                    <h4>Personal Deatils</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Full Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Jhon Doe"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Father's Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Robert Doe"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Mother's Name</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Ismatic Roderos Doe"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Date of Birth</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="26/01/1982"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Birth Place</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="United State of America"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Nationality</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Canadian"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Sex</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Male"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Address</label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="121 King Street, Melbourne Victoria, 1200 USA"/>
                      </div>
                    </div>
                    <div className="buttons pull-right">
                      <a href="#" className="btn">Add New Feild</a>
                    </div>
                  </div>

                  <div className="section special-qualification">
                    <h4>Declaration</h4>
                    <div className="form-group item-description">
                      <textarea className="form-control" placeholder="" rows="8"></textarea>
                    </div>
                  </div>
                </fieldset>
                </form>
              <div className="buttons">
                <a href="#" className="btn">Update Profile</a>
                <a href="#" className="btn cancle">Cancle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserResume;
