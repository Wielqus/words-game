import React from 'react';

import './Check.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const check =(props)=>{
    if(props.correct){
        return <FontAwesomeIcon icon="check" />
    }
    else{
        return <FontAwesomeIcon icon="times" />
    }

}

export default check;