import React from 'react'

class Car extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                
                <h2>Car details</h2>
                <h3>Make :{this.props.make}</h3>
                <h3>Model :{this.props.model}</h3>
                <h3>Color :{this.props.color}</h3>
            </div>
        )
    }
}
export default Car