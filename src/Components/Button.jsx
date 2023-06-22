import React from 'react'
const Button=({text,color,size})=>{

return(
    <button style={{
      backgroundColor:color,
      fontSize:size,
    
    }}
    >
    {text}</button>
    )
}

export default Button;