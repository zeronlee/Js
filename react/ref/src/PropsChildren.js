import React,{Component} from 'react'

export default class PropsChildren extends Component{

    render(){
        return(
            <div className='card'>
                <div className='card-content'>
                    {console.log(this.props.children)}
                    {this.props.children}
                </div>

            </div>
        )
    }
}
