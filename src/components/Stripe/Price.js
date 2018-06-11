import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import '../../css/Stripe.css';
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <StripeProvider apiKey="pk_live_1LuCes6FUiTEyUGUER85ykHP">
        <MyStoreCheckout />
      </StripeProvider>
    </div>);
  }
}

export default Price;
