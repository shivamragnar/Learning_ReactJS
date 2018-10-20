import React from 'react'
import styles from './Cockpit.css'

const cockpit = (props) => {
    let assignClasses = []
    let btnClass =''
    if(props.showPersons){
        btnClass =  styles.red
    }

    if(props.personArray.length <= 2){
        assignClasses.push(styles.red)
    }
    if(props.personArray.length <= 1){
    assignClasses.push(styles.green)
    }
    return(
            <div className = {styles.Cockpit}>
                <h2 className={assignClasses.join(' ')}> Hii this is shivam's first React App :0</h2>
                <button 
                onClick={props.switchNameHandler.bind(this, 'SharmaG Changed')}> 
                Switch Names
                </button>

                <button 
                className = {btnClass}
                onClick={props.toggle}>
                Toggle Names List
                </button>
            </div>
    )
        
}

export default cockpit