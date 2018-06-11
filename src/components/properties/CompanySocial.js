import React, {Component} from 'react';
class CompanySocial extends Component {
  render() {
    const {companyFacebook, companyTwitter, companyGoogle, companyLinkedin} = this.props;
    return (
      <div className="change-social section">
        <h2>Social</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" value={companyFacebook} />
              <span className="form-control-feedback">
                <i className="fa fa-facebook"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" value={companyTwitter} />
              <span className="form-control-feedback">
                <i className="fa fa-twitter"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" value={companyGoogle} />
              <span className="form-control-feedback">
                <i className="fa fa-google-plus"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" value={companyLinkedin} />
              <span className="form-control-feedback">
                <i className="fa fa-linkedin"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanySocial;
