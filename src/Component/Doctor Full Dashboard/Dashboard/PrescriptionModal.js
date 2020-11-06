import React  from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AllContext } from '../../../App';

const PrescriptionModal = (props) => {
    const [appointedPatient, setAppointedPatient] = useContext(AllContext)

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (prescription, event) => {
        // Storing Data To Database
        fetch("http://localhost:3005/add-prescription",{
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


    return (
        <Modal  isOpen={props.modalIsOpen}
            onRequestClose={() => props.setModalIsOpen(false)} 
            style={{
                overlay:{
                    backgroundColor:"rgba(130,125,125,0.75)"
                },
                content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                width                 :  '40%',
                transform             : 'translate(-50%, -50%)'
                }
            }}
        >
            <div className="px-5 py-3">
                {
                props.selectedPatient && 
                <div>
                    <div className="mb-3 mb-4 d-flex justify-content-between">
                        <span className="text-primary">{props.selectedPatient.name}</span>
                        <span>Gender : {props.selectedPatient.gender}</span>
                        <span>Age : {props.selectedPatient.age}</span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="row add-prescription">

                        {errors.medicine && <span className="text-danger">Medicine Name Can't Be Empty</span>}
                        <input className="form-control col-6" ref={register({ required: true })} name="medicine" placeholder="Medicine Name" type="text"/>
                
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

                        <input ref={register({ required: true })} name="days" className="form-control col-2" type="number" placeholder="Days"/>
                        
                        <button type="submit" className="btn btn-primary col-1"><i className="fas fa-plus"></i></button>
                    </form>

                    {/* Medicine List */}
                    <div className="mt-5" style={{height:"300px", overflow:"auto"}}>
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
            </div>
        </Modal>
    );
};

export default PrescriptionModal;