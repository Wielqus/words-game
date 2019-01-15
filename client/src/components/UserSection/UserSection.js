import React, { Component } from 'react';
import Letter from '../Letter/Letter';
import AnsverField from '../AnsverField/AnsverField';
import AnsversList from '../AnsversList/AnsversList';
import Letters from '../../data/letters/letters';
import './UserSection.css';


class UserSection extends Component {
  componentDidMount() {
    for(let i=0;i<16;i++){
      this.setState(prevState=>({
        letters:[...prevState.letters,Letters[Math.floor(Math.random()*Letters.length)]],
      }))
    }
  }
  state={
    letters:[

    ],
    selectedLetters:[

    ],
    userAnsvers:[],
    ansver:'',
    ansverPoints:0,
    Points:0,

  }

  selectLetterHandler=index=>{
      this.setState(prevState => ({
      selectedLetters: [...prevState.selectedLetters, index],ansver:this.state.ansver+this.state.letters[index].name,ansverPoints:this.state.ansverPoints+this.state.letters[index].value}))
  }

  replaceLettersHandler=()=>{
    this.state.selectedLetters.map(element=>{
      let letters = this.state.letters;
      letters[element]=Letters[Math.floor(Math.random()*Letters.length)];
      this.setState({
        letters:letters,
      })
      return true;
    })
  }

  clearLettersHandler=()=>{
    this.setState({selectedLetters:[],ansver:'',ansverPoints:0})
  }

  getAnsverHandler=(ansver)=>{
    this.setState(prevState=>({
      userAnsvers:[ansver,...prevState.userAnsvers]
    }));
    if(ansver.correct){
    this.setState(prevState=>({
      Points:prevState.Points+ansver.points,
    }));

}
    this.replaceLettersHandler();
    this.clearLettersHandler();
    this.props.changeTurn(this.state.Points);
  }

  resetHandler=()=>{
    this.setState({letters:[],selectedLetters:[ ],userAnsvers:[],ansver:'',ansverPoints:0,Points:0})
    for(let i=0;i<16;i++){
      this.setState(prevState=>({
        letters:[...prevState.letters,Letters[Math.floor(Math.random()*Letters.length)]],
      }))
    }
  }

  render() {
    return (
              <section>
                <header className="sideHeader">User Side</header>
                <header className="sideMiniHeader">Points:{this.state.Points}</header>
              <main className="userSide">

              <section className="userAnsversList">
              <header className="sideMiniHeader">Your words:</header>
              <AnsversList items={this.state.userAnsvers}/>
              </section>
              <section className="userInteface">
              <header className="sideMiniHeader">Create a word</header>
              <AnsverField disabled={!this.props.turn} sendAnsver={this.getAnsverHandler} points={this.state.ansverPoints} spinner={this.state.spinner} submit={this.checkWordHandler} ansver={this.state.ansver} clear={this.clearLettersHandler} />
            <div className="letterBox">{this.state.letters.map((letter,index)=>{
              return <Letter disabled={!this.props.turn} selected={this.state.selectedLetters.includes(index)} click={this.selectLetterHandler.bind(this,index)} name={letter.name} value={letter.value}></Letter>
            })}</div>
            </section>
            </main>
            </section>


    );
  }
}

export default UserSection;
