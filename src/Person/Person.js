import React from 'react'

import './Person.css'
// we can pass args to the function by using 'props' as shown
const person = (props) => {
    // also this {} we can include the javascript we want to execute.
    return(
        <div className = 'Person' >
            <h3 onClick={props.click}>%%% hii this is {props.name} and i am just {props.age} years old %%%</h3>
            <p>{props.children}</p> 
            <input type='text' onChange={props.change} />
        </div>
       
    )
}
export default person