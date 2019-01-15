import React from 'react';

import './Start.css';


const Start =(props)=>{
    return(
    <div>
    <h1>Welcome in words game</h1>
    <div className="instruction">
        <h2>How to play</h2>
        <article className="instruction-article">
            <p>
                Make words by selecting letters in letter box. Selected letters will be showed in an input with counted points. You can clear input
                by clicking "clear" button.Click "submit" to check your word.
            </p>
            <img alt="letters box" className="instruction-image" src="images/lettersBox.png" />
            <p>
                You can see list of your words on "Your words" field.
            </p>
            <img alt="user words" className="instruction-image" src="images/userWords.png" />
            <p>
                After you turn, computer will create his own word. You can see words created by computer on "Computer words" field.
            </p>
            <img alt="computer words " className="instruction-image" src="images/computerWords.png" />
            <p>
                    The winner is player who gets 100 points. Good Luck.
            </p>
        </article>
    </div>
    <button onClick={props.startGame} className="modal-button">Start Game</button>
    </div>
    )
}

export default Start;