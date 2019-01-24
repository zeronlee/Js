import React,{Component} from 'react'
import HigherComponent from './HigherComponent';
class TextareaWithContent extends Component {
    render () {
        return <textarea value={this.props.data} />
    }
}

TextareaWithContent = HigherComponent(TextareaWithContent, 'content')
export default TextareaWithContent
