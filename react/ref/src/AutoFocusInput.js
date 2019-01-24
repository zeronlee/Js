import React,{Component} from 'react'

class AutoFocusInput extends Component{
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }
    //after render
    componentDidMount (){
        this.input.focus()
        console.log('after render.')
    }
    render(){
        return(
            <input ref={(input) => this.input = input} />
        )
    }

}
export default AutoFocusInput;
