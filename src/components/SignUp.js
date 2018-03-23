import React, { Component } from 'react';
import '../css/SignUp.css';
import FindAJob from './properties/FindAJob';
import PostAJob from './properties/PostAJob';
import {Tabs, Tab} from 'react-bootstrap';



class SignUp extends Component {
  constructor(props) {
		super(props);
		this.state = {

		};
	}

  render() {
    return (
      <div>
      <section className="job-bg user-page">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div className="user-account job-user-account">
                <h2>Create An Account</h2>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Find A Job">
                      <FindAJob />
                    </Tab>
                    <Tab eventKey={2} title="Post A Job">
                      <PostAJob />
                    </Tab>
                  </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default SignUp;
