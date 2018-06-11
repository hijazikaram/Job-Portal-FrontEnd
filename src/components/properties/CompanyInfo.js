import React, {Component} from 'react';
class CompanyInfo extends Component {
  render() {
    const {companyIndustry, onChangeCompanyIndustry, onChangeCompanyName, companyName, onChangeCompanyEmail, companyEmail, onChangeCompanyMobile, companyMobile,onChangeCompanyAddress, companyAddress} = this.props;
    return (
      <div className="section company-information">
        <h4>Company Information</h4>
        <div className="row form-group">
          <label className="col-sm-3 label-title">Industry<span className="required">*</span>
          </label>
          <div className="col-sm-9">
            <input type="text" name="name" className="form-control" placeholder="Marketing and Advertising" onChange={onChangeCompanyIndustry} value={companyIndustry}/>
          </div>
        </div>
        <div className="row form-group">
          <label className="col-sm-3 label-title">Company Name<span className="required">*</span>
          </label>
          <div className="col-sm-9">
            <input type="text" name="name" className="form-control" placeholder="ex, Jhon Doe" onChange={onChangeCompanyName} value={companyName}/>
          </div>
        </div>
        <div className="row form-group">
          <label className="col-sm-3 label-title">Email ID</label>
          <div className="col-sm-9">
            <input type="email" name="email" className="form-control" placeholder="ex, jhondoe@mail.com" onChange={onChangeCompanyEmail} value={companyEmail}/>
          </div>
        </div>
        <div className="row form-group">
          <label className="col-sm-3 label-title">Mobile Number<span className="required">*</span>
          </label>
          <div className="col-sm-9">
            <input type="text" name="mobileNumber" className="form-control" placeholder="ex, +912457895" onChange={onChangeCompanyMobile} value={companyMobile}/>
          </div>
        </div>
        <div className="row form-group address">
          <label className="col-sm-3 label-title">Address<span className="required">*</span>
          </label>
          <div className="col-sm-9">
            <input type="text" name="address" className="form-control" placeholder="ex, alekdera House, coprotec, usa" onChange={onChangeCompanyAddress} value={companyAddress}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyInfo;
