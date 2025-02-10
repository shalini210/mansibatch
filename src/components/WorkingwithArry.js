import React from 'react'

export default function WorkingwithArry() {
    let users = [
        {username:"Raman",email:"Raman@gmail.com"},
        {username:"Ram",email:"Ram@gmail.com"},
        {username:"aman",email:"aman@gmail.com"},
        {username:"Ajay",email:"Ajay@gmail.com"},
        {username:"Raju",email:"Raju@gmail.com"}
    ]
    let usersUI = users.map((u)=>
    {
        return <tr key={u.email}><td>{u.username}</td><td>{u.email}</td></tr>
    })
  return (
    <>
    <div>WorkingwithArry</div>
    <table border="1">
        <tr><th>Name</th>
        <th>email</th></tr>
        {usersUI}
    </table>

    </>

  )
}
