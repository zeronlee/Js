import React,{Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component{
    //默认props设置方式
    static defaultProps = {
        comments:[],

    };
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            ////////??????????/////////////////调用删除方法onDeleteXxx();
            this.props.onDeleteComment(index)
        }
    }
    render(){
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: 'Good'}
        // ];
        //()=>code...
        return(
            <div>
                {
                    this.props.comments.map((comment,i)=>
                    //{
                        // return (
                        //     <div key={i}>
                        //         {comment.username} : {comment.content}
                        //     </div>
                        // );
                        <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />
                    //}
                    )
                }
            </div>
        );
    }
}