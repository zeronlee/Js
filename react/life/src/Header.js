import React,{Component} from 'react'
class Header extends Component {
    constructor () {
        super()
        console.log('construct')
    }

    componentWillMount () {
        console.log('component will mount')
    }

    componentDidMount () {
        console.log('component did mount')
    }
    //删除的时候显示
    componentWillUnmount() {
        console.log('component will unmount')
    }
    render () {
        console.log('render')
        return (
            <div>
                <h1 className='title'>React 小书</h1>
            </div>
        )
    }
}
export default Header;
