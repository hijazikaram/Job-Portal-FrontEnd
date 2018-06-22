import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (<div>
      <footer id="footer" className="clearfix">
    		<section className="footer-top clearfix">
    			<div className="container">
    				<div className="row">

    					<div className="col-sm-3">
    						<div className="footer-widget">
    							<h3>Quik Links</h3>
    							<ul>
    								<li><Link to="">About Us</Link></li>
    								<li><Link to="">Contact Us</Link></li>
    								<li><Link to="">Careers</Link></li>
    								<li><Link to="">All Cities</Link></li>
    								<li><Link to="">Help & Support</Link></li>
    								<li><Link to="">Advertise With Us</Link></li>
    							</ul>
    						</div>
    					</div>


    					<div className="col-sm-3">
    						<div className="footer-widget">
    							<h3>How to sell fast</h3>
    							<ul>
    								<li><Link to="">How to sell fast</Link></li>
    								<li><Link to="">Membership</Link></li>
    								<li><Link to="">Banner Advertising</Link></li>
    								<li><Link to="">Promote your ad</Link></li>
    								<li><Link to="">Jobs Delivers</Link></li>
    								<li><Link to="">FAQ</Link></li>
    							</ul>
    						</div>
    					</div>


    					<div className="col-sm-3">
    						<div className="footer-widget social-widget">
    							<h3>Follow us on</h3>
    							<ul>
    								<li><Link to=""><i className="fa fa-facebook-official"></i>Facebook</Link></li>
    								<li><Link to=""><i className="fa fa-twitter-square"></i>Twitter</Link></li>
    								<li><Link to=""><i className="fa fa-google-plus-square"></i>Google+</Link></li>
    								<li><Link to=""><i className="fa fa-youtube-play"></i>youtube</Link></li>
    							</ul>
    						</div>
    					</div>


    					<div className="col-sm-3">
    						<div className="footer-widget news-letter">
    							<h3>Newsletter</h3>
    							<p>Jobs is Worldest leading Portal platform that brings!</p>

    							<form action="#">
    								<input type="email" className="form-control" placeholder="Your email id"/>
    								<button type="submit" className="btn btn-primary">Sign Up</button>
    							</form>
    						</div>
    					</div>
    				</div>
    			</div>
    		</section>

    		<div className="footer-bottom clearfix text-center">
    			<div className="container">
    				<p>Copyright &copy; <Link to="">Jobs</Link> 2018. Developed by <Link to="http://themeregion.com/">Karam Hijazi</Link></p>
    			</div>
    		</div>
    	</footer>
    </div>);
  }
}

export default Footer;
