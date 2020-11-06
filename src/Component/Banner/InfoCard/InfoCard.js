import React from 'react';
import '../Infos/Infos.css'

const InfoCard = props => {
    const {title, icon , description , bg } = props.info; 
   
    return (
        <div className="col-md-4 text-white mb-2">
            <div className={`${bg} py-4  px-5 bg-primary  d-flex align-items-center rounded`}>
                <i id="icon" className={
                    icon==='clock' ? "fas fa-clock" : 
                    icon==='location' ? "fas fa-map-marker-alt" :
                    "fas fa-phone-alt"
                }></i>
                <div>
                    <h6>{title}</h6>
                    <p className="small m-0">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;