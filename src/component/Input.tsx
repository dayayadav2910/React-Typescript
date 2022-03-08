import React from 'react'

type handleInput = {
    value : string,
    handleClick : (event : React.ChangeEvent<HTMLInputElement>) => void 
}
function Input(props: handleInput) {
  return (
    <div>
        <input type="text"  value={props.value} onChange={props.handleClick}  />
    </div>
  )
}

export default Input