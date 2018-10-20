import React, {Component} from 'react'
import styles from './Person.css'

class Person extends Component{

    constructor (props){
        super(props)
        console.log('[Person.js] inside Constructor', props)
      }
  
      componentWillMount(){
        console.log('[Person.js] inside componentWillMount')
      }
      componentDidMount(){
        console.log('[Person.js] inside componentDidMount')
      }

    render(){
        console.log('[Person.js] inside render')
        return (
                <div className = {styles.Person} >
                    <h3 onClick={this.props.click}>%%% hii this is {this.props.name} and i 
                      am just {this.props.age} years old %%%
                    </h3>
                    <p>{this.props.children}</p> 
                    <input type='text' onChange={this.props.changed} />
                </div>
        )
    }
}

export default Person