import React,{Component} from 'react'

class Card extends Component{
    render () {
        return (
            <div className='card'>
                <div className='card-content'>
                    {console.log(this.props.children)}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;
