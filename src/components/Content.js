import React from 'react'
import ForProp from './ForProp'
import WorkingwithArry from './WorkingwithArry'

export default function Content() {
  return (
    <div className="content">
      <h1>User List</h1>
      {/* <Calc a={10} b={20} op="+"></Calc>
      <Calc a={100} b={20} op="-"></Calc> */}
      {/*  */}
      <ForProp username="Virat" userage={32}></ForProp>
     <ForProp username="Ron" userage={12}></ForProp>
     <h3>for second user</h3>
     <ForProp username="Geeta" userage={30}></ForProp>
     <h3>for third user</h3>
     <ForProp username="Maria" userage={18}></ForProp>
    </div>
  )
}
