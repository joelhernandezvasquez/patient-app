 //TODO: Need to refactor this component probably by creating a custom hook to manage the form data
import { useState} from "react";
import { Headline,FormInput,Toast} from "./index";
import { validateForm } from "../Helper/helper";
import { useDispatch } from "react-redux";
import { addPatient } from "../store/slices/patient/patientSlice";

export const PatientForm = () => {
    
    const dispatch = useDispatch();
    const [formValues,setFormValues] = useState({id:patientId,mascotaName:'',owner:'',email:'',date:'', simptoms:''});
    const [formError,setFormError] = useState(false);
   
   const resetForm = () =>{
      setFormValues({ mascotaName:'',owner:'',email:'',date:'', simptoms:''});
   }

   const handleInputChange = ({target}) =>{
      setFormValues({...formValues,[target.name]:target.value});
   }

   const handleSubmit = (event) =>{
      event.preventDefault();
     if(!validateForm(Object.values(formValues))){
        setFormError(true);
        return;
     }
        dispatch(addPatient(formValues))
        setFormError(false); 
        resetForm();      
   }
  return (

    <section className="patient-form top-spacing">
     
      <Headline>Seguimiento Pacientes</Headline>
      <p className="text-center">Anade Pacientes y <span className="bold">Administralos</span></p>
        {formError && <Toast type="negative" close = {setFormError}>All fields must be filled out.</Toast>}
      <form className="main-form" onSubmit={handleSubmit}>

       <FormInput labelTitle={'mascota Name'}>
          <input type="text" id="mascota-name" placeholder="Nombre de la mascota" name="mascotaName" value = {formValues['mascotaName']} onChange = {handleInputChange}/>
       </FormInput>

       <FormInput labelTitle={'owner'}>
          <input type="text" id="owner" placeholder="Nombre de el propietario" name="owner" value = {formValues['owner']} onChange = {handleInputChange}/>
       </FormInput>

       <FormInput labelTitle={'email'}>
          <input type="email" id="email" placeholder="Email Contact" name="email" value = {formValues['email']} onChange = {handleInputChange}/>
       </FormInput>
      
       <FormInput labelTitle={'Alta'}>
         <input type="date" id="date" value = {formValues['date']} name="date" onChange = {handleInputChange}/>
       </FormInput>

       <FormInput labelTitle={'Sintomas'}>
          <textarea placeholder="Describe the simptoms" name="simptoms" value = {formValues['simptoms']} onChange = {handleInputChange}></textarea>
       </FormInput>

         <input  type="submit" value="Agregar Paciente"/>
      </form>
    </section>
  )
}
