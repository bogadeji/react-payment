import React from 'react'
import '../App.css'

const CompletedPurchase = () => {
  return (
    <section id="completed-purchase" className="white-bgd payment-modal">
      <span className="payment-resolution-icon center white-bgd">
        <i className="fas fa-check fa-3x"></i>
      </span>
      <h1 className="title">Purchase Completed</h1>
      <p>Please check your email for details concerning this transaction</p>
      <a href="#purchase" className="link">Return Home</a>
    </section>
  )
}

export default CompletedPurchase