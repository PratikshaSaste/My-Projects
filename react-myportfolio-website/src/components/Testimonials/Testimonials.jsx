import React from 'react'
import './Testimonials.css'
import AVTAR1 from '../../assets/avatar1.jpg'
import AVTAR2 from '../../assets/avatar2.jpg'
import AVTAR3 from '../../assets/avatar3.jpg'
import AVTAR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">
       <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
      <article  className="testimonial">
          <div className="client__avatar">
              <img src={AVTAR1} alt="Avtar one"/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium ut cum incidunt magni laborum ea odit cupiditate suscipit pariatur commodi eos,
                neque error nihil qui animi quia, ab perspiciatis ipsam.
              </small>
        </article>
        <article  className="testimonial">
          <div className="client__avatar">
              <img src={AVTAR1} alt="Avtar one"/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium ut cum incidunt magni laborum ea odit cupiditate suscipit pariatur commodi eos,
                neque error nihil qui animi quia, ab perspiciatis ipsam.
              </small>
        </article>
        <article  className="testimonial">
          <div className="client__avatar">
              <img src={AVTAR1} alt="Avtar one"/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium ut cum incidunt magni laborum ea odit cupiditate suscipit pariatur commodi eos,
                neque error nihil qui animi quia, ab perspiciatis ipsam.
              </small>
        </article>
        <article  className="testimonial">
          <div className="client__avatar">
              <img src={AVTAR1} alt="Avtar one"/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium ut cum incidunt magni laborum ea odit cupiditate suscipit pariatur commodi eos,
                neque error nihil qui animi quia, ab perspiciatis ipsam.
              </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials