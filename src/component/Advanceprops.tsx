type HandleChildren = {
    children : string
}


function Advanceprops(props:HandleChildren) {
  return (
    <div style={{textAlign:"center", padding:'10rem', backgroundColor:'#DFF6FF'}}> 
      <h4>Name is passed through the children element</h4>
      {props.children}
      
      </div>
  )
}

export default Advanceprops