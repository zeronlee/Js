import React,{Component} from 'react';

import PercentageInput from './Input';
import PercentageShower from './PercentageShower';

export default class PercentageApp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            number : ''
        }

    }
    handleIputNumber(props){
        console.log(props)
        this.setState(
            {
                number:props*100+'%'
            }
        )
    }
    render(){
        return(
            <div>
                <PercentageInput onBlur={this.handleIputNumber.bind(this)} />
                <PercentageShower number={this.state.number}/>
            </div>
        );
    }
}
