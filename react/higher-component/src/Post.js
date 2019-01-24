import React,{Component} from 'react';
import LoadAndRefresh from './LoadAndRefresh';
class Post extends Component {
    render () {
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={() => this.props.refresh()}>刷新</button>
            </div>
        )
    }
}

Post = LoadAndRefresh('/post')(Post);
export default Post;
