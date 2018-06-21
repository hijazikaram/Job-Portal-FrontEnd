import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import { Button } from 'reactstrap';
//
// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenError: false
    };
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    if (this.props.stripe) {
      this.props.stripe
        .createToken({name: 'Jenny Rosen'})
        .then(({token}) => {
          if (token) {
            this.setState({tokenError: false});
            this.props.onSuccess(token);
          } else {
            this.setState({tokenError: true});
          }
        }
      );
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <CardSection />
        {this.state.tokenError?<label className="stripe-modal-token-error">Invalid values</label>:""}
        <Button color="danger" onClick={this.props.onModalToggle}>Cancel</Button>
        <Button type="submit" color="primary" disabled={!this.props.stripe}>Pay</Button>
        </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
