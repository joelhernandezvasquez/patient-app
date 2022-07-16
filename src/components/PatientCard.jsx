import { useDispatch } from "react-redux";
import { deletePatient } from "../store/slices/patient/patientSlice";

export const PatientCard = ({patient}) => {
  const dispatch = useDispatch();
   const {id,mascotaName,owner,email,date,simptoms} = patient;
   console.log(id);
  
   return (
    <div className="patient-card">
      <p>Nombre: <span>{mascotaName}</span></p>
      <p>Propietario: <span>{owner}</span></p>
      <p> Email: <span>{email}</span></p>
      <p> Fecha Alta: <span>{date}</span></p>
      <p>Sintomas: <span>{simptoms}</span></p>
      
      <div className="btn-container">
         <button className="btn btn-editar"> Editar</button>
         <button className="btn btn-eliminar" onClick={()=> dispatch(deletePatient(id))}> Eliminar</button>
      </div>
    </div>
  )
}
