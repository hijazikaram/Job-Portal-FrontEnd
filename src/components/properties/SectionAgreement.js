import React, {Component} from 'react';
class SectionAgreement extends Component {
  render() {
    const {agreeTerms, onAgreeTermsAndCondition, postJob} = this.props;
    return (
      <div className="checkbox section agreement">
        <label className={`pull-left ${agreeTerms
          ? 'checked'
          : ''}`} htmlFor="signing-2"><input type="checkbox" name="signing-2" id="signing-2" onChange={onAgreeTermsAndCondition} />
          You agree to our Terms of Use and Privacy Policy and acknowledge that you are the rightful owner of this item and using Jobs to find a genuine buyer.
        </label>

        <button type="submit" className="btn btn-primary" onClick={postJob} disabled={!agreeTerms}>Post Your Job</button>
      </div>
    );
  }
}

export default SectionAgreement;
