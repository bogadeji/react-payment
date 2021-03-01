import React, { Component } from 'react'

export class ConfirmPayment extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h1>Hell0</h1>
        <div className="button-div">
          <button onClick={this.continue}>Pay</button>
          <a href="#purchase">Cancel Payment</a>
        </div> 
      </div>
    )
  }
}

export default ConfirmPayment
