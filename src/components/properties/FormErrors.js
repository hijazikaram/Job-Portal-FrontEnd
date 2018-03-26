import React, { Component } from 'react';

class FormErrors extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formErrors;
    this.no_errors = true;
  }

  render() {
    for(var key in this.state){
      if(this.state[key]) {
        this.no_errors = false;
        break;
      } else {
        this.no_errors = true;
      }
    }

    return (
      <div>
        <div className={`formErrors ${this.no_errors ? "no-errors" : 'has-errors'}`}>

          {Object.keys(this.state).map((fieldName, i) => {
            if((fieldName != 'confirmPassword') && (fieldName != 'checked')) {
              if(this.state[fieldName].length > 0){
                return (
                  <p key={i}>{fieldName} {this.state[fieldName]}</p>
                )   
              } else {
                return '';
              }
            } else {
              return (
                <div key={i} className = {`${this.state[fieldName] ? 'error' : ''}`}>{this.state[fieldName]}</div>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default FormErrors;