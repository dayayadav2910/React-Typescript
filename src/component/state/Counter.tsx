import React, {useReducer}  from 'react'
type CounterState = {
    count : number
}
type UpdateAction = {
    type : "Increment" | "Decriment",
    payload : number
}
type ResetValue = {
    type : "Reset"
}
type CounterACtion= UpdateAction | ResetValue

const initial  = {count : 0}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initial)

    function reducer(state:CounterState, action:CounterACtion){
        switch (action.type) {
            case "Increment":
                return {count : state.count + action.payload}
            case "Decriment":
                return {count : state.count  - action.payload}
            case "Reset" :
                return initial
            default:
                return state;
        }
    }   
  return (
    <div style={{textAlign:"center"}}>
    <h2>Add, Minus and Rest The Count Value</h2> <br/>
    Count : {state.count} <br />
    <br />
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch({type: "Increment", payload : 10  })}}>Add</button>
        <button  className="btn btn-primary mx-2" onClick={()=>{dispatch({type: "Decriment", payload : 10 })}}>Minus</button>
        <button  className="btn btn-primary mx-2" onClick={()=>{dispatch({type: "Reset"})}}>Reset</button>
    </div>
  )
}

export default Counter