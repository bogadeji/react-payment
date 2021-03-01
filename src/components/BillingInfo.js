import React, { Component } from 'react'

export class BillingInfo extends Component {
   continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props
  
    return (
      <section label="Billing Info">
          <div className="form-control">
          <label htmlFor="name-on-card">
            Name on Card
          </label><br />
          <input type="text" id="name-on-card" className="input width-100" onChange={handleChange('nameOnCard')} defaultValue={values.nameOnCard}/>
        </div>
          <div className="form-control">
          <label htmlFor="card-type">
            Card Type
          </label><br />
          <input type="text" id="card-type" className="input width-100" onChange={handleChange('cardType')} defaultValue={values.cardType}/>
        </div>
        <div>
          <div className="form-control">
            <label htmlFor="card-details">
              Card details
            </label><br />
            <input type="text" id="address1" className="input" onChange={handleChange('cardDetails')} defaultValue={values.cardDetails}/>
          </div>
          <div className="form-control">
            <label htmlFor="expiry">
              Expiry Date
            </label><br />
            <input type="text" id="expiry" className="input" onChange={handleChange('expiry')} defaultValue={values.expiry}/>
          </div>
          <div className="form-control">
            <label htmlFor="cvv">
              CVV
            </label><br />
            <input type="text" id="cvv"className="input"  onChange={handleChange('cvv')} defaultValue={values.cvv}/>
          </div>
        </div>
        <div className="button-div">
          <button onClick={this.continue}>Next</button>
          <a href="#purchase">Cancel Payment</a>
        </div>   
      </section>
    )
  }
}

export default BillingInfo
