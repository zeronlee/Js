import React,{Component} from 'react';

export default class Input extends Component {
    constructor(){
        super();
        this.state = {
            number: ''
        }
    }
    handleNumberChange(event){
        this.setState({
            number:event.target.value
        })
    }
    handleBlur(event){
        if (this.props.onBlur){
            const {number} = this.state;
            ////////////////////////////////////////////
            this.props.onBlur(number);
            // console.log(event)
        }
        // console.log(event)
    }
    render(){
        return (
            <div>
                <input value={this.state.number} onBlur={this.handleBlur.bind(this)} onChange={this.handleNumberChange.bind(this)} type='number' />
            </div>
        );
    }
}
