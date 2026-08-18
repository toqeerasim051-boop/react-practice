import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from 'react-router-dom';

import { useLoaderData } from 'react-router-dom';

function Github() {
  const data=useLoaderData();
  // const[data,setData]=useState([]);
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/toqeerasim051-boop')
  //     .then(response=>response.json())
  //     .then(data=> setData(data))
  // },[])
  return (
    <div className='bg-gray-600 text-white text-center text-3xl p-4  w-full '>
      Github Followers : {data.followers} 
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github


// let's make api fetching more optimized

export const githubInfoLoader=async ()=>{
  const response=await fetch('https://api.github.com/users/toqeerasim051-boop')
  return response.json()
}