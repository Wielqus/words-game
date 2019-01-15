import React from 'react';

import './Letter.css';

const letter =(props)=>{  
        return  <button disabled={props.disabled||props.selected}   onClick={props.click} className={"letter "+ (props.selected ? 'selected' : '')} >{props.name}<span className="value">{props.value}</span></button>
}

export default letter;