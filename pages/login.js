/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import '../Data/Login'
import { fetchLogin } from '../Data/Login'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { ToastSettings } from '../utils/toast'
import bg from '../Assets/bg.jpg'
import hackateen from '../Assets/hackateen.png'
const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const SubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const data = { username, password }
      const response = await fetchLogin(data)
      const resJson = await response.json()
      console.log(resJson)
      const user = resJson.user
      console.log(user)
      if (response.status === 200) {
        window.localStorage.setItem('token', resJson.token)
        window.localStorage.setItem('tokenExpTime', resJson.tokenExpTime)
        window.localStorage.setItem('user', JSON.stringify(resJson.user))
        window.localStorage.setItem('loggedTime', resJson.loggedTime)
        toast.success('Амжилттай нэвтэрлээ', ToastSettings)
        if (user.role === 1) {
          router.push('/admin')
        } else if (user.role === 2) {
          router.push('/user')
        }
      } else if (response.status === 401) {
        setLoading(false)
        toast.error('Нэвтрэх нэр эсвэл нууц үг буруу байна', ToastSettings)
      } else {
        setLoading(false)
        toast.error(resJson.message, ToastSettings)
      }
    } catch (error) {}
  }
  return (
    <div
      className="w-screen h-screen flex justify-center items-center text-gray-200  bg-cover bg-right"
      style={
        {
          // backgroundImage: `url(${bg.src})`,
        }
      }
    >
      <div className="lg:w-1/2 md:w-3/4 flex flex-col items-center">
        <div className="flex flex-col items-center p-20">
          {/* <p className=" mb-2 text-3xl font-semibold uppercase cursor-default">Hackateen 2022</p> */}
          <img src={hackateen.src} className="w-80 mb-4 text-gray-200" alt="logo" />
          <div className="h-1 w-12 bg-primary"></div>
        </div>
        <div className="lg:w-1/2 md:w-3/4 mb-40">
          <form onSubmit={SubmitHandler}>
            <label>Нэвтрэх нэр</label>
            <input
              type="text"
              className="my-2 mb-4 w-full py-3 px-4  rounded-lg sm:text-md bg-white/10  placeholder-gray-400 text-white outline-0 focus:ring-green-500  focus:border-green-600"
              placeholder="Нэвтрэх нэр"
              value={username}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Нууц үг</label>
            <div className="relative group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="my-2 w-full py-3 px-4  rounded-lg sm:text-md bg-white/10  placeholder-gray-400 text-white outline-0 focus:ring-green-500  focus:border-green-600 left-0 z-10"
                placeholder="Нууц үг"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute top-[35%] right-4 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon /> : <EyeIcon2 />}
              </div>
            </div>
            <button
              className={`transition-all duration-300 ease-in-out mt-4 w-full py-3 flex justify-center rounded-lg  ${
                password.length > 0 && username.length > 0 ? 'bg-primary hover:bg-green-600' : 'border border-white/20 hover:bg-white/10'
              } `}
              onClick={() => SubmitHandler()}
            >
              <p className="font-semibold">Нэвтрэх</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

const EyeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
const EyeIcon2 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  )
}

const LockIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )
}
