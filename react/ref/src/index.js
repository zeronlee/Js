import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Layout.css';

import * as serviceWorker from './serviceWorker';
/////////////////////ref//////////////////////////////
/*import AutoFocusInput from './AutoFocusInput';
ReactDOM.render(<AutoFocusInput />, document.getElementById('root'));*/
/////////////////////ref 作业//////////////////////
/*import Post from './Post';
ReactDOM.render(<Post content='test-client-height' />, document.getElementById('root'));*/

/*import PropsChildren from './PropsChildren';
ReactDOM.render(<PropsChildren>
    <div>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
        订阅：<input />
    </div>
</PropsChildren>, document.getElementById('root'));*/
////////////一个大div/////////////////////////////
// import Card from './Card';
// ReactDOM.render(<Card>
//     <div>
//         <h2>React.js 小书</h2>
//         <div>开源、免费、专业、简单</div>
//         订阅：<input />
//     </div>
// </Card>, document.getElementById('root'));
///////////////////多个小div///////////////////////
// import Layout from './Layout';
// ReactDOM.render(<Layout>
//
//     <h2>React.js 小书</h2>
//     <div>开源、免费、专业、简单</div>
//     订阅：<input/>
// </Layout>, document.getElementById('root'));

//////////////////函数式组件////////////////
/*const getDefaultStyledPost = (defaultStyle) => {
    return (
        class Post extends React.Component {
            render() {
                const newStyle = Object.assign(defaultStyle, this.props.style)
                return (
                    <p style={newStyle}>段落</p>
                )
            }
        }
    )
}
const Post = getDefaultStyledPost({ color: 'red' });
// console.log(Post);
ReactDOM.render(<Post style={{ color: 'blue', fontSize: '13px' }} />, document.getElementById('root'));*/
/////////////////////作业题///////////////////////////
/*import BlackBorderContainer from './BlackBorderContainer';
ReactDOM.render(<BlackBorderContainer>
    <div className='name'>My Name：Lucy</div>
    <p className='age'>
        My Age：<span>12</span>
    </p>
</BlackBorderContainer>, document.getElementById('root'));*/

/////////////////////propType//////////////////////////
import Comment from './Comment';
ReactDOM.render(<Comment comment={{username:'z',content:'dddddddd'}} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
