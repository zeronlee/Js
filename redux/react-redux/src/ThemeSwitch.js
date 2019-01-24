import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class ThemeSwitch extends Component {
    // static contextTypes = {
    //     store:PropTypes.object,
    //     onSwitchColor:PropTypes.func
    // }
    // componentWillMount () {
    //     this._updateThemeColor()
    // }
    // dispatch action 去改变颜色
    // handleSwitchColor (color) {
    //     const { store } = this.context
    //     store.dispatch({
    //         type: 'CHANGE_COLOR',
    //         themeColor: color
    //     });
    //     //更新了值，但没有渲染
    //     // console.log(store.getState())
    // }
    static propTypes = {
        store:PropTypes.object,
        onSwitchColor:PropTypes.func
    }
    //第一版是store.dispatch更新state
    //接下来映射dispatch to props
    handleSwitchColor (color) {
        if (this.props.onSwitchColor){
            this.props.onSwitchColor(color);
        }
    }
    render () {
        return (
            <div>
                <button onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
                <button onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSwitchColor:(color)=>{
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}
ThemeSwitch = connect(null,mapDispatchToProps)(ThemeSwitch);
export default ThemeSwitch;
