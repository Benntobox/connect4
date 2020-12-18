import React from 'react';
import Square from './Square.jsx'

const Row = (props) => (
  <div id={props.y} className="row" style={{display : 'inline-block'}}>
    {[...Array(7).keys()].map(y => (<Square y={y}/>))}
  </div>
)

export default Row;