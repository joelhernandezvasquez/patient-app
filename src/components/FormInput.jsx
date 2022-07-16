

export const FormInput = ({labelTitle,children}) => {
  return (
    <div className="form-input">
    <label>{labelTitle}</label>
    {children}
 </div>
  )
}
