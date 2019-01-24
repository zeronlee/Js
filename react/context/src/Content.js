import React,{Component} from 'react';
import PropTypes from "prop-types";
class Content extends Component {
    static contextTypes = {
        themeColor:PropTypes.string
    }
    componentWillMount(){

    }
    render () {
        return (
            <div>
                <h2 style={{color:this.context.themeColor}}>React.js 小书内容</h2>
            </div>
        )
    }
}
export default Content;
