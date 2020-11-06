import React from 'react';
import bannerImg from '../../images/banner-img.png'
import ReactCalender from './ReactCalender';
import './Appointment.css'
import AppointmentTable from './AppointmentTable.js';


const AppointmentSection = () => {
   

   return (
      <div className="appointment-section">
         <div className="container">
            <div className="row" style={{height:"100vh"}}>
               <div className="col-md-5">
                  <h4 className="text-center col-12 mb-5">Choose an Appointment Date</h4>
                  <ReactCalender></ReactCalender>
               </div>
               <div className="col-md-6 offset-1 mt-5">
                  <img className="img-fluid" src={bannerImg} alt=""/>
               </div>
               <AppointmentTable></AppointmentTable>
            </div>
               
         </div>
      </div>
   );
};

export default AppointmentSection;