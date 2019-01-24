import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import NewComponent from './OldComponent';
import TextareaWithContent from './TextareaWithContent';
///////////////作业题///////////////////
import Post from './Post';
class Index extends Component {
    render () {
        return (
            <div>
                用户名：<NewComponent data={1} />
                内容：<TextareaWithContent/>
                Post测试：<Post/>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
