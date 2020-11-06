import React from 'react';
import services from '../../Data/services';
import ServiceData from './ServiceData';
import { useState } from 'react';

const Services = () => {
    const [serviceData, setServiceData] = useState(services)
    console.log(serviceData)
    return (
        <section className="services mb-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-primary">Our services</h5>
                    <h1>Service We Provide</h1>
                </div>
                <div className="row mt-4 pt-5">
                    {
                        serviceData.map(service => <ServiceData data={service}></ServiceData> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;