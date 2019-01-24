import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component{

    constructor(){
        super();
        //默认state值
        //第一次进来取这里的
        this.state = {
            comments: []
        }
    }
    //取到props的值传给list组件
    handleSubmitComment(props){
        if (!props) return
        if (!props.username) return alert('请输入用户名')
        if (!props.content) return alert('请输入评论内容')
        //转换数据结构
        this.state.comments.push(props)
        this.setState({
            comments:this.state.comments
        });
        //点击以后取这里的
        console.log(this.state)
    }
    render(){
        //class 对象后面的每一个属性都是一个props
        //通过props把上一个组件的参数传过来
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />

                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}
