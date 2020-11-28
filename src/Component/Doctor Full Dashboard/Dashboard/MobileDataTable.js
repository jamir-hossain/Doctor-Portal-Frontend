import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AllContext } from '../../../App';
import Preloader from '../../Preloader/Preloader';
import './MobileDataTable.css'

const MobileDataTable = (props) => {
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
      <div className="mt-5 bg-white rounded shadow-sm p-3 d-block d-md-none d-lg-none">
         {
            appointedPatient && appointedPatient.map(ap => {
               return (
               <div className="table table-borderless">
                  <div className="text-center bg-light row py-3">
                     <div className="text-left col-4"><b>SLNo:</b> {slNo++} </div>
                     <div className="text-left col-8"><b>Name:</b> {ap.name} </div>
                  </div>
                  <div className="text-right"><b className="float-left">Contact :</b> {ap.phone}</div>
                  <div className="text-right"><b className="float-left">Visiting Time :</b> {ap.appointment.visitingHour}</div>
                  <div className="text-right"><b className="float-left">Booking Date :</b> {ap.appointment.bookingDate}</div>
                  <div className="text-right">
                     <b className="float-left">Prescription :</b>
                     {   
                        ap.prescription.length === 0 ?
                        <span>
                           <span>Not Added</span> 
                           <i onClick={()=> props.openPrescriptionModal(ap._id)} style={{cursor:"pointer"}} className="fas fa-plus-circle"></i>
                        </span>
                        :
                        <button onClick={()=> props.openPrescriptionModal(ap._id)} className="btn btn-primary">View</button>
                     }
                     <button className="btn ml-1 btn-warning text-white"> <i onClick={()=> props.openDataEditModal(ap._id)} className="fas fa-pencil-alt"></i> </button>
                  </div>
                  <div className={props.conditional === false ? "d-none" : "text-right"}>
                     <b className="float-left">Action :</b>
                     <select onChange={(e) => {
                        setStatus(e.target.value)
                        setPatientId(ap._id)
                        }} className={ap.status === "Rejected" ? "btn btn-danger" : ap.status === "Approved" ? "btn btn-success" : "btn btn-info" }>
                        <option selected={ap.status === "Pending"} className="bg-white text-secondary">Pending</option>
                        <option selected={ap.status === "Approved"}className="bg-white text-secondary">Approved</option>
                        <option selected={ap.status === "Rejected"}className="bg-white text-secondary">Rejected</option>
                     </select>
                  </div>
               </div>
               )
            })
         }
         {
            !appointedPatient && <Preloader></Preloader>
         }
      </div>
   );
};

export default MobileDataTable;