import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
class Header extends Component {
    //验证类型
    static propTypes ={
        themeColor:PropTypes.string
    }
    render () {
        return (
            <h1 style={{color:this.props.themeColor}}>React.js 小书</h1>
        )
    }
}
const mapStateToProps = (state)=>{
    // console.log(state)
    return {
        themeColor:state.themeColor
    }
}
//高阶组件
Header = connect(mapStateToProps)(Header);
export default Header;
