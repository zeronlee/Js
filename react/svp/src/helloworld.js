import React, { Component } from 'react';
export default class HelloWorld extends Component {
    constructor() {
        super()
    }

    sayHi () {
        alert('Hello World')
    }

    render () {
        return (
            <div onClick={this.sayHi.bind(this)}>Hello World</div>
        )
    }
}
