import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';

//父类必须声名childContextTypes
//子类必须声明contextTypes
//才可以用到context
class Index extends Component {
    //验证getChildContext返回值类型
    static childContextTypes = {
        themeColor: PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            themeColor:'red'
        }
    }
    componentWillMount(){
        this.setState({
            themeColor:'green'
        })
    }
    //状态提升，全局变量，更改后子类全部更新
    getChildContext(){
        return {themeColor: this.state.themeColor}
    }

    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
