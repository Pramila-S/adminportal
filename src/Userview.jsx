import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import {useState} from 'react'
import {env} from './Config';

function Userview() {
  const params = useParams()
  console.log(params)

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

const [userData, setUserData] = useState ({})
  useEffect(() =>{
    LoadUser()
  })
   let LoadUser = async () =>{
    try {
      let user = await axios.get(`${env.api}/users/${params.id}`)
      setUserData(user.data)
    } catch (error) {
      
    }
   }
  return (
<>
<h2>{userData.username}</h2>
<h3>{userData.position}</h3>
<h3>{userData.office}</h3>
<h3>{userData.age}</h3>
<h3>{userData.startdate}</h3>
<h3>{userData.salary}</h3>
    {/* <h1>{params.id}</h1>
    <button onClick={() =>{
      setSearchParams({
        gender : "female",
        age :40
      })
    }}>Change</button> */}
    </>
  )
}

export default Userview