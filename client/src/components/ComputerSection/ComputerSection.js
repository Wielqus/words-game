import React, { Component } from 'react';
import AnsversList from '../AnsversList/AnsversList';
import Letters from '../../data/letters/letters';
import './ComputerSection.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ComputerSection extends Component {

  state={
    computerAnsvers:[],
    Points:0,

  }
  createAnsverHandler=()=>{
        axios.get('/get-word')
          .then(res => {
            let points=0;
            [...res.data.word[0]].forEach(letter => {
                points+=Letters.find(element=>{
                    return element.name===letter.toUpperCase();
                }).value;
            })
            let word = {name:res.data.word[0],points:points,correct:true}
            this.setState(prevState => ({
                computerAnsvers:[word,...this.state.computerAnsvers],
                Points:prevState.Points+=word.points
            }))
            this.props.changeTurn(this.state.Points);
            })
  }

  resetHandler=()=>{
    this.setState({computerAnsvers:[],Points:0})
  }

  render() {
    return (
      <section className="computerSection">
            <header  className="sideHeader">Computer Side <a href="https://github.com/Wielqus/words-game" className="gitHubIcon" target="blank" alt="See code on my github" ><img alt="See code on my github"  src="images/github-icon.svg" /></a></header>
            <header className="sideMiniHeader">Points:{this.state.Points}</header>
              <main className="userSide">
              <section className="userAnsversList">
              <header className="sideMiniHeader">Computer words:</header>
              <AnsversList items={this.state.computerAnsvers}/>
              </section>
            </main>
            </section>


    );
  }
}

export default ComputerSection;
