import {Name} from './propspassing.types'

type HandleName = {
  names : Name[]
}

function Propspassing(props :HandleName ) {
  return (
    <div>Hello
        {
            props.names.map((name) =>{
                    return( 
                        <h2>
                        {name.first}{name.last}</h2>)
            })
        }
    </div>
  )
}
export default Propspassing