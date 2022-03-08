import React from 'react'


type cssproperty = {
    styles : React.CSSProperties
}
function Container(props: cssproperty) {
  return (
    <div style={props.styles}>
        <h3>Styles example</h3> <br />
        <h5>Hello Word</h5>
    </div>
  )
}

export default Container