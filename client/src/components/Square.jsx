import React from 'react';
import empty from '../../dist/images/empty.jpg';
import p1 from '../../dist/images/p1.jpg';
import p2 from '../../dist/images/p2.jpg';

const Square = (props) => (
  <img id={props.x + props.y} className="square" src={props.val === 0 ? empty : props.val === 1 ? p1 : p2}></img>
)

export default Square;