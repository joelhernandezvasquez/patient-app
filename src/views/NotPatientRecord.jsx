import { Headline } from "../components/Headline"

export const NotPatientRecord = () => {
  return (
    <article className="no-patient-record top-spacing">
      <Headline>
        No hay Pacientes
      </Headline>

      <p>Comienza Agregando Pacientes y <span className="bold">apareceran en este lugar.</span></p>


    </article>
  )
}
