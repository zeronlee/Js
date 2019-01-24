import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LikeButton from './Like';

// //传props demo1
// class Index extends LikeButton {
//     render () {
//         return (
//             <div>
//                 <LikeButton likedText='已赞' unlikedText='赞' />
//             </div>
//         )
//     }
// }
//传props demo2
//传入对象{}或函数function
// class Index extends LikeButton {
//     render () {
//         return (
//             <div>
//                 <LikeButton wordings={{likedText:'已赞',unlikedText:'赞'}}
//                             onClick={() => console.log('Click on like button!')} />
//             </div>
//         )
//     }
// }
//设置default
// class Index extends LikeButton {
//     render () {
//         return (
//             <div>
//                 {/*这里的likedText unlikeText就是组件的props*/}
//                 <LikeButton likedText='已赞' unlikedText='赞' />
//             </div>
//         )
//     }
// }
//动态改变
class Index extends LikeButton {
    constructor () {
        super();
        this.state = {
            likedText: '已赞',
            unlikedText: '赞'
        }
    }

    handleClickOnChange () {
        this.setState({
            likedText: '取消',
            unlikedText: '点赞'
        });
    }

    render () {
        return (
            <div>
                <LikeButton
                    likedText={this.state.likedText}
                    unlikedText={this.state.unlikedText} />
                <div>
                    <button onClick={this.handleClickOnChange.bind(this)}>
                        修改 wordings
                    </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
