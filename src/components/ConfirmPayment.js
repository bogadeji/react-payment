import React, { Component } from 'react'

export class ConfirmPayment extends Component {
 

  render() {
    return (
      <section>
        <div className="table">
          <div className="table-header space-between">
            <p>Item Name</p>
            <p>Price</p>
          </div>
          <div className="item-list">
            <div className="item space-between">
              <p>Data science and usability</p>
              <p className="bold">50,000.00</p>
            </div>
            <div className="item space-between">
              <p>Shipping</p>
              <p className="bold">0.00</p>
            </div>
          </div>
          <hr />
          <div className="total">
            <div className=" space-between">
              <p className="total-text">Total</p>
              <p className="bold">50,000.00</p>
            </div>
            
          </div>
        </div>
        <div className="button-div">
          <button >Pay</button>
          <a href="#purchase">Cancel Payment</a>
        </div>
      </section>
    )
  }
}

export default ConfirmPayment
