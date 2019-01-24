import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import {connect} from "./react-redux";

class Content extends Component {
    //首先取到store的值
    /*static contextTypes = {
        store:PropTypes.object
    }
    componentWillMount(){
        this._updateThemeColor()
    }
    _updateThemeColor(){
        //取到store全局变量context的值
        const {store} = this.context;//store 包含state dispatch subscribe操作
        const state = store.getState();
        this.setState({
            themeColor:state.themeColor
        });
        //注册事件
        store.subscribe(()=>{return this._updateThemeColor()});
    }*/
    static propTypes = {
        themeColor:PropTypes.string
    }
    render () {
        return (
            <div>
                <p style={{color:this.props.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        themeColor:state.themeColor
    }
}
Content = connect(mapStateToProps)(Content);
export default Content
