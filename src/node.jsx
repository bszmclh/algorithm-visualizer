import React from "react";

export default class Node extends React.Component{
    // propTypes= {
    //     onMouseDown: React.PropTypes.func.Required,
    //   }
    render(){
        const {
            col,
            row,
            msg,
        } = this.props;
        let cname = msg ==='s' ? "start cell"
        : msg ==='t' ? "target cell"
        : msg === 'w' ? "wall cell"
        : "cell path"


        
        return(
            <div className={cname} id={`${row}-${col}`} onMouseDown={this.props.mouseHandler} onMouseUp={this.props.mouseHandler} onMouseEnter={this.props.mouseHandler}>
                
            </div>
        )
    }

}