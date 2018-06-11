import React from 'react';
import {CardElement} from 'react-stripe-elements';
const styles = {
  label: {
    width: '500px'
  }
}
class CardSection extends React.Component {
  render() {
    return (
      <label style={styles.label}>
        Card details
        <CardElement style={{base: {fontSize: '18px'}}} />
      </label>

    );
  }
}

export default CardSection;
