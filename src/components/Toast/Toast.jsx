
import { highlightType } from "../../Helper/helper"
export const Toast = ({type,close,children}) => {

  return (
    <div style={{backgroundColor:highlightType[type].color}} className="toast">
      <p> 
         <i className={`${highlightType[type].icon} toast-icon`} aria-hidden="true"></i>
           {children}
        </p>
        <span className="toast-close" onClick={()=>close(false)}>X</span>
    </div>
  )
}
