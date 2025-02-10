import React from 'react'

export default function Welcome(props) {
    var usrname = props.name
    var fs = props.fs
    var color = "red"
    var msg = "you are not eligible to vote"
    var age = props.age
    if(age>=18)
    {
        color="green"
        msg = "you are  eligible to vote"
    }
  return (
    <>
    <div style={{backgroundColor:color}}>
    <h1> welcome {usrname}</h1>
    <p>{msg}</p>
    </div>
    </>

  )
}
