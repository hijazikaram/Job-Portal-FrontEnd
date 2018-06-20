import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import axios from 'axios';
import Dropdown from "react-dropdown";
import { Redirect } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../css/Stripe.css';
import '../../css/App.css';
import '../../css/MyDropdown.css'

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toJobList : false,
      jobLocationOptions : [
       'Location 1',
       'Location 2',
       'Location 3'],
      selectedJobLocation : "Job Location",
      keyword : "",
      selectedJobQuantity : 1,
      selectedJobQuantityText: "1 Job for 30 Days - $150 USD",
      jobQuantityOptions : [
        {value:1, label:'1 Job - $150 per Job', text:'1 Job for 30 Days - $150 USD', className:'job-quantity-mydropdown-item'},
        {value:2, label:'2 Jobs - $150 per Job', text:'2 Jobs for 30 Days - $300 USD', className:'job-quantity-mydropdown-item'},
        {value:3, label:'3 Jobs - $150 per Job', text:'3 Jobs for 30 Days - $450 USD', className:'job-quantity-mydropdown-item'},
        {value:4, label:'4 Jobs - $150 per Job', text:'4 Jobs for 30 Days - $600 USD', className:'job-quantity-mydropdown-item'},
        {value:5, label:'5 Jobs - $150 per Job', text:'5 Jobs for 30 Days - $750 USD', className:'job-quantity-mydropdown-item'},
        {value:6, label:'6 Jobs - $150 per Job', text:'6 Jobs for 30 Days - $900 USD', className:'job-quantity-mydropdown-item'},
        {value:7, label:'7 Jobs - $150 per Job', text:'7 Jobs for 30 Days - $1050 USD', className:'job-quantity-mydropdown-item'},
        {value:8, label:'8 Jobs - $150 per Job', text:'8 Jobs for 30 Days - $1200 USD', className:'job-quantity-mydropdown-item'},
        {value:9, label:'9 Jobs - $150 per Job', text:'9 Jobs for 30 Days - $1350 USD', className:'job-quantity-mydropdown-item'},
        {value:10, label:'10 Jobs - $150 per Job', text:'10 Jobs for 30 Days - $1500 USD', className:'job-quantity-mydropdown-item'}
      ],
      modal: false,
      notificationMsg: null,
      notificationSuccess: false
    };
  }

  componentWillMount() {
    let self = this;
    axios.get('http://localhost:5000/api/job_search_options').then((job_search_options) => {
      self.setState({ jobLocationOptions : job_search_options.data.jobLocationOptions });
    });
    this.setState({selectedJobQuantity:this.state.jobQuantityOptions[0]});
  }

  _onSelectJobLocation = (selectedJobLocation) => {
    this.setState({selectedJobLocation : selectedJobLocation.value === "none"?"Job Location":selectedJobLocation.value});
  }
  _onKeyword = (event) => {
    this.setState({keyword:event.target.value});
  }
  _onSearch = (event) => {
    this.setState({toJobList:true});
  }

  _onSelectJobQuantity = (selectedJobQuantity) => {
    let index = selectedJobQuantity.value - 1;
    let text = this.state.jobQuantityOptions[index].text;
    this.setState({selectedJobQuantity : selectedJobQuantity, selectedJobQuantityText: text, notificationMsg: null});
  }
  _onProcced = (event) => {
    this.setState({ notificationMsg: null });

    let id = localStorage.getItem('user_id');
    let user_type = localStorage.getItem('user_type');
    if (!id) {
      window.location.href = '/SignIn';
    } else if (!user_type) {
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_type');
      window.location.href = '/SignIn';
    } else {
      this._onModalToggle();
    }
  }
  _onModalToggle = () => {
    this.setState({modal: !this.state.modal});
  }
  _onStripeSuccess = (token) => {
    this._onModalToggle();

    let self = this;
    let id = localStorage.getItem('user_id');
    axios.put('http://localhost:5000/api/institutionPlusJobs/' + id, {token: token.id, count:self.state.selectedJobQuantity.value}).then(function (response) {
      if (response.data.message) {
        self.setState({ notificationMsg: response.data.message, notificationSuccess: false });
      } else {
        let msg = self.state.selectedJobQuantity.value.toString();
        msg += ' ';
        msg += self.state.selectedJobQuantity.value>1?'jobs':'job';
        msg += ' added successfully.';
        self.setState({ notificationMsg: msg, notificationSuccess: true });
      }
    }, function (error) {
      console.log(error);
    });
  }

  render() {
    if (this.state.toJobList) {
      return (
        <Redirect to={{
          pathname: '/JobList',
          state: { selectedJobLocation_param: this.state.selectedJobLocation, keyword_param: this.state.keyword}
        }} />
      );
    }

    const notification = this.state.notificationMsg ? (
      <div className='price-notification panel panel-default'>
        <div className={`notification ${!this.state.notificationSuccess ? 'error' : 'success'}`}>{this.state.notificationMsg}
        </div>
      </div>) : (<div></div>);

    return (
		<div>
      <Modal isOpen={this.state.modal}>
        <ModalBody>
          <StripeProvider apiKey="pk_test_RYl7CgOIy7aA1BSTJhoFl1sP">
            <MyStoreCheckout
              onSuccess={this._onStripeSuccess}
              onModalToggle={this._onModalToggle} />
          </StripeProvider>
        </ModalBody>
      </Modal>

			<div className="banner-job">
        <div className="banner-overlay"></div>
        <div className="container text-center">
          <h1 className="title">The Easiest Way to Find your Masjid</h1>
          <h3>We offer 12000 jobs vacation right now</h3>
          <div className="banner-form">
            <form action="#">
              <input type="text" className="form-control" onChange={this._onKeyword} value={this.state.keyword} placeholder="Type your key word" />
              <div className='mydropdown-div'>
                <Dropdown
                  options={this.state.jobLocationOptions}
                  onChange={this._onSelectJobLocation}
                  value={this.state.selectedJobLocation}
                  className='mydropdown'
                  controlClassName='mydropdown-control'
                  placeholderClassName='mydropdown-placeholder'
                  menuClassName='mydropdown-menu'
                  arrowClassName='mydropdown-arrow'
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this._onSearch} value="Search">Search</button>
            </form>
          </div>

          <ul className="banner-socail list-inline">
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Google Plus">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    	<div className="page">
        <div className="container">
          <div className="page">
            <div className="container">
              <div className="section cta cta-two text-center">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="single-cta">
                      <h3>Post Jobs</h3>
                      <p align="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            					<div className="price-box">
              					<h4>Buy Job Postings Online</h4>
              					<p>Job Postings go live for one calendar month and are available for use within 12 months of purchase.</p>
              					<div className="form-group">
                          <label >Quantity of Jobs</label>
                          <div className='job-quantity-mydropdown-div'>
                            <Dropdown
                              options={this.state.jobQuantityOptions}
                              onChange={this._onSelectJobQuantity}
                              value={this.state.selectedJobQuantity}
                              className='job-quantity-mydropdown'
                              controlClassName='job-quantity-mydropdown-control'
                              placeholderClassName='job-quantity-mydropdown-placeholder'
                              menuClassName='job-quantity-mydropdown-menu'
                              arrowClassName='job-quantity-mydropdown-arrow'
                            />
                          </div>
                          <h3 className="job-quantity-h3">{this.state.selectedJobQuantityText}</h3>
                        </div>
             		        <button type="submit" className="btn btn-primary" onClick={this._onProcced} value="Procced">Procced</button>
                        {notification}
              				</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Price;
