import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Comments = () => {

  const [commentsList, setCommentsList] = useState([])

  const getCommentsList = async () => {
    const response = await axios.get(import.meta.env.VITE_BACKEND_PORT + "/api/v1/getAllComments")

    if (response.data.success){
      setCommentsList(response.data.allComments)
      console.log(response.data.allComments)
    }
  }

  useEffect(() => {
    getCommentsList()
  }, [])
  return (
    <div className='flex-4 ml-2'>
        <h1 className='my-4 font-bold text-3xl text-[green]'>Posts</h1>
        <div className='flex flex-col md:flex-row flex-wrap'>
            {commentsList.map((comment, index) => {
              return (
                <div key={index} className='drop-shadow-xl my-4 mr-2 lg:mx-2 lg:p-4 p-2 lg:w-[400px] bg-[#aaf2c4] text-black rounded-xl'>
                  <h1 className='text-xl font-bold underline mb-4'>{comment.name.toUpperCase()}</h1>
                  <h3 className='font-bold text-0.5xl'>Topic: {comment.title}</h3>
                  <p>{comment.comment}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Comments