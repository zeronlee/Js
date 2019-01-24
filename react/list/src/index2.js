import React from 'react';
import ReactDOM from 'react-dom';

import react,{Component} from 'react';
import * as serviceWorker from './serviceWorker';
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

class Index extends Component {
    render () {
        return(
            <div>
                {
                    users.map((user)=>{
                       return (
                           <div>
                               <div>{user.username}</div>
                               <div>{user.age}</div>
                               <div>{user.gender}</div>
                               <hr/>
                           </div>
                       );
                    })
                }
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
