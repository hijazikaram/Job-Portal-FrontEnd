import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import '../../css/Stripe.css';

import '../../css/App.css';









class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
			
	
		<div>
				
		
		
		
			 <div className="banner-job">
        <div className="banner-overlay"></div>
        <div className="container text-center">
          <h1 className="title">The Easiest Way to Find your Masjid</h1>
          <h3>We offer 12000 jobs vacation right now</h3>
          <div className="banner-form">
            <form action="#">
              <input type="text" className="form-control" placeholder="Type your key word"/>
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">Location 1</a>
                  </li>
                  <li>
                    <a href="#">Location 2</a>
                  </li>
                  <li>
                    <a href="#">Location 3</a>
                  </li>
                </ul>
              </div>
              <button type="submit" className="btn btn-primary" value="Search">Search</button>
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
                  
                  
                
                  
					<div class="price-box">
						
						
					<h4>Buy Job Postings Online</h4>
					<p>Job Postings go live for one calendar month and are available for use within 12 months of purchase.</p>
		
		
		
					<div class="form-group">
  <label for="sel1">Quantity of Jobs</label>
  <select class="form-control" id="sel1">
    <option>1 Job - $150 per Job</option>
    <option>2 Job - $150 per Job</option>
    <option>3 Job - $150 per Job</option>
    <option>4 Job - $150 per Job</option>
    <option>5 Job - $150 per Job</option>
    <option>6 Job - $150 per Job</option>
    <option>7 Job - $150 per Job</option>
    <option>8 Job - $150 per Job</option>
    <option>9 Job - $150 per Job</option>
    <option>10 Job - $150 per Job</option>
		
		
  </select>
</div>
		
		<button type="submit" class="btn btn-primary">Procced</button>
						
					</div>
                  
       <StripeProvider apiKey="pk_live_1LuCes6FUiTEyUGUER85ykHP">
       <MyStoreCheckout />
      </StripeProvider>
                  
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
			
			
			
			