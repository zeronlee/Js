import React,{Component} from 'react'

//高阶组件是个函数，只是用来在组件之间传递数据
export default (WrappedComponent,name)=>{
    class HigherComponent extends Component{
        constructor(){
            super();
            this.state = {
                data:2
            }
            localStorage.setItem(name,2);
        }
        componentWillMount(){
            let data = localStorage.getItem(name);
            this.setState({
                data
            });
        }
        render(){
            return <WrappedComponent data={this.state.data} />
        }
    }
    return HigherComponent;
}
