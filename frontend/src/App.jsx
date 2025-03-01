import React from 'react'
import Comments from './components/Comments/Comments'
import CommentsInput from './components/CommentsInput/CommentsInput'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex container flex-col lg:flex-row mx-auto'>
        <CommentsInput/>
        <Comments/>
      </div>

    </div>
  )
}

export default App