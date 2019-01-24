import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css'

class Dog extends Component{
    constructor(){
        super();
        //默认状态
        this.state ={
                isRunning:false,
                isBarking:false
            }
    }


    bark() {
        console.log('barking.')
        //事件触发更新状态
        this.setState({
            isBarking: true
        })
        setTimeout( () => {
            this.setState({isBarking: false})
            console.log('stropBarking.')
        }, 6000)
    }
    run(){
        console.log('running.')
        this.setState({
            isRunning : true
        })
        setTimeout(()=>{
            this.setState({isRunning:false})
            console.log('stropRunning.')
        },8000)
    }
    handleDog(){
        this.bark()
        this.run()
    }
    render () {
        return (<div onClick={this.handleDog.bind(this)}>DOG</div>)
    }
}
// ========================================
const arr = ['Adams', 'Bill', 'Charlie'];

const Arr = () => {
    return arr.map((item, index) => {
        return <p key={index}>{item}</p>
    })
}
console.log(Arr());
ReactDOM.render(

    <Arr/>,
    document.getElementById('root')
);
