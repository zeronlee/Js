import React,{Component} from 'react'

class Post extends Component{

    constructor(){
        super();
        this.state = {
            height: 0
        }
    }
    //must static
    static defaultProps = {
        content:'zeronlee\'s test.'
    }

    componentDidMount(){
        const height = this.p.clientHeight;
        this.setState({
            height
        })
    }
    render(){
        return(
            <p ref={(p)=>this.p = p} onClick={()=>console.log(this.state.height)}>{this.props.content}</p>
        )
    }
}
export default Post;
