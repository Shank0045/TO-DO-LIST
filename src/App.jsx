import React from 'react'

import Navbar from './components/Navbar'

import Main from './components/Main'

const App = () => {
  return (
        <>
        <div className=' font-sans bg-black w-full max-h-max min-h-screen m-0 p-0 box-border '>
        <Navbar />
       <Main />

        </div>

      
        </>
  )
}

export default App