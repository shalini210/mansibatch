import React from 'react'

export default function Workingwithvalue() {
    let user = {name:'Ram',email:'ram@gmail.com'}
  return (
    <>
    <div>
     welcome {user.name}
    </div>
    <p>
      you contat email is {user.email}
    </p>
    </>
  )
}
