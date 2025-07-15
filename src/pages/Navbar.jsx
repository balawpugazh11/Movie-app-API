import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { WatchListContext } from '../context/WatchListContextDef'

const Navbar = () => {
  const {watchlist} = useContext(WatchListContext)
  return (
    <nav className='bg-gray-900 p-4 text-white flex justify-between w-full fixed top-0 z-10'>
      <Link to="/" className="text-lg font-bold">Movie App</Link>
      <Link to="/watchlist" className="text-lg">Watchlist({watchlist.length})</Link>
    </nav>
  )
}

export default Navbar

