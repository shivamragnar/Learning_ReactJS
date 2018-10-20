import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {

    constructor (props){
        super(props)
        console.log('[Persons.js] inside Constructor', props)
       
      }
  
      componentWillMount(){
        console.log('[Persons.js] inside componentWillMount')
      }
      componentDidMount(){
        console.log('[Persons.js] inside componentDidMount')
      }
      componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] inside componentWillRecieveProps', nextProps)
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState)
        return nextProps.personArray !== this.props.personArray
      }
      componentWillUpdate(nextProps,nextState){
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState)
      }
      componentDidUpdate(){
        console.log('[UPDATE Persons.js] inside componentDidUpdate')
      }
      
    render(){
        console.log('[Persons.js] inside render')
        return( this.props.personArray.map((person,index) => {
                        return <Person 
                                    name = {person.name}
                                    age = {person.age}
                                    key = {person.id}
                                    click = {()=> this.props.delete(index)}
                                    changed = {(event) => this.props.change(event, person.id)}
                                    >Hiii this is {person.name}'s child
                                </Person>
                })
        )
    }
}

export default Persons