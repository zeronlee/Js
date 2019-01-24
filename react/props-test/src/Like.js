import React, { Component } from 'react';

export default class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor () {
        super();
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        // this.props.likedText = '取消';
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }
}
