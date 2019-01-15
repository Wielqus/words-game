import React from 'react';

import './AnsversList.css';
import Check from '../Check/Check';

const AnsversList =(props)=>{
    return(
    <ul className="items">
    {props.items.map((item)=>{
        return <li className="item"><p className="itemContent">{item.name.toLowerCase()}<span className="itemPoints">{item.points} points</span><span className="itemRightContent"><Check correct={item.correct}/></span></p></li>;
    })}

    </ul>
    )
}

export default AnsversList;