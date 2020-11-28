import React  from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AllContext } from '../../../App';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const PrescriptionModal = (props) => {
    const [appointedPatient, setAppointedPatient] = useContext(AllContext)

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (prescription, event) => {
        // Storing Data To Database
        fetch("https://doctor-portal-backend-server.herokuapp.com/add-prescription",{
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({patientId:props.selectedPatient._id, prescription})
        })
        .then(res =>res.json())
        .then(data => {
            const modify = {...props.selectedPatient, ...data}
            props.setSelectedPatient(modify)
            // const upDatePatient = {...appointedPatient, ...data}
            const upDatePatient = appointedPatient && appointedPatient.map(ap => {
                if (ap._id === props.selectedPatient._id) {
                   return data
                }else{
                   return ap
                }
            })
            setAppointedPatient(upDatePatient)
        })
        .catch(err => console.log(err))
        event.target.reset()
    }

    const handleClose = () => {
        props.setModalIsOpen(false);
    };


    return (
        <div>
        <Dialog
          open={props.modalIsOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
            <DialogContent className="px-3 px-md-5 px-lg-5 py-3">
                <DialogContentText id="alert-dialog-description">
                {
                    props.selectedPatient && 
                    <div>
                        <div className="px-3 px-md-0 px-lg-0 mb-3 d-flex justify-content-between">
                            <span className="text-primary">{props.selectedPatient.name}</span>
                            <span>Gender : {props.selectedPatient.gender}</span>
                            <span>Age : {props.selectedPatient.age}</span>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="row add-prescription px-3 px-md-0 px-lg-0">

                            {errors.medicine && <span className="text-danger">Medicine Name Can't Be Empty</span>}
                            <input className="form-control col-5" ref={register({ required: true })} name="medicine" placeholder="Medicine Name" type="text"/>
                    
                            {errors.doge && <span></span>}
                            <select ref={register({ required: true })}  className="form-control col-3" name="rules">
                                <option value="1 - 1 - 1">1 - 1 - 1</option>
                                <option value="1 - 0 - 1">1 - 0 - 1</option>
                                <option value="1 - 0 - 0">1 - 0 - 0</option>
                                <option value="1 - 1 - 0">1 - 1 - 0</option>
                                <option value="1 - 1 - 0">1 - 1 - 0</option>
                                <option value="0 - 1 - 1">0 - 1 - 1</option>
                                <option value="1 - 0 - 0">1 - 0 - 0</option>
                                <option value="0 - 0 - 1">0 - 0 - 1</option>
                            </select>

                            <input ref={register({ required: true })} name="days" className="form-control col-3" type="number" placeholder="Days"/>
                            
                            <button type="submit" className="btn btn-primary col-1"><i className="fas fa-plus"></i></button>
                        </form>

                        {/* Medicine List */}
                        <div className="mt-5" style={{height:"auto", overflow:"auto"}}>
                            {
                                <table className="table table-borderless">
                                    {
                                        props.selectedPatient.prescription.length  &&
                                        props.selectedPatient.prescription.map((prescript , index) => 
                                        <tr>
                                            <td>{index+1}.</td>
                                            <td>{prescript.medicine}</td>
                                            <td>{prescript.rules}</td>
                                            <td>{prescript.days} Days</td>
                                        </tr>
                                        )  
                                    }
                                </table>
                            }
                        </div>
                    </div>
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

export default PrescriptionModal;