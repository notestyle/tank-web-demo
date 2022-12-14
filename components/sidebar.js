/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'
import logo from '../Assets/hackateen.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastSettings } from '../utils/toast'

const Sidebar = ({ navs }) => {
  const router = useRouter()
  const logout = () => {
    console.log('logged out')
    window.localStorage.clear()
    router.push('/')
    toast.success('Амжилттай гарлаа', ToastSettings)
  }

  return (
    <div className="h-full w-1/5 bg-white/5 rounded-lg overflow-clip flex flex-col justify-between cursor-default p-5">
      <div className="flex flex-col ">
        <div className="w-full flex items-center justify-center">
          <div className="aspect-square w-2/3 flex items-center justify-center">
            <img src={logo.src} alt="team logo" />
          </div>
        </div>
        {navs.map((row, index) => (
          <div
            key={index}
            className="px-6 py-3 my-1 hover:bg-white/20 text-white flex items-center rounded-lg transition-all duration-300 ease-in-out "
          >
            {row.icon}
            {row.title}
          </div>
        ))}
      </div>
      <div
        className="px-6 py-3 bg-red-500/10 text-red-500 flex items-center rounded-lg transition-all duration ease-in-out hover:bg-red-500/70 hover:text-white font-semibold"
        onClick={() => logout()}
      >
        <LogoutIcon />
        Системээс гарах
      </div>
    </div>
  )
}

export default Sidebar

const LogoutIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  )
}
