import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../src/index';
import '../src/_index';
var appElement = document.getElementById('example');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
        this.toggleDisabled = this.toggleDisabled.bind(this);
        this.state = {
            checked:true,
            disabled:true
        }
    }
    toggleChecked(e){
        this.setState({
            checked:!this.state.checked
        });
    }
    toggleDisabled(e){
        this.setState({
            disabled:!this.state.disabled
        });
    }
    onChange(e){
        console.log("checked :", e.target.checked);
        this.setState({
            checked: e.target.checked
        });
    }
  render() {
    return (
        <div className="checkbox">
            <Checkbox name= {'name'} value= {'xui'} checked = {this.state.checked} disabled = {this.state.disabled} onChange = {this.onChange} 
            text = {"xzp is a big pig !"}>12345678</Checkbox>
            <div>
                <button onClick = {this.toggleChecked}>{this.state.checked ? "不选中" : "选中"}</button>
                <button onClick = {this.toggleDisabled}>{this.state.disabled ? "启用" : "禁用"}</button>
            </div>
        </div>
    )
  }
}
ReactDOM.render(<App />, appElement);