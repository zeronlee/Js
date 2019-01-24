import React,{Component} from 'react'
import Header from './Header'
import Clock from './Clock'
export default class Life extends Component{
    constructor() {
        super()
        this.state = {
            isShowHeader: true,
            isShowClock:true
        }
    }

    handleShowOrHide () {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }
    handleClockShowOrHide () {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }
    render () {
        return (
            <div>
                {this.state.isShowClock ? <Clock/> : null}
                <button onClick={this.handleClockShowOrHide.bind(this)}>
                    显示或者隐藏时钟
                </button>
                {this.state.isShowHeader ? <Header /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏标题
                </button>
            </div>
        )
    }
}
