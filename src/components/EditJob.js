import React, {Component} from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import Select from 'react-select';
import Agreement from './properties/SectionAgreement';
import Rules from './properties/QuickRules';
import Info from './properties/CompanyInfo';
import config from '../config/index';
import '../css/PostAJob.css';

class EditJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job_id: '',
      institution_id: '',
      job_category: '',
      job_type: '',
      job_title: '',
      job_description: '',
      location_country: '',
      location_state: '',
      salary_min: '',
      salary_max: '',
      salary_negotiable: '',
      application_deadline: '',
      experience: '',
      job_function: '',
      company_industry: '',
      company_name: '',
      company_email: '',
      company_mobile: '',
      company_address: '',
      post_premium: '',
      characters_left: 5000,
      jobTypeExist: true,
      jobTitleExist: true,
      jobDescriptionExist: true,
      salaryMinExist: true,
      salaryMaxExist: true,
      salaryNegotiableExist: true,
      locationCountryExist: true,
      locationStateExist: true,
      applicationDeadlineExist: true,
      jobFunctionExist: true,
      companyIndustryExist: true,
      companyNameExist: true,
      companyEmailExist: true,
      companyMobileExist: true,
      companyAddressExist: true,
      errorMsg: ['sample'],
      postValid: true,
      postedSuccessfully: false,
      postResultMsg: ''
    }

    const job_id = this.props.match.params.job_id;

    axios.get('http://localhost:5000/api/jobsWithId/' + job_id).then((response) => {
      if (response.data.success) {
        const job = response.data.job;

        this.setState({
          institution_id: job.institution_id,

          job_category: job.job_category,
          job_type: job.job_type,
          job_title: job.job_title,
          job_description: job.job_description,
          location_country: job.location_country,
          location_state: job.location_state,
          salary_min: job.salary_min,
          salary_max: job.salary_max,
          salary_negotiable: job.salary_negotiable,
          application_deadline: job.application_deadline,
          experience: job.experience,
          job_function: job.job_function,

          company_industry: job.company_industry,
          company_name: job.company_name,
          company_email: job.company_email,
          company_mobile: job.company_mobile,
          company_address: job.company_address,

          post_premium: job.post_premium
        });

        this.setState({
          characters_left: (5000 - job.job_description.length)
        });
        this.setState({job_id: job._id});
      }
    }, (error) => {
      console.log(error)
    })
  }

  componentWillMount() {
    const id = localStorage.getItem('user_id');
    const user_type = localStorage.getItem('user_type');

    if (!id || !user_type) {
      window.location.href = '/SignIn';
    }
  }

  onChangeJobCategory = (newValue) => {
    const value = newValue === null ? '' : newValue.value
    this.setState({ job_category: value });
  }

  onChangeJobType = (e) => {
    if (e.target.value != '') {
      this.setState({jobTypeExist: true});
    } else {
      this.setState({jobTypeExist: false});
    }
    this.setState({job_type: e.target.value});
  }

  onChangeJobTitle = (e) => {
    if (e.target.value != '') {
      this.setState({jobTitleExist: true});
    } else {
      this.setState({jobTitleExist: false});
    }
    this.setState({job_title: e.target.value});
  }

  onChangeJobDescription = (e) => {
    if (e.target.value != '') {
      this.setState({jobDescriptionExist: true});
    } else {
      this.setState({jobDescriptionExist: false});
    }
    this.setState({job_description: e.target.value});
    this.setState({
      characters_left: (5000 - e.target.value.length)
    });
  }

  onChangeLocationCountry = (newValue) => {
    const value = newValue === null ? '' : newValue.value;
    if (value === '') {
      this.setState({ locationCountryExist: false });
    } else {
      this.setState({ locationCountryExist: true });
    }
    this.setState({ location_country: value });
  }

  onChangeLocationState = (newValue) => {
    const value = newValue === null ? '' : newValue.value;
    if (value === '') {
      this.setState({ locationStateExist: false });
    } else {
      this.setState({ locationStateExist: true });
    }
    this.setState({ location_state: value });
  }

  onChangeSalaryMin = (e) => {
    if (e.target.value != '') {
      this.setState({salaryMinExist: true});
    } else {
      this.setState({salaryMinExist: false});
    }
    this.setState({salary_min: e.target.value});
  }

  onChangeSalaryMax = (e) => {
    if (e.target.value != '') {
      this.setState({salaryMaxExist: true});
    } else {
      this.setState({salaryMaxExist: false});
    }
    this.setState({salary_max: e.target.value});
  }

  onChangeSalaryNegotiable = (e) => {
    this.setState({salary_negotiable: e.target.value});
    if (e.target.value != '') {
      this.setState({salaryNegotiableExist: true});
    } else {
      this.setState({salaryNegotiableExist: false});
    }
  }

  onChangeApplicationDeadline = (e) => {
    if (e.target.value != '') {
      this.setState({applicationDeadlineExist: true});
    } else {
      this.setState({applicationDeadlineExist: false});
    }
    this.setState({application_deadline: e.target.value});
  }

  onChangeExperience = (newValue) => {
    const value = newValue === null ? '' : newValue.value
    this.setState({ experience: value });
  }

  onChangeJobFunction = (e) => {
    if (e.target.value != '') {
      this.setState({jobFunctionExist: true});
    } else {
      this.setState({jobFunctionExist: false});
    }
    this.setState({job_function: e.target.value});
  }

  onChangeCompanyIndustry = (e) => {
    if (e.target.value != '') {
      this.setState({companyIndustryExist: true});
    } else {
      this.setState({companyIndustryExist: false});
    }
    this.setState({company_industry: e.target.value});
  }

  onChangeCompanyName = (e) => {
    if (e.target.value != '') {
      this.setState({companyNameExist: true});
    } else {
      this.setState({companyNameExist: false});
    }
    this.setState({company_name: e.target.value});
  }

  onChangeCompanyEmail = (e) => {
    if (e.target.value != '') {
      this.setState({companyEmailExist: true});
    } else {
      this.setState({companyEmailExist: false});
    }
    this.setState({company_email: e.target.value});
  }

  onChangeCompanyMobile = (e) => {
    if (e.target.value != '') {
      this.setState({companyMobileExist: true});
    } else {
      this.setState({companyMobileExist: false});
    }
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (e.target.value == '' || re.test(e.target.value)) {
      this.setState({company_mobile: e.target.value});
    }
  }

  onChangeCompanyAddress = (e) => {
    if (e.target.value != '') {
      this.setState({companyAddressExist: true});
    } else {
      this.setState({companyAddressExist: false});
    }
    this.setState({company_address: e.target.value});
  }

  onChangePostPremium = (e) => {
    this.setState({post_premium: e.target.value});
  }

  updateJob = (e) => {
    e.preventDefault();

    let error_msg = this.state.errorMsg;
    error_msg = [];

    if (!this.state.jobTypeExist) {
      error_msg.push("Job Type");
    }
    if (!this.state.jobTitleExist) {
      error_msg.push("Job Title");
    }
    if (!this.state.jobDescriptionExist) {
      error_msg.push("Job Description");
    }
    if (!this.state.locationCountryExist) {
      error_msg.push("Location Country");
    }
    if (!this.state.locationStateExist) {
      error_msg.push("Location State");
    }
    if (!this.state.salaryMinExist) {
      if (!this.state.salaryNegotiableExist) {
        error_msg.push("Salary Min");
      }
    }
    if (!this.state.salaryMaxExist) {
      if (!this.state.salaryNegotiableExist) {
        error_msg.push("Salary Max");
      }
    }
    if (!this.state.applicationDeadlineExist) {
      error_msg.push("Application Deadline");
    }
    if (!this.state.jobFunctionExist) {
      error_msg.push("Job Function");
    }
    if (!this.state.companyIndustryExist) {
      error_msg.push("Company Industry");
    }
    if (!this.state.companyNameExist) {
      error_msg.push("Company Name");
    }
    if (!this.state.companyEmailExist) {
      error_msg.push("Company Email");
    }
    if (!this.state.companyMobileExist) {
      error_msg.push("Company Mobile");
    }
    if (!this.state.companyAddressExist) {
      error_msg.push("Company Address");
    }

    const self = this;
    self.setState({
      errorMsg: error_msg
    }, () => {
      if (self.state.errorMsg.length > 0) {
        self.setState({postValid: false});
        return false;
      } else {
        self.setState({postValid: true});
        axios.put("http://localhost:5000/api/job/" + self.state.job_id, self.state).then(function(response) {
          if (response.data.success) {
            self.setState({postedSuccessfully: true, postResultMsg: 'Updated Successfully'});
            setTimeout(function() {
              window.location.href = '/InstitutionProfile/PostedJobs';
            }, 500);
          } else {
            self.setState({postedSuccessfully: false, postResultMsg: 'Error Occured.'});
          }
        }, function(error) {
          console.log(error);
          self.setState({postedSuccessfully: false, postResultMsg: 'Error Occured.'});
        });
      }
    });
  }
  render() {
    const notification = !this.state.postValid
      ? (<div className='panel panel-default'>
        <ul className="notification error">
          {
            this.state.errorMsg.map(function(msg, index) {
              return <li key={index}>{msg}
                is required</li>
            })
          }
        </ul>
      </div>)
      : (<div></div>);

    const postNotification = this.state.postResultMsg
      ? (<div className='panel panel-default'>
        <div className={`notification ${ !this.state.postedSuccessfully
            ? 'error'
            : 'success'}`}>{this.state.postResultMsg}
        </div>
      </div>)
      : (<div></div>);
    return (<div>
      <div className="container">
        <div className="job-postdetails">
          <div className="row">
            <div className="col-md-8">
              <form action="#">
                <fieldset>
                  <div className="section postdetails">
                    <h4>Edit Your Job</h4>
                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">Job Category</label>
                      <div className="col-sm-9">
                        <div className="dropdown">
                          <div className="form-group">
                            <Select value={this.state.job_category} options={config.job_category} onChange={this.onChangeJobCategory} value={this.state.job_category} isClearable />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3">Job Type<span className="required">*</span>
                      </label>
                      <div className="col-sm-9 user-type">
                        <input type="radio" name="sellType" value="Full Time" id="full-time" onChange={this.onChangeJobType} checked={this.state.job_type == "Full Time"}/>
                        <label htmlFor="full-time">Full Time</label>
                        <input type="radio" name="sellType" value="Part Time" id="part-time" onChange={this.onChangeJobType} checked={this.state.job_type == "Part Time"}/>
                        <label htmlFor="part-time">Part Time</label>
                        <input type="radio" name="sellType" value="Freelance" id="freelance" onChange={this.onChangeJobType} checked={this.state.job_type == "Freelance"}/>
                        <label htmlFor="freelance">Freelance</label>
                        <input type="radio" name="sellType" value="Contract" id="contract" onChange={this.onChangeJobType} checked={this.state.job_type == "Contract"}/>
                        <label htmlFor="contract">Contract</label>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Title for your job<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="ex, Human Resource Manager" onChange={this.onChangeJobTitle} value={this.state.job_title}/>
                      </div>
                    </div>
                    <div className="row form-group item-description">
                      <label className="col-sm-3 label-title">Description<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <textarea className="form-control" id="textarea" placeholder="Write few lines about your jobs" rows="8" onChange={this.onChangeJobDescription} value={this.state.job_description}></textarea>
                      </div>
                    </div>
                    <div className="row characters">
                      <div className="col-sm-9 col-sm-offset-3">
                        <p>{this.state.characters_left} characters left</p>
                      </div>
                    </div>
                    <div className="row form-group add-title location">
                      <label className="col-sm-3 label-title">Location<span className="required">*</span>
                      </label>

                      <div className="col-sm-9">
                        <div className="row">
                          <div className="dropdown pull-left col-sm-6 col-xs-12">
                            <div className="form-group">
                              <Select options={config.job_location_country} onChange={this.onChangeLocationCountry} isClearable />
                            </div>
                          </div>
                          <div className="dropdown pull-right col-sm-6 col-xs-12">
                            <div className="form-group">
                              <Select options={config.job_location_state} onChange={this.onChangeLocationState} isClearable />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group select-price">
                      <label className="col-sm-3 label-title">Salary<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <label>$USD</label>
                        <input type="text" className="form-control" placeholder="Min" value={this.state.salary_min} onChange={this.onChangeSalaryMin}/>
                        <span>-</span>
                        <input type="text" className="form-control" placeholder="Max" onChange={this.onChangeSalaryMax} value={this.state.salary_max}/>
                        <input type="radio" name="price" value="negotiable" id="negotiable" onChange={this.onChangeSalaryNegotiable} checked={this.state.salary_negotiable == 'negotiable'}/>
                        <label htmlFor="negotiable">Negotiable
                        </label>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">Application Deadline<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="ex, 08-12-2018" onChange={this.onChangeApplicationDeadline} value={this.state.application_deadline}/>
                      </div>
                    </div>
                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">Exprience<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <div className="dropdown">
                          <div className="form-group">
                            <Select options={config.experience} onChange={this.onChangeExperience} isClearable />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group brand-name">
                      <label className="col-sm-3 label-title">Job Function<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="human, reosurce, job, hrm" onChange={this.onChangeJobFunction} value={this.state.job_function}/>
                      </div>
                    </div>
                  </div>

                  <Info onChangeCompanyIndustry={this.onChangeCompanyIndustry} companyIndustry={this.state.company_industry} onChangeCompanyName={this.onChangeCompanyName} companyName={this.state.company_name} onChangeCompanyEmail={this.onChangeCompanyEmail}
                  companyEmail={this.state.company_email}
                  onChangeCompanyMobile={this.onChangeCompanyMobile}
                  companyMobile={this.state.company_mobile}
                  onChangeCompanyAddress={this.onChangeCompanyAddress}
                  companyAddress={this.state.company_address}/>


                  {notification}

                  {postNotification}

                  <div className="checkbox section agreement">
                    <button type="submit" className="btn btn-primary" onClick={this.updateJob}>Update Your Job</button>
                  </div>

                </fieldset>
              </form>
            </div>

            <Rules/>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default EditJob;
