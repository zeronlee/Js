import React,{Component} from 'react'
export default class Clock extends Component{

    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }

    //渲染前render执行
    componentWillMount(){
        //this.timer///////////////////////////
        this.timer =setInterval(()=>{
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentDidMount(){
        this.clock.focus();
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>
                <h1>
                    <p ref={(clock)=>this.clock=clock}>now time:</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
