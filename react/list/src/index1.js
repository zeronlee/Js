import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import react,{Component} from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

class Index extends Component {
    render () {
        const usersElements = [];
        for (let user of users){
            usersElements.push(
                <div>
                    <div>{user.username}</div>
                    <div>{user.age}</div>
                    <div>{user.gender}</div>
                    <hr/>
                </div>

            );
        }
        return (
            usersElements
            // {
                /*<div>
                {[
                    <span>React.js </span>,
                    <span>is </span>,
                    <span>good</span>
                ]}
            </div>*/
            // }
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
