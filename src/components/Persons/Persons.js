import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.personArray.map((person,index) => {
    return <Person 
                name = {person.name}
                age = {person.age}
                key = {person.id}
                click = {()=> props.delete(index)}
                changed = {(event) => props.change(event, person.id)}
                >Hiii this is {person.name}'s child
            </Person>
})

export default persons