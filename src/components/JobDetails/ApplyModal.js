import axios from 'axios';
import React, {Component} from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';

class ApplyModal extends Component {
  constructor() {
    super();
    this.baseState = {
      email: '',
      phoneNumber: '',
      resume: null
    };;
    this.state = this.baseState;
  }

  onEmailChange = (e) => this.setState({ email: e.target.value });

  onPhoneNumberChange = (e) => this.setState({ phoneNumber: e.target.value });

  onResumeChange = (e) => {
    if (e.target.files.length) {
      this.setState({ resume: e.target.files[0] });
    }
  }

  submit = () => {
    const { job, _onModalToggle } = this.props;
    const { email, phoneNumber, resume } = this.state;
    if (email && phoneNumber && resume) {
      const userId = localStorage.getItem('user_id');
      const data = new FormData();
      data.append('resume', resume);
      data.append('email', email);
      data.append('phoneNumber', phoneNumber);
      data.append('userId', userId);
      axios
        .post(`http://localhost:5000/api/jobs/${job._id}/apply`, data)
        .then(this.closeModal);
    }
  }

  closeModal = () => {
    const { _onModalToggle } = this.props;
    _onModalToggle();
    this.setState(this.baseState);
  }

  render() {
    console.log(this.state);
    const { modal, job } = this.props;
    return (
      <form>
        <Modal show={modal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Apply</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input
                type="text"
                name='email'
                className="form-control applyInfo"
                placeholder="Email"
                onChange={this.onEmailChange}
                required
              />
              <input
                type="text"
                name='phoneNumber'
                className="form-control applyInfo"
                placeholder="Phone Number"
                onChange={this.onPhoneNumberChange}
                required
              />
              <FormControl
                type="file"
                name='resume'
                className="applyInfo"
                onChange={this.onResumeChange}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            <Button onClick={this.submit}>Submit Application</Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

export default ApplyModal;
