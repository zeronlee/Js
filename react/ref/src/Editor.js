import React,{Component} from 'react'
class Editor extends Component{

    constructor(){
        super()
        this.state = {
            //防止xss
            content:"<h1>welcome to zeronlee home</h1>",
            color:'blue'
        }
    }
    handleColor(event){
        this.setState({
            color:'red'
        })
    }
    render(){
        /*return(
            <div className='editor-wrapper'>
                {this.state.content}
            </div>
        )*/
        //fontSize
        // return (
        //     <div onClick={this.handleColor.bind(this)} style={{fontSize: '12px', color: 'red'}}
        //         className='editor-wrapper'
        //         dangerouslySetInnerHTML={{__html: this.state.content}} />
        // )
        return (
            <div onClick={this.handleColor.bind(this)} style={{color:this.state.color}}
                 className='editor-wrapper'
                 dangerouslySetInnerHTML={{__html: this.state.content}} />
        )
    }
}
export default Editor;
