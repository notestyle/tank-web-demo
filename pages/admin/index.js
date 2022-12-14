import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../../components/sidebar'
import Page404 from '../404'
import Loading from '../loading'

const DashBoard = () => {
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const navs = [
    {
      title: 'Цэс',
      icon: <FolderIcon />,
    },
    {
      title: 'Тоглолт',
      icon: <CalendarIcon />,
    },
  ]
  useEffect(() => {
    setIsLoading(true)
    setToken(window.localStorage.getItem('token'))
    setUser(JSON.parse(window.localStorage.getItem('user')))
    setIsLoading(false)
  }, [])
  if ((isLoading && !user) || user == undefined) {
    return <Loading />
  } else if (!isLoading && user) {
    if (user.role === 1) {
      return (
        <div className="w-screen h-screen flex items-center p-5">
          <Sidebar navs={navs} />
        </div>
      )
    } else {
      return <Page404 />
    }
  } else {
    return <Page404 />
  }
}
export default DashBoard

const FolderIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
      />
    </svg>
  )
}

const CalendarIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}
