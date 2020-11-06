import React from 'react';
import infos from '../../../Data/infos';
import './Infos.css'
import InfoCard from '../InfoCard/InfoCard';

const Infos = () => {
    return (
        <div className="infos">
            <div className="container">
                <div class="row mt-5">
                    
                    {
                       infos.map(info => <InfoCard info={info}></InfoCard> ) 
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default Infos;