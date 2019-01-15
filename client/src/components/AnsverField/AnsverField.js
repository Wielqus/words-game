import React,{Component} from 'react';

import './AnsverField.css';
import Spinner from '../Spinner/Spinner';
import axios from "axios";



class ansverfield extends Component{

    state={
        spinner:false,
    }

    checkWordHandler=()=>{
        this.setState({spinner:true});
        axios.post('/check-word',{
          ansver:this.props.ansver,
        })
        .then(res => {
            let ansver={};
            if(res.data.exist){
                ansver={name:this.props.ansver,points:this.props.points,correct:true}
            }else{
                ansver={name:this.props.ansver,points:this.props.points,correct:false}
            }
            this.setState({spinner:false});
            this.props.sendAnsver(ansver);
          })
      }


    render(){
    let spinner;
    if(this.state.spinner){
        spinner=<div className="SpinnerBox"><Spinner/></div>
    }else{
        spinner=<div className="SpinnerBox"></div>
    }
    return <div className="ansverBox">
        {spinner}
        <div className="field">
        <label>{this.props.points} points</label>
        <input disabled={this.props.disabled}  value={this.props.ansver} readOnly placeholder="Ansver" className="ansver" type="text" name="ansver" id="ansver"/>
        </div>
        <button disabled={this.props.disabled} onClick={this.checkWordHandler}  className="button" >Submit</button>
        <button disabled={this.props.disabled} onClick={this.props.clear}  className="button">Clear</button>
    </div>
    }
}

export default ansverfield;