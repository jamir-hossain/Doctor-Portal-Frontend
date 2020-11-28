import React, { useContext } from 'react';
import { AllContext, CalenderContext } from '../../../App';
import ReactCalender from '../../Get Appointment Section/ReactCalender';
import Preloader from '../../Preloader/Preloader';
import Sidebar from '../Sidebar/Sidebar';

const Appointment = () => {
   const [date, setDate] = useContext(CalenderContext)
   const [appointedPatient, setAppointedPatient] = useContext(AllContext)

   const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

   const appointedData = appointedPatient && appointedPatient.filter( data => data.appointment.bookingDate === formatedDate)
   

   return (
      <div className="container-fluid row">
         <Sidebar></Sidebar>
         <div className="col-9 col-sm-9 col-md-10 col-lg-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB",height:"100%"}}>
         <h5>Appointed Patient</h5>
         <div className='row mt-3'>
            <div className="col-md-6 py-5 pl-3">
               <ReactCalender></ReactCalender>
            </div>
            <div className="col-md-6 py-5 pr-5">
               <div className="bg-white rounded shadow-sm p-3" style={{height: "442px",overflow: "auto"}}>

                  <div className="py-3 d-flex align-items-center justify-content-between">
                     <h6 className="text-primary"> Appointments </h6>
                     <div className="selector">
                        {date.getDate()} {date.toLocaleString('default', { month: 'short' }) } , {date.getFullYear()}
                     </div>     
                  </div>
                  <div>
                  {
                     appointedData ? <div>
                        {
                           appointedData.length === 0 ? <div className="p-5">
                              <h5 className="text-center">No Have any Appointment to {date.getDate()} {date.toLocaleString('default', { month: 'short' }) } {date.getFullYear()}</h5>
                           </div> : 
                           <table className="table table-borderless">
                              <thead>
                                 <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary text-center" scope="col">Schedule</th>
                                    <th className="text-secondary text-center" scope="col">Contact</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {
                                    appointedData.map( data =>
                                       <tr>
                                          <td>{data.name}</td>
                                          <td className="text-center">{data.appointment.bookingDate}</td>
                                          <td className="text-center">{data.phone}</td>
                                       </tr>
                                    )
                                 }
                              </tbody>
                           </table>
                        }
                     </div> : <Preloader></Preloader>
                  }
                  </div>
               </div>
            </div>
         </div>
         </div>
      </div>
   );
};

export default Appointment;