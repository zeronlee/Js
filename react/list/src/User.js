import React,{Component} from 'react';

export default class User extends Component {
    render () {
        const { user } = this.props;
        const { key } = this.props;
        console.log(key)
        console.log(user)
        console.log(this.props.key)
        return (
            <div>
                <div key={user.key}>{user.username}</div>
                <div>{user.age}</div>
                <hr/>
            </div>
        )
    }
}

