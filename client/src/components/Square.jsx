import React from 'react';

const Square = (props) => (
  <div id={props.x + ',' + props.y} className="square">{props.val}</div>
)

export default Square;