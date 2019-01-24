import React,{Component} from 'react';
import PropsTypes from 'prop-types';

class Comment extends Component{
    static propTypes = {
        //comment定义传入的props字段
        comment:PropsTypes.object.isRequired,
        // username:PropsTypes.string,
        // content:PropsTypes.number
    }
    render(){
        // const comment = this.props.comment;
        //notice: {}
        const {comment} = this.props;
        // console.log(comment)
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}
export default Comment;
