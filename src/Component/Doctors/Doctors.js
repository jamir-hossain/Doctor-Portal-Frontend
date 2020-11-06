import React from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h3 className="text-center  text-primary my-5">Our Doctors</h3>
                <div className="row">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
            </div>
        </section>
    );
};

export default Doctors;