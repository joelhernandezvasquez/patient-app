

export const validateForm = (inputs) =>{
    return inputs.every(input => input!=''); 
}

export const highlightType = {
    positive:{
        icon:"fa fa-check",
        color:'green'
    },
    negative:{
        icon:"fa fa-exclamation",
        color:'red'
    }
}