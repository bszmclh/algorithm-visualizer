import React from "react";

export default class Node extends React.Component{
    render(){
        const {
            col,
            row
        } = this.props;
        return(
            <div className='node cell' id={`row-${row}-col-${col}`}>
                
            </div>
        )
    }

}