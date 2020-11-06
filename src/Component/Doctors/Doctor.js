import React from 'react';
import img from '../../images/doctor-sm.png'

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Coudi</h4>
            <p> <i className="fas fa-phone-alt text-primary"></i>
            +880-188-934789</p>
        </div>
    );
};

export default Doctor;