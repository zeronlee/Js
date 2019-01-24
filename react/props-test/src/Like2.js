import React, { Component } from 'react';

export default class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        const wording = this.props.wordings || {
            likedText: '取消',
            unlikedText: '点赞'
        };
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? wording.likedText : wording.unlikedText} 👍
            </button>
        )
    }
}
