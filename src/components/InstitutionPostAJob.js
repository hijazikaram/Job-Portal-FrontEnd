import React, { Component } from 'react';
class InstitutionPostAJob extends Component {
  render() {
    return (
      <div>
        <div className="job-postdetails">
          <div className="row">
            <div className="col-md-8">
              <form action="#">
                <fieldset>
                  <div className="section postdetails">
                    <h4>Post Your Job</h4>
                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">Job Category</label>
                      <div className="col-sm-9">
                        <div className="dropdown">
                          <div className="form-group">
                            <select className="form-control">
                              <option>Select a category</option>
                              <option>Software Engineer</option>
                              <option>Program Development</option>
                              <option>Project Manager</option>
                              <option>Graphics Designer</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3">Job Type<span className="required">*</span></label>
                      <div className="col-sm-9 user-type">
                        <input type="radio" name="sellType" value="full-time" id="full-time"/> <label for="full-time">Full Time</label>
                        <input type="radio" name="sellType" value="part-time" id="part-time"/> <label for="part-time">Part Time</label>
                        <input type="radio" name="sellType" value="freelance" id="freelance"/> <label for="freelance">Freelance</label>
                        <input type="radio" name="sellType" value="contract" id="contract"/> <label for="contract">Contract</label>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Title for your jonb<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="ex, Human Resource Manager"/>
                      </div>
                    </div>
                    <div className="row form-group item-description">
                      <label className="col-sm-3 label-title">Description<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <textarea className="form-control" id="textarea" placeholder="Write few lines about your jobs" rows="8"></textarea>
                      </div>
                    </div>
                    <div className="row characters">
                      <div className="col-sm-9 col-sm-offset-3">
                        <p>5000 characters left</p>
                      </div>
                    </div>
                    <div className="row form-group add-title location">
                      <label className="col-sm-3 label-title">Location<span className="required">*</span></label>

                      <div className="col-sm-9">
                        <div className="row">
                          <div className="dropdown pull-left col-sm-6 col-xs-12">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Country</option>
                                <option>Software Engineer</option>
                                <option>Program Development</option>
                                <option>Project Manager</option>
                                <option>Graphics Designer</option>
                              </select>
                            </div>
                          </div>
                          <div className="dropdown pull-right col-sm-6 col-xs-12">
                            <div className="form-group">
                              <select className="form-control">
                                <option>State</option>
                                <option>Software Engineer</option>
                                <option>Program Development</option>
                                <option>Project Manager</option>
                                <option>Graphics Designer</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group select-price">
                      <label className="col-sm-3 label-title">Salary<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <label>$USD</label>
                        <input type="text" className="form-control" placeholder="Min"/>
                        <span>-</span>
                        <input type="text" className="form-control" placeholder="Max"/>
                        <input type="radio" name="price" value="negotiable" id="negotiable"/>
                        <label for="negotiable">Negotiable </label>
                      </div>
                    </div>
                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">Salary Type<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <div className="dropdown">
                          <div className="form-group">
                            <select className="form-control">
                              <option>State</option>
                              <option>Software Engineer</option>
                              <option>Program Development</option>
                              <option>Project Manager</option>
                              <option>Graphics Designer</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">Exprience<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <div className="dropdown">
                          <div className="form-group">
                            <select className="form-control">
                              <option>Entry Level</option>
                              <option>Mid Level</option>
                              <option>Mid-Senior Level</option>
                              <option>Top Level</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group brand-name">
                      <label className="col-sm-3 label-title">Job Function<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="human, reosurce, job, hrm"/>
                      </div>
                    </div>
                  </div>

                  <div className="section company-information">
                    <h4>Company Information</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Industry<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="Marketing and Advertising"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Company Name<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" placeholder="ex, Jhon Doe"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Email ID</label>
                      <div className="col-sm-9">
                        <input type="email" name="email" className="form-control" placeholder="ex, jhondoe@mail.com"/>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Mobile Number<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" name="mobileNumber" className="form-control" placeholder="ex, +912457895"/>
                      </div>
                    </div>
                    <div className="row form-group address">
                      <label className="col-sm-3 label-title">Address<span className="required">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" name="address" className="form-control" placeholder="ex, alekdera House, coprotec, usa"/>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <h4>Make Your Post Premium</h4>
                    <p>More replies means more interested buyers. With lots of interested buyers, you have a better chance of selling for the price that you want.<a href="#">Learn more</a></p>
                    <ul className="premium-options">
                      <li className="premium">
                        <input type="radio" name="premiumOption" value="day-one" id="day-one"/>
                        <label for="day-one">Regular Post</label>
                        <span>$20.00</span>
                      </li>
                      <li className="premium">
                        <input type="radio" name="premiumOption" value="day-two" id="day-two"/>
                        <label for="day-two">Regular Post</label>
                        <span>$30.00</span>
                      </li>
                      <li className="premium">
                        <input type="radio" name="premiumOption" value="day-three" id="day-three"/>
                        <label for="day-three">Top Post for 7 days</label>
                        <span>$50.00</span>
                      </li>
                      <li className="premium">
                        <input type="radio" name="premiumOption" value="day-four" id="day-four"/>
                        <label for="day-four">Daily Bump Up for 7 days</label>
                        <span>$100.00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="checkbox section agreement">
                    <label for="send">
                      <input type="checkbox" name="send" id="send"/>
                      You agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> and acknowledge that you are the rightful owner of this item and using Jobs to find a genuine buyer.
                    </label>
                    <button type="submit" className="btn btn-primary">Post Your Job</button>
                  </div>

                </fieldset>
              </form>
            </div>

            <div className="col-md-4">
              <div className="section quick-rules">
                <h4>Quick rules</h4>
                <p className="lead">Posting an ad on <a href="#">jobs.com</a> is free! However, all ads must follow our rules:</p>

                <ul>
                  <li>Make sure you post in the correct category.</li>
                  <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
                  <li>Do not upload pictures with watermarks.</li>
                  <li>Do not post ads containing multiple items unless it's a package deal.</li>
                  <li>Do not put your email or phone numbers in the title or description.</li>
                  <li>Make sure you post in the correct category.</li>
                  <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
                  <li>Do not upload pictures with watermarks.</li>
                  <li>Do not post ads containing multiple items unless it's a package deal.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstitutionPostAJob;
