import React from "react";
import Node from "./node";
import './algo-visualization.css';

export default class Visualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col: this.props.col,
            row: this.props.row,
            isStart: this.props.isStart,
            isTarget: this.props.isTarget,
            grid: this.handleSizeChange(this.props.row,this.props.col, this.props.isStart, this.props.isTarget),
            mouseDown: false
        };
        this.handleColChange = this.handleColChange.bind(this);
        this.handleRowChange = this.handleRowChange.bind(this);
        this.handleMouseDownandUp = this.handleMouseDownandUp.bind(this);

    }

    handleColChange(e){
        let newTarget = [this.state.row-5, parseInt((e.target.value-1) / 2)];
        let newStart = [4, parseInt((e.target.value-1) / 2) ];
        let newGrid = this.handleSizeChange(this.state.row, e.target.value, newStart, newTarget);
        this.setState({
            col: e.target.value,
            grid: newGrid
        });
    }

    handleRowChange(e){
        let newTarget = [e.target.value-5, parseInt((this.state.col-1) / 2)];
        let newStart = [4, parseInt((this.state.col-1) / 2)];
        let newGrid = this.handleSizeChange(e.target.value, this.state.col, newStart, newTarget);
        this.setState({
            row: e.target.value,
            grid: newGrid,
            isTarget: newTarget
        })
    }

    handleSizeChange(row, col, Start, Target){
        let newGrid = [];
        for(let r = 0; r < row; r++) {
            let currentRow = []
            for(let c = 0; c< col; c++){
                currentRow.push('.')
            }
            newGrid.push(currentRow)
        };
        
        newGrid[Start[0]][Start[1]]  = 's';
        newGrid[Target[0]][Target[1]]  = 't';
        return newGrid;
    }

    handleMouseDownandUp(e){
        if(e.type === 'mousedown'){
            let newgrid = this.togglewall(this.state.grid, e.target.id);
            console.log(document.getElementById(e.target.id).classList.value);
            this.setState({
                mouseDown: true,
                grid:newgrid
            })

        }else if(e.type ==='mouseup'){
            this.setState({
                mouseDown: false
            })
        }else if(this.state.mouseDown){
            let newgrid = this.togglewall(this.state.grid, e.target.id);
            this.setState({
                grid:newgrid
            })
        }

    }

    togglewall(grid, target){
        let loc = target.split("-").map(v => parseInt(v));
        let newgrid = grid.slice();
        newgrid[loc[0]][loc[1]] === '.'? newgrid[loc[0]][loc[1]] = 'w': newgrid[loc[0]][loc[1]]==='w'? newgrid[loc[0]][loc[1]] ='.': console.log("can't change start or target node");
        return newgrid;
    }


    render(){
        return (
            <div className='wraper'>
                <div className="navbar">
                    this is nav bar

                    <div id='row-slider'>
                        <p className='slider-label'>ROW</p>
                        <input id="slider" type='range' min = '10' max = '80' onChange={this.handleRowChange} value={this.state.row} />
                    </div>

                    <div id='col-slider'>
                        <p className='slider-label'>COLUMN</p>
                        <input id="slider" type='range' min = '5' max = '40' onChange={this.handleColChange} value={this.state.col} />
                    
                    </div>
                </div>
                <div>
                    Below is grid, grid size will be {this.state.row} rows x {this.state.col} columns
                    <div className="grid" >
                        {this.state.grid.map((row, rowidx)=>{
                            return(
                                <div key={rowidx}>
                                    {row.map((node,nodeidx)=>{
                                        return(
                                            <Node 
                                                key={nodeidx}
                                                col={nodeidx}
                                                row={rowidx}
                                                msg={node}
                                                mouseHandler={this.handleMouseDownandUp}
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