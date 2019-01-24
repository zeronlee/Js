import React,{Component} from 'react'
const loadAndRefresh = (url) => (WrappedComponent) => {
    return class extends Component {
        componentWillMount () {
            this._loadData()
        }

        async _loadData () {
            this.setState({ content: '数据加载中...' });
            // const content = await getData(url)
            //测试取消读取服务器
            const content = 'zeronlee\'s test.'
            this.setState({ content });
        }

        render () {
            const props = {
                content: this.state.content,
                refresh: this._loadData.bind(this),
                ...this.props
            };
            return (
                <WrappedComponent {...props} />
            )
        }
    }
}
export default loadAndRefresh;
