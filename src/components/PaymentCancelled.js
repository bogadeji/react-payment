import React from 'react'
import '../App.css'

const PaymentCancelled = () => {
  return (
    <section id="cancelled-payment" className="white-bgd payment-modal">
      <span className="payment-resolution-icon center white-bgd">
        <i className="fas fa-times fa-3x"></i>
      </span>
      <h1 className="title">Payment Cancelled</h1>
      <p>Payment for this transaction has been canceled. To complete your purchase, kindly initiate a fresh payment transaction</p>
      <a href="#purchase" className="link">Return Home</a>
    </section>
  )
}

export default PaymentCancelled