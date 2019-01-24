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
    componentWillMount(){
        this._loadComments();
    }
    _loadComments(){
        let comments = localStorage.getItem('comments');
        if (comments){
            comments = JSON.parse(comments);
            this.setState({comments});
        }
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    //取到props的值传给list组件
    handleSubmitComment(props){
        if (!props) return;
        if (!props.username) return alert('请输入用户名');
        if (!props.content) return alert('请输入评论内容')
        const comments = this.state.comments;
        comments.push(props);
        this.setState({comments});
        //更新localStorage
        this._saveComments(comments);
        //存储用户名
        localStorage.setItem('username',props.username);

    }
    handleDeleteComment (index) {
        console.log(index);
        const comments = this.state.comments;
        //slice
        comments.splice(index, 1);
        //刷新页面
        this.setState({ comments });
        //存local
        this._saveComments(comments);
    }
    render(){
        //class 对象后面的每一个属性都是一个props
        //通过props把上一个组件的参数传过来
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />

                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        );
    }
}
