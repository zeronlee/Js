import React from 'react';
class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            test:0
        }
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log(newProps,newState)
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps,nextState)
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps,prevState)
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    _handleClick(){
        this.setState({
            test:this.state.test + 1
        })
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
                <label onClick={this._handleClick.bind(this)}>点我</label>
                <span>{this.state.test}</span>
            </div>
        );
    }
}
export default Content;
