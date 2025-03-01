import React, { useState } from 'react'

import axios from "axios"

const CommentsInput = () => {
    const [userData, setUserData] = useState({
        name: "",
        title: "",
        comment: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setUserData((prevState) => ({
            ...prevState, [name]: value
        }))
    }

    const submitData = async () => {
        const response = await axios.post(import.meta.env.VITE_BACKEND_PORT + "/api/v1/createComment", userData)
        if (response.data.success){
            console.log(response.data.message)
            window.location.reload()
        }
    }

  return (
    <div className='flex-2 lg:border-r lg:border-gray-300 h-screen'>
        <h1 className='my-4 font-bold text-3xl text-[green] ml-2'>Type Your Comment</h1>
        <div className='flex flex-col gap-10' value={userData.name}>
            <input type='text' 
            name='name'
            onChange={handleChange}
            className='border-2 border-black-600 font-bold rounded px-2 py-1 w-100% ml-2 mr-5' 
            placeholder='Name'/>


            <input type='text' 
            value={userData.title} 
            name='title' 
            onChange={handleChange}
            className='border-2 border-black-600 font-bold rounded px-2 py-1 w-100% ml-2 mr-5' 
            placeholder='Title'/>


            <textarea type='text' style={{height: "200px"}}
             className='border-2 h-1/2 border-black-600 font-bold rounded px-2 py-1 w-100% ml-2 mr-5' name='comment'
              placeholder='Comment' value={userData.comment}
              onChange={handleChange}
               ></textarea>
        </div>
        <button onClick={submitData} className='bg-[#85c997] mx-2 px-4 py-1 mt-2 rounded text-[#fff] font-bold hover:bg-[green]'>Post</button>
    </div>
  )
}

export default CommentsInput