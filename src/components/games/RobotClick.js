import React from "react"

class RobotClick extends React.Component {
    constructor() {
        super()
        this.state = {
            click: 0
        }
        this.countClick = this.countClick.bind(this)
    }
    
    countClick() {
        this.setState(prevState =>{ 
           return  { click: prevState.click + 1}
         })
    }
    
    render() {
        return (

            <div className='bg-light-yellow dib br3 pa1 ma1  shadow-5'>
            
                <h1>{this.state.click}</h1> 
                <img src={`https://robohash.org/${ 1 }?30x30`} alt="robot" />                     
           
            <div  className="robot-click-button">            
                <button className="robot-click-button" onClick={this.countClick}>Click</button>
            </div>
        </div>
        )
    }
}

export default RobotClick