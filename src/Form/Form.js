import React, { Component } from 'react'
import './Form.css'

import FormLeftSection from './FormLeftSection/FormLeftSection'
import FormRightSection from './FormRightSection/FormRightSection'
 class Form extends Component {
  render() {
    return (
      <div>
        <FormLeftSection/>
        <FormRightSection/>
      </div>
    )
  }
}


export default Form