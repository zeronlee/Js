import React,{Component} from 'react';

class BlackBorderContainer extends Component{

    render(){
        return (
            <div>

                {this.props.children.map((el,i)=>{
                    {console.log(el)}
                    return (
                        <div className='border' key={i}>{el}</div>
                    )
                })}
            </div>
        )
    }
}

export default BlackBorderContainer;
