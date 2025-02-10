import React from 'react'

export default function ForProp(props) {
    console.log(props)
    let name = props.username
    let age = props.userage
    let msg ="";
    if(age>=18)
    {
        msg = name+" age "+age+" Eligible to vote"
    }
    else
    {
        msg =name+" age " +age+ " Not Eligible to vote"
    }
  return (
    <div><h1>{msg}</h1></div>
  )
}
