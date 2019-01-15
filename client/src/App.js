import React, { Component } from 'react';
import UserSection from'./components/UserSection/UserSection';
import ComputerSection from './components/ComputerSection/ComputerSection';
import Modal from './components/Modal/Modal';
import Start from './components/Start/Start';
import Finish from './components/Finish/Finish';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCheck,faTimes)

class App extends Component {
  constructor(props) {
    super(props);
    this.computer = React.createRef();
    this.user = React.createRef();
  }

  state={
    userTurn:false,
    computerTurn:false,
    startModal:true,
    finishModal:false,
    win:null,
  }

  changeUserTurn=(points)=>{
    if(points<=100){
    let turn = this.state.userTurn;
    this.setState({userTurn:!turn,computerTurn:turn})
    this.computer.current.createAnsverHandler();
    }else{
      this.setState({finishModal:true,win:'You'})
    }
  }

  changeComputerTurn=(points)=>{
    if(points<=100){
    let turn = this.state.computerTurn;
    this.setState({computerTurn:!turn,userTurn:turn})
    }else{
      this.setState({finishModal:true,win:'Computer'})
    }
  }
  startGameHandler=()=>{
      this.computer.current.resetHandler();
      this.user.current.resetHandler();
      this.setState({userTurn:true,computerTurn:false,startModal:false,finishModal:false});
  }

  render() {
    return (
        <main className="app">
        <Modal display={this.state.startModal} content={<Start startGame={this.startGameHandler}/>}/>
        <Modal display={this.state.finishModal}  content={<Finish win={this.state.win} startGame={this.startGameHandler}/>}/>
            <ComputerSection ref={this.computer} changeTurn={this.changeComputerTurn} turn={this.state.computerTurn}/>

            <UserSection ref={this.user} changeTurn={this.changeUserTurn} turn={this.state.userTurn}/>
        </main>
    );
  }
}

export default App;
