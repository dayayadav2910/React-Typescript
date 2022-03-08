type HandleStatus = {
    status : 'Loading' | 'Received' | 'Sending'
}
function Status(props : HandleStatus) {

    let message; 
    if(props.status === "Loading"){
        message = "Loading"
    }
    else if (props.status ==="Sending"){
        message = "Sending"
    }
    else if(props.status === "Received"){
        message = "Received"
    }
    else{
        message = "Incorrect argument is passed"
    }
  return (
    <div>
        <h2> {message} </h2>
    </div>
  )
}

export default Status