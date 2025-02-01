import React from 'react'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src="movielogo.png" alt="movielogo" />
      <a href="/" className='text-blue-400 text-3xl font-bold'>Home</a>
      <a href="/watchlist" className='text-blue-400 text-3xl font-bold'>Watchlist</a>
    </div>
  )
}

export default Navbar
