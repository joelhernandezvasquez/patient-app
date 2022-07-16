
import  {Headline, PatientCard}  from "../components";
import { useSelector } from 'react-redux';

export const PatientList = () => {
  const {patients} =  useSelector(state => state.patients);

  return (
    <div className="top-spacing">
       <Headline>
        Listado Pacientes
      </Headline>
      <p className="text-center">Administra tus <span className="bold">Pacientes y Citas</span></p>
      {patients.map(patient =>{
        return <PatientCard key={patient.mascotaName} patient={patient}/>
      })}
    </div>
  )
}
