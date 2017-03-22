import React, {Component} from 'react';
import {Input, Button} from 'semantic-ui-react';
import Logo from '../components/logo.scss';

export default class Home extends Component {
constructor() {
  super();
    this.state={
      term:"",
    }
  }

  handleChange(e){
    this.setState({term: e.target.value
    });
    console.log(this.state.term);
  }
 go(){
   FlowRouter.go('/article')
 }
  render(){
    return (
      <div>

          <div className="bb" onClick={this.go.bind(this)}></div>

          <Input fluid icon placeholder="Enter you e-mail for caontact" onChange={this.handleChange.bind(this)} name="term" value={this.state.value}  />
          <p>Or click to the icon</p>

      </div>
    );
  }
}
