/*****************************************Initial deletions from App.js*************************** */        
        
        
             
              //   <Person 
              //   name={this.state.person[0].name} 
              //   age={this.state.person[0].age}/>
              // <Person 
              //   name={this.state.person[1].name} 
              //   age={this.state.person[1].age}
              //   // the below is the simple version of passing the method as reference
              // //**** click={this.switchNameHandler}> 
              // // now if we have to pass any arguments to the function then this way
              // click={this.switchNameHandler.bind(this, 'sharmaG')}> 
              //   HI this is a children to pass 
              // </Person>
              // <Person 
              //   name={this.state.person[2].name} 
              //   age={this.state.person[2].age} change={this.changeNameHandler} />
             




            
  // { {
  //          // using ternary operator
  //         this.state.showPersons ? 
  //             <div>
  //                     <Person 
  //                       name={this.state.person[0].name} 
  //                       age={this.state.person[0].age}/>
  //                     <Person 
  //                       name={this.state.person[1].name} 
  //                       age={this.state.person[1].age}
  //                       // the below is the simple version of passing the method as reference
  //                     //**** click={this.switchNameHandler}> 
  //                     // now if we have to pass any arguments to the function then this way
  //                     click={this.switchNameHandler.bind(this, 'sharmaG')}> 
  //                       HI this is a children to pass 
  //                     </Person>
  //                     <Person 
  //                       name={this.state.person[2].name} 
  //                       age={this.state.person[2].age} change={this.changeNameHandler}/>
  //               </div>  : null
  //       }  }


        // changeNameHandler = (event) => {
        //   this.setState({
        //     person : [
        //       {name: 'Shivam Sharma', age: 23},
        //       {name:'Manu Sharma', age: 14},
        //       {name: event.target.value, age: 21}
        //     ]
        //   })
        // }

/*******************************************Person.js---Radium Version ************************** */

import React from 'react'
import Radium from 'radium'
import './Person.css'
// we can pass args to the function by using 'props' as shown
const person = (props) => {
      const style =  {
            '@media (min-width : 500px)' : {
                width : '350px',
            }
      }
    // also this {} we can include the javascript we want to execute.
    return(
        <div className = 'Person' style = {style}>
            <h3 onClick={props.click}>%%% hii this is {props.name} and i am just {props.age} years old %%%</h3>
            <p>{props.children}</p> 
            <input type='text' onChange={props.change} />
        </div>
       
    )
}
export default Radium(person)


/*******************************************App.js-----Radium version ******************************/

import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {

    state = {
      person : [
        { id: '205', name:'Shivam', age: 23},
        { id: '305', name:'Manu', age: 14},
        { id: '505', name:'Prashant', age: 21}
      ],
      another : 'this is for testing',
      showPersons : false,
    }

 

  changeNameHandler = (event,id) => {
    const personIndex =  this.state.person.findIndex( personObj  => personObj.id === id)
    const personObject = {...this.state.person[personIndex]}
    personObject.name =  event.target.value
    const newPersonArray =[...this.state.person]
    newPersonArray[personIndex] = personObject
    this.setState({person : newPersonArray})
  }


  switchNameHandler = (newName) => {
    console.log('hi i was clicked')
    this.setState({
      person : [
        {name:newName, age: 23},
        {name:'Manu Sharma', age: 14},
        {name:'Prashant Sharma', age: 21}
      ]
    })
  }

  deleteNameHandler = (personIndex)=> {
    // we should not do this way as below line because it gives reference hence changes the original
   // const personArray = this.state.person
    const personArray =  [...this.state.person]
    personArray.splice(personIndex, 1)
    this.setState({person : personArray}) 
  }

  toggleNamesList = () => {
   const showPersons = this.state.showPersons
   this.setState({ showPersons :  !showPersons})
  }

  render() {
    console.log('render worked')

    const style ={
      backgroundColor : 'green',
      color : 'white',
      border : '2px solid black',
      padding : '8px',
      margin: 'auto 5px',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black',
      }
      
    }
    // we can also render the person list conditionally as shown below
      let person =null
      if (this.state.showPersons){
          
          person = (
              <div>
                    {this.state.person.map((personElement,index) => {
                      return <Person 
                      click = {() => this.deleteNameHandler(index)}
                      name={personElement.name}
                      age = {personElement.age} 
                      key = {personElement.id}
                      change = {(event)=>this.changeNameHandler(event, personElement.id)}> 
                      hi this is {personElement.name}'s child </Person>
                      })
                    }
              </div>
          )
          
          style.backgroundColor = 'red'
          style[':hover'] = {
            backgroundColor : 'salmon',
            color : 'black'
          }
      }

      let classes = []

      if(this.state.person.length <= 2){
          classes.push('red')
      }
      if(this.state.person.length <= 1){
        classes.push('green')
      }
      


    return (
     <StyleRoot> 
      <div className="App">
        <h2 className={classes.join(' ')}> Hii this is shivam's first React App :0</h2>
        <button
         
          onClick={this.switchNameHandler.bind(this, 'SharmaG Changed')}> 
          Switch Names
        </button>

        <button
          style = {style} 
          onClick={this.toggleNamesList}>
          Toggle Names List
        </button>
        
        {person}
        </div>
      </StyleRoot>   
    );
  } 
}   

export default Radium(App);
