import React, {Component} from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';

class ApplyModal extends Component {
  render() {
    const { modal, job, _onModalToggle } = this.props;
    return (
      <Modal show={modal} onHide={_onModalToggle}>
        <form encType="multipart/form-data" action={`http://localhost:5000/api/jobs/${job._id}/apply`} method="post" >
          <Modal.Header closeButton>
            <Modal.Title>Apply</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <input type="text" name='name' className="form-control applyInfo" placeholder="Name" />
              <input type="text" name='email' className="form-control applyInfo" placeholder="Email" />
              <input type="text" name='phoneNumber' className="form-control applyInfo" placeholder="Phone Number" />
              <FormControl type="file" name='resume' className="applyInfo"/>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            <Button type="submit">Submit Application</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default ApplyModal;
