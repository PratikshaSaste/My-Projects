import React from 'react'
import CV from '../../assets/Pratiksha_Saste_CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a  href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets talk</a>
    </div>
  )
}

export default CTA