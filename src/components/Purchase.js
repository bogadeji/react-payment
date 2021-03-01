import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import BillingInfo from './BillingInfo'
import ConfirmPayment from './ConfirmPayment'
import Tabs from './Tabs.js'

export class Purchase extends Component {
  state={
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
  // nextStep = () => {
  //   const {step} = this.state;
  //   this.setState({
  //     step: step + 1
  //   })
  // }

  // Handle fields change
  handleChange = input => e =>  {
    this.setState({[input]: e.target.value})
  }

  
  render() {
    const { step } = this.state;
    const { name, email, address1, address2, lga, homeState, nameOnCard, cardType, cardDetails, expiry, cvv } = this.state;
    const values = {
      name, email, address1, address2, lga, homeState, nameOnCard, cardType, cardDetails, expiry, cvv }
    
    return(
      <section className="purchase">
        <h1 className="purchase-title">Complete your Purchase</h1>
        <Tabs step={step}>
          <section label="Personal Info" tabFor='0'>
            <PersonalInfo 
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}/>
            </section>
          <section label="Billing Info" tabFor='1'>
            <BillingInfo
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </section>
          <section label="Confirm Payment" tabFor='2'>
            <ConfirmPayment />
          </section>
          
        </Tabs>
      </section>
    )

   
  }
}

export default Purchase;