import React from 'react';
import testimonials from '../../Data/testimonials';
import './Testimonials.css';
import TestimonialData from './TestimonialData';

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonials.map(testimonial => <TestimonialData testimonial={testimonial}></TestimonialData>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;