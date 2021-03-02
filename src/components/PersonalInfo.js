import React, { Component } from 'react'

export class PersonalInfo extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    const { values, handleChange } = this.props
    return (
      <div>
        <section label="Personal Info">
              <div className="form-control">
                <label htmlFor="name">
                  Name
                </label> <br />
                <input type="text" id="name" className="input width-100" onChange={handleChange('name')} defaultValue={values.name}/>
              </div>
                <div className="form-control">
                <label htmlFor="email">
                  Email Address <sup>*</sup>
                </label><br />
                <label className="input-note">
                  The purchase receipt would be sent to this address
                </label><br />
                <input type="text" id="email" className="input width-100" onChange={handleChange('email')} defaultValue={values.email} required/>
              </div>
              <div className="form-control">
                <label htmlFor="address1">
                  Address1
                </label><br />
                <input type="text" id="address1" className="input width-100" onChange={handleChange('address1')} defaultValue={values.address1}/>
              </div>
              <div className="form-control">
                <label htmlFor="address2">
                  Address2
                </label><br />
                <input type="text" id="address2" className="input width-100" onChange={handleChange('address2')} defaultValue={values.address2}/>
               </div>
              <div className="city-grid">
                <div className="form-control">
                  <label htmlFor="lga">
                    Local Government
                  </label><br></br>
                  <input type="text" id="lga" className="input width-100" onChange={handleChange('lga')} defaultValue={values.lga}/>
                </div>
                <div className="form-control">
                  <label htmlFor="homeState">
                    State
                  </label><br />
                  <input type="text" id="homeState" className="input width-100" onChange={handleChange('homeState')} defaultValue={values.homeState}/>
                </div>
              </div>
              <div className="button-div">
                <button>Next</button>
                <a href="#purchase">Cancel Payment</a>
              </div>
            </section>
      </div>
    )
  }
}

export default PersonalInfo
