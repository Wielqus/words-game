import React from 'react';

import './Finish.css';


const finish =(props)=>{
    return(
    <div>
        <h1>{props.win} wins</h1>
        <button onClick={props.startGame} className="modal-button">Play again</button>
    </div>
    )
}

export default finish;