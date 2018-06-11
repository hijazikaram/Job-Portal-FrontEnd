import React, {Component} from 'react';
class QuickRules extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="section quick-rules">
          <h4>Quick rules</h4>
          <p className="lead">Posting an ad on
            <a href="#">jobs.com</a>
            is free! However, all ads must follow our rules:</p>

          <ul>
            <li>Make sure you post in the correct category.</li>
            <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
            <li>Do not upload pictures with watermarks.</li>
            <li>Do not post ads containing multiple items unless its a package deal.</li>
            <li>Do not put your email or phone numbers in the title or description.</li>
            <li>Make sure you post in the correct category.</li>
            <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
            <li>Do not upload pictures with watermarks.</li>
            <li>Do not post ads containing multiple items unless its a package deal.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default QuickRules;
