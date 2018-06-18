import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm 
        	onSuccess={this.props.onSuccess}
          	onModalToggle={this.props.onModalToggle}/>
      </Elements>
    );
  }
}

export default MyStoreCheckout;
