import React from "react"
// click event in button using props
type ButtonClicked = {
    handleclick : (event : React.MouseEvent<HTMLButtonElement>,id : number) => void
}

function Button(props : ButtonClicked) {
    // function HandleClick(){
    //     console.log("Button clicked");
    // }
  return (
    <div>
    <button onClick={ event => props.handleclick(event,1)} className="btn btn-primary" style={{margin:"25% 0 0 50%"}}>Click Here</button></div>
    )
}

export default Button