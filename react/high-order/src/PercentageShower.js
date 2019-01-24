import React,{Component} from 'react';
export default class PercentageShower extends Component{
    defaultProps = {
        number:''
    };
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
            </div>
        )
    }
}
