import React, { Component } from 'react'
import PropTypes from 'prop-types'
//高阶组件-实现封装（完全抽象的）
export const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(){
            super();
            this.state = {
                allProps:{}
            }
        }
        componentWillMount(){
            const {store} = this.context;
            this._updateProps();
            store.subscribe(()=>this._updateProps());
        }
        _updateProps(){
            const { store } = this.context;
            console.log(this.props)
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}// 额外传入
                // props，让获取数据更加灵活方便
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {} // 防止 mapDispatchToProps 没有传入
            this.setState({
                allProps: { // 整合普通的 props 和从 state 生成的 props
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }
        render () {
            // const { store } = this.context
            // let stateProps = mapStateToProps(store.getState())
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...this.state.allProps} />
        }
    }

    return Connect;
}
export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext () {
        return {
            store: this.props.store
        }
    }

    render () {
        return (
            <div>{this.props.children}</div>
        )
    }
}