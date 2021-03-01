import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import BillingInfo from './BillingInfo'
import ConfirmPayment from './ConfirmPayment'

export class TabBody extends Component {
   state={
    step: 1,
    name:'',
    email:'',
    address1:'',
    address2:'',
    lga:'',
    homeState:'',
    nameOnCard: '',
    cardType: '',
    cardDetails: '',
    expiry: '',
    cvv: ''
  }

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
  }

  // Go back to previous step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    })
  }

  // Handle fields change
  handleChange = input => e =>  {
    this.setState({[input]: e.target.value})
  }
  render() {
    const { step } = this.state;
    const { name, email, address1, address2, lga, homeState, nameOnCard, cardType, cardDetails, expiry, cvv } = this.state;
    const values = {
      name, email, address1, address2, lga, homeState, nameOnCard, cardType, cardDetails, expiry, cvv }
  
    
    switch(step) {
      
      case 1:
        return (
          <PersonalInfo 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>
        )
      case 2:
        return (
          <BillingInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 3:
        return (
          <ConfirmPayment 
          nextStep={this.nextStep}/>
        )
      default:
    }
  }
}


export default TabBody
