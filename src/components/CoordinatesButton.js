// Code CoordinatesButton Component Here
import React from 'react' 

export default class CoordinatesButton extends React.Component {

handleClick = (e) => {
    let mouseXY = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(mouseXY)
}

    render() {
        return(
            <button onClick={this.handleClick}>Coordinate Button</button>
        )
    }
}
