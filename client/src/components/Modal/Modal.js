import React from 'react';

import './Modal.css';


const Modal =(props)=>{

    return(
        <div className={"modal "+(props.display ? '' : 'hidden')}>
            {props.content}
        </div>
    )
}

export default Modal;