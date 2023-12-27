import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [ data, setData] = useState([])


    useEffect(() => {
        fetch("https://api.github.com/users/abhishek-mishradev")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setData(data)

        })

    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github;;

// export githubInfoLoader = async()=>{
    

//     const response=   await fetch("https://api.github.com/users/abhishek-mishradev")
//     return response.json()

// }