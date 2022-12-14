/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logo from '../Assets/hackateen.png'
import { useRouter } from 'next/router'

const Header = () => {
  const routes = [
    {
      routeName: 'Тоглолтууд',
      path: '/',
    },
    {
      routeName: 'Хуваарь',
      path: '/schedule',
    },
    {
      routeName: 'Багууд',
      path: '/teams',
    },
  ]
  const router = useRouter()
  return (
    <div className="fixed z-20 top-0 w-full h-20 bg-white/5 flex items-center px-20 backdrop-blur-lg border-b border-white/10 justify-between	">
      <div className="flex items-center">
        <img src={logo.src} alt="" className="h-8 mr-8" />
        {routes.map((row, index) => (
          <div
            key={index}
            onClick={() => router.push(row.path)}
            className={`transition-all duration-300 ease-in-out mx-4 font-medium cursor-default hover:text-white ${
              row.path === router.pathname ? 'text-white' : 'text-white/40'
            }`}
          >
            {row.routeName}
          </div>
        ))}
      </div>
      <div
        className="transition-all duration-300 ease-in-out px-8 py-2 backdrop-blur-lg rounded-full border border-white/10 hover:bg-white/10 cursor-pointer flex items-center"
        onClick={() => router.push('/login')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        Нэвтрэх
      </div>
    </div>
  )
}

export default Header
