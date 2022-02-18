import React from "react";
import Node from "./node";
import './algo-visualization.css';

export default class Visualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: this.handleSizeChange(40,20),
            col: 20,
            row: 40
        };
        this.handleColChange = this.handleColChange.bind(this);
        this.handleRowChange = this.handleRowChange.bind(this);
    }

    handleColChange(e){
        let newGrid = this.handleSizeChange(this.state.row, e.target.value);
        this.setState({
            col: e.target.value,
            grid: newGrid
        });
    }

    handleRowChange(e){
        let newGrid = this.handleSizeChange(e.target.value, this.state.col);
        this.setState({
            row: e.target.value,
            grid: newGrid
        })
        this.handleSizeChange();
    }

    handleSizeChange(row, col){
        let newGrid = [];
        for(let r = 0; r < row; r++) {
            let currentRow = []
            for(let c = 0; c< col; c++){
                currentRow.push(
                    {
                        col: c,
                        row: r
                    }
                )
            }
            newGrid.push(currentRow)
        };
        return newGrid;
    }

    render(){
        return (
            <div className='wraper'>
                <div className="navbar">
                    this is nav bar

                    <div id='row-slider'>
                        <p className='slider-label'>ROW</p>
                        <input id="slider" type='range' min = '5' max = '80' onChange={this.handleRowChange} value={this.state.row} />
                    </div>

                    <div id='col-slider'>
                        <p className='slider-label'>COLUMN</p>
                        <input id="slider" type='range' min = '5' max = '40' onChange={this.handleColChange} value={this.state.col} />
                    
                    </div>
                </div>
                <div>
                    Below is grid, grid size will be {this.state.row} rows x {this.state.col} columns
                    <div className="grid">
                        {this.state.grid.map((row, rowidx)=>{
                            return(
                                <div key={rowidx}>
                                    {row.map((node,nodeidx)=>{
                                        console.log(node);
                                        return(
                                            <Node 
                                                key={nodeidx}
                                                col={node.col}
                                                row={node.row}
                                            />

                                        )
                                    })}

                                </div>  
                            );
                        })}
                    </div>
                </div>


            </div>


        )
    }


}