import React, { Component } from 'react'

export class BillingInfo extends Component {
   continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props
  
    return (
      <section label="Billing Info">
          <div className="form-control">
          <label htmlFor="name-on-card">
            Name on Card <sup>*</sup>
          </label><br />
          <input type="text" id="name-on-card" className="input width-100" onChange={handleChange('nameOnCard')} defaultValue={values.nameOnCard}/>
        </div>
          <div className="form-control">
          <label htmlFor="card-type">
            Card Type <sup>*</sup>
          </label><br />
          <input type="text" id="card-type" className="input width-100" onChange={handleChange('cardType')} defaultValue={values.cardType}/>
        </div>
        <div className="card-grid">
          <div className="form-control">
            <label htmlFor="card-details">
              Card details <sup>*</sup>
            </label><br />
            <input type="text" id="address1" className="input width-100" onChange={handleChange('cardDetails')} defaultValue={values.cardDetails}/>
          </div>
          <div className="form-control">
            <label htmlFor="expiry">
              Expiry Date <sup>*</sup>
            </label><br />
            <input type="text" id="expiry" className="input width-100" onChange={handleChange('expiry')} defaultValue={values.expiry}/>
          </div>
          <div className="form-control">
            <label htmlFor="cvv">
              CVV <sup>*</sup>
            </label><br />
            <input type="text" id="cvv"className="input width-100"  onChange={handleChange('cvv')} defaultValue={values.cvv}/>
          </div>
        </div>
        <div className="button-div">
          <button>Next</button>
          <a href="#purchase">Cancel Payment</a>
        </div>   
      </section>
    )
  }
}

export default BillingInfo
