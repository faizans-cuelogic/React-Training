import React from 'react';
import './Person.css';

const Person= (props) => {
    return (
      <div className="Person">
        <p onClick={props.click}> Im a Person Component {props.name} {props.age} years old {props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
    )
}

export default Person;
