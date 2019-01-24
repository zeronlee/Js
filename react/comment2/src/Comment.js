import React,{Component} from 'react';
export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            timeString:''
        }
    }
    //before render
    componentWillMount(){
        this._updateTimeString();
    }
    _updateTimeString(){
        const comment = this.props.comment;
        const duration = (+new Date() - comment.createdTime) / 1000;//ms
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration,1))}秒前`
        });
        //定时器
        this._timer = setInterval(this._updateTimeString.bind(this),2000);
    }
    //卸载定时器
    componentWillUnmount(){
        clearInterval(this._timer);
    }
    _getProcessedContent (content) {
        console.log(content);
        console.log(content.replace(/`([\S\s]+?)`/g, '<code>$1</code>'))
        return content.replace(/`([\S\s]+?)`/g, '<code>$1</code>');
    }
    handleDeleteComment(){
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }
    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }} />
                <span>
                    {this.state.timeString}
                </span>
                <span onClick={this.handleDeleteComment.bind(this)} className='comment-delete'>
                  删除
                </span>
            </div>
        );
    }

}
