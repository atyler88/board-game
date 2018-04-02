import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function* lineGenerator(last, seperator, max, count=0){
  const next = last + seperator;
  if(count > max){
      return
  }
  yield next;
  yield* lineGenerator(next, seperator, max, ++count)
}

const verticalLineGenerator = (totalWidth) => {
  const hexagonWidth = totalWidth / 6;
  const halfWidth = hexagonWidth / 2;
  return [0, ...lineGenerator(0, hexagonWidth / 2, 11)]
}

const horLineGenerator = (totalWidth) => {
  const hexagonWidth = totalWidth / 6;
  const rowHeight = Math.sqrt(hexagonWidth**2-(hexagonWidth**2)/4);
  const totalHeight = rowHeight * 5;
  return [0, ...lineGenerator(0, rowHeight / 2, 10)]
}

const hexMidPoints = [
  [1, 5],
  [3, 5],
  [5, 5],
  [7, 5],
  [9, 5],
  [11, 5]
]

// cony

const App = () => {
  return (
    <svg width="1200" height="1200">
      {verticalLineGenerator(1000).map(
        (verticalLine, i1) => {
         return horLineGenerator(1000).map(
            (horizontalLine, i2) => {
              return <circle
               cx={verticalLine} 
               cy={horizontalLine}
               r="10"fill={hexMidPoints.filter(x => x[0] == i1 && x[1] == i2).length ? "red" : "blue"}
               
              ></circle>
            }
          )
        }
      )}
    </svg>
  )
}

export default App;
