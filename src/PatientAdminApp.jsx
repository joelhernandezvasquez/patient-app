
import { Title } from './components/Title';
import './App.css';
import {PatientForm} from './components/PatientForm';
 import {PatientList} from './views/PatientList';
import { NotPatientRecord } from './views/NotPatientRecord';
import { useSelector } from 'react-redux';

export const PatientAdminApp = () => {
  const {patients} =  useSelector(state => state.patients);
 
  return (
    <main className='container'>
      <Title>Seguimiento Pacientes <span className='bold'>Veterinaria</span> </Title>
       <div className='two-grid-col'>
         <PatientForm/>
         {patients.length > 0 ? <PatientList/> : <NotPatientRecord/>}
       </div>
     
     
    </main>
  )
}
