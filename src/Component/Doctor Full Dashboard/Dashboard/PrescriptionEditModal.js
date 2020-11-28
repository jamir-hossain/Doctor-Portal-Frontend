import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const PrescriptionEditModal = (props) => {

   // To get data from prescription modal and send on database
   const { register, handleSubmit, errors } = useForm()
   const onSubmit = data => {  
      console.log(data)   
      // // Storing Data to Database
      // fetch("https://doctors-portal-backend.herokuapp.com/updateAppointmentTime",{
      //     method : "POST",
      //     headers : {
      //         "Content-type" : "application/json"
      //     },
      //     body: JSON.stringify(data)
      // })
      // .then(res => res.json())
      // .then(data => console.log(data))
      // setEditModalIsOpen(false)
   }

   // 
   const handleClose = () => {
      props.setEditModalIsOpen(false);
  };

   return (
      // <Modal  isOpen={props.editModalIsOpen}
      // onRequestClose={() => props.setEditModalIsOpen(false)} 
      // style={{
      //    overlay:{
      //       backgroundColor:"rgba(130,125,125,0.75)"
      //    },
      //    content : {
      //       top                   : '50%',
      //       left                  : '50%',
      //       right                 : 'auto',
      //       bottom                : 'auto',
      //       marginRight           : '-50%',
      //       width                 :  '40%',
      //       transform             : 'translate(-50%, -50%)'
      //    }
      // }}>
      
      //    {props.selectedPatient &&
      //    <form className="px-5 my-3" onSubmit={handleSubmit(onSubmit)}>
      //       <h5 className="text-primary text-center mb-5">{props.selectedPatient.name}'s Appointment</h5>
      //       <div className="form-group row">
      //             <label htmlFor="" className="col-4">Date</label>
      //             <input type="text" defaultValue={props.selectedPatient.bookingDate} ref={register({ required: true })} name="date" className="form-control col-8"/>
      //             <div className="col-12">
      //                {errors.date && <span className="text-danger">Appointment date must not empty ! <br/></span>}
      //             </div>
      //       </div>
      //       <div className="form-group row">
      //             <label htmlFor="" className="col-4">Time</label>
      //             <input type="text" defaultValue={props.selectedPatient.time} ref={register({ required: true })} name="time" className="form-control col-8"/>
      //             <div className="col-12">
      //                {errors.time && <span className="text-danger">Appointment time must not empty ! <br/></span>}
      //             </div>
      //       </div>
      //       <div className="form-group text-right">
      //             <input type="hidden"  value={props.selectedPatient._id} ref={register({ required: true })} name="id"/>
      //             <button type="submit" className="btn btn-primary">Update</button>
      //       </div>
      //    </form>
      //    }
      // </Modal>
      <div>
         <Dialog
          open={props.editModalIsOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
         >
            <DialogContent className="px-5 py-3">
               <DialogContentText id="alert-dialog-description">
               {
                  props.selectedPatient &&
                  <form className="px-3 px-md-5 px-lg-5 my-3" onSubmit={handleSubmit(onSubmit)}>
                     <h5 className="text-primary text-center mb-5">{props.selectedPatient.name}'s Appointment</h5>
                     <div className="form-group row">
                        <label htmlFor="" className="col-4">Date</label>
                        <input type="text" defaultValue={props.selectedPatient.bookingDate} ref={register({ required: true })} name="date" className="form-control col-8"/>
                        <div className="col-12">
                           {errors.date && <span className="text-danger">Appointment date must not empty ! <br/></span>}
                        </div>
                     </div>
                     <div className="form-group row">
                        <label htmlFor="" className="col-4">Time</label>
                        <input type="text" defaultValue={props.selectedPatient.time} ref={register({ required: true })} name="time" className="form-control col-8"/>
                        <div className="col-12">
                           {errors.time && <span className="text-danger">Appointment time must not empty ! <br/></span>}
                        </div>
                     </div>
                     <div className="form-group text-right">
                        <input type="hidden"  value={props.selectedPatient._id} ref={register({ required: true })} name="id"/>
                        <button type="submit" className="btn btn-primary">Update</button>
                     </div>
                  </form>
               }
               </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="secondary" onClick={handleClose}>
                Close
                </Button>
            </DialogActions>
        </Dialog>
      </div>
   );
};

export default PrescriptionEditModal;