import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AllContext } from '../../../App';
import Preloader from '../../Preloader/Preloader';

const DataTable = (props) => {
   const [appointedPatient, setAppointedPatient] = useContext(AllContext)

   const [status, setStatus] = useState(null)
   const [patientId, setPatientId] = useState(null)
   useEffect(() => {
      if (status) {
         fetch('https://doctor-portal-backend-server.herokuapp.com/add-status', {
            method:'PUT',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify({status, patientId})
         })
         .then(res => res.json())
         .then(result => {
            console.log(result)
            const newData = appointedPatient && appointedPatient.map(ap => {
               if (ap._id === patientId) {
                  return result
               }else{
                  return ap
               }
            })
            setAppointedPatient(newData)
         })
      }
   }, [status])

   let slNo = 1;
   return (
      <div className="mt-5 bg-white rounded shadow-sm p-3 d-none d-md-block d-lg-block">
         <table className="table table-borderless">
            <thead>
               <tr className="text-center">
                  <th className="text-secondary text-left" scope="col">SL No</th>
                  <th className="text-secondary text-left" scope="col">Name</th>
                  <th className="text-secondary text-left" scope="col">Contact</th>
                  <th className="text-secondary text-left" scope="col">Booking Date</th>
                  <th className="text-secondary text-left" scope="col">Visiting Time</th>
                  <th className="text-secondary" scope="col">Prescription</th>
                  <th className={props.conditional === false ? "d-none" : "text-secondary"} scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  appointedPatient && appointedPatient.map(ap => {
                     return (
                        <tr>
                          <td>{slNo++}</td>
                          <td>{ap.name}</td>
                          <td>{ap.phone}</td>
                          <td>{ap.appointment.bookingDate}</td>
                          <td>{ap.appointment.visitingHour}</td>
   
                          <td className="text-center">
                              {/* Prescription */}
                              {   
                                 ap.prescription.length === 0 ?
                                 <span>
                                    <span>Not Added</span> 
                                    <i onClick={()=> props.openPrescriptionModal(ap._id)} style={{cursor:"pointer"}} className="fas fa-plus-circle"></i>
                                 </span>
                                 :
                                 <button onClick={()=> props.openPrescriptionModal(ap._id)} className="btn btn-primary">View</button>
                           }
                           </td>
                           <td className={props.conditional === false ? "d-none" : "text-center"}>
                              <select onChange={(e) => {
                                 setStatus(e.target.value)
                                 setPatientId(ap._id)
                                 }} className={ap.status === "Rejected" ? "btn btn-danger" : ap.status === "Approved" ? "btn btn-success" : "btn btn-info" }>
                                 <option selected={ap.status === "Pending"} className="bg-white text-secondary">Pending</option>
                                 <option selected={ap.status === "Approved"}className="bg-white text-secondary">Approved</option>
                                 <option selected={ap.status === "Rejected"}className="bg-white text-secondary">Rejected</option>
                              </select>
   
                           
                              <button className="btn ml-1 btn-warning text-white"> <i onClick={()=> props.openDataEditModal(ap._id)} className="fas fa-pencil-alt"></i> </button>
                           </td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>
         {
            !appointedPatient && <Preloader></Preloader>
         }
      </div>
   );
};

export default DataTable;