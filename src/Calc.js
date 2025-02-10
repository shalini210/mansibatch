import React from 'react'

export default function Calc(props) {
    let a = props.a
    let b = props.b
    let op = props.op
    let msg = ""
    switch (op) {
        case "+":
            msg = "sum of "+a+ " and "+ b +" is "+(a+b)
        break;
        case "-":
            msg = "difference of "+a+ " and "+ b +" is "+(a-b)
        break;
        case "*":
            msg = "product of "+a+ " and "+ b +" is "+(a*b)
        break;
        case "/":
            msg = "division of "+a+ " and "+ b +" is "+(a/b)
        break;
        default:
            break;
    }
  return (
    <div>{msg}</div>
  )
}
