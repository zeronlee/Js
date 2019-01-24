import React,{Component} from 'react';
import HigherComponent from './HigherComponent';

class OldComponent extends Component{
    render(){
        return <input value={this.props.data} />
    }
}
//这里可能传的是地址&
//为什么要传OldComponent在赋值给OldComponent
OldComponent = HigherComponent(OldComponent,'username');
export default OldComponent;
