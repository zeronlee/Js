import React,{Component} from 'react'

// class style extends Component{
//
//     defaultProps = {
//         style:''
//     }
//     render(){
//         return(
//             <p style={this.props.style}>props style.</p>
//         )
//     }
// }
// export default style;
const getDefaultStyledPost = (defaultStyle) => {
    /* TODO */
    return props => <p style={{...defaultStyle, ...props.style}}/>;
}
export default getDefaultStyledPost;
