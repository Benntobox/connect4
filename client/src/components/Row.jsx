import React from 'react';
import Square from './Square.jsx'

const Row = (props) => (
  <div id={props.y} className="row" style={{display : 'inline-block'}}>
    {props.row.map((val, x) => (<Square val={val} x={x} y={props.y}/>))}
  </div>
)

export default Row;