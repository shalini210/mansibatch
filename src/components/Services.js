import React from 'react'
import Service from './Service'
import { serviceArray } from '../serviceData'
import boyImage from "../images/boy1.png"
export default function Services() {
  
  let ServiceUI = serviceArray.map((s)=>
  {
    return <Service title={s.title} imgurl={s.imgurl}
    description={s.description} ></Service>
  })
  return (
    <>
    <h1 style={{textAlign:"center"}}>Services</h1>
    <img src={boyImage}></img>
    <div class="services">       
          {ServiceUI}
    </div>
    </>
  )
}
