import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Life from './Life';
import $ from 'jquery';
import ScrollingList from "./ScrollingList";
//componentWillReceiveProps
import Button from './Button';

var createReactClass = require('create-react-class');
//getDefaultProps
/*var Hello = createReactClass({
    getDefaultProps: function(){
        return {
            name: 'pomy',
            git: 'dwqs'
        }
    },

    render: function(){
        return (
            <div>Hello,{this.props.name},git username is {this.props.data.title}</div>
        )
    }
});*/
var data = {title: 'Hello'};
var LikeButton = createReactClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    componentDidMount: function(){
        //覆盖了render的方法
        // $('body').html('zzzzzzzzzzzzzz')
    },
    componentWillReceiveProps: function(nextProps){
        console.log(nextProps)
        if(nextProps.checked !== undefined){
            this.setState({
                checked: nextProps.checked
            })
        }
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        // this.setState({
        //     liked:false
        // });
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

ReactDOM.render(<Button />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
