import React from 'react';
export default class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.check = this.check.bind(this);
        this.checkChange = this.checkChange.bind(this);
        this.state ={
            checked:this.props.checked
        };
    }
    check(e){
        this.setState({
            checked: !this.state.checked
        });
    }
    checkChange(e){
        const changeFunc = this.props.onChange;
        if(changeFunc){
            changeFunc(e.target.value);
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            checked: nextProps.checked
        });
    }
    render(){
        return (
          <label className={`xzp-checkbox-label${this.props.disabled ? " xzp-checkbox-label-disabled" : ""}`} >
                <span className={`xzp-checkbox${this.props.disabled ? " xzp-checkbox-disabled" : ""}${this.state.checked ? " xzp-checkbox-checked" : ""}`}>
                    <input className="xzp-checkbox-input"
                           name={this.props.name}
                           disabled={this.props.disabled}
                           value={this.props.value}
                           checked={this.state.checked}
                           onClick={this.check}
                           onChange={this.checkChange}
                           type="checkbox"></input>
                    <span className="xzp-checkbox-inner"></span>
                </span>
            <span className="checkbox-content">{this.props.children || this.props.text}</span>
          </label>
        );
    }
}
