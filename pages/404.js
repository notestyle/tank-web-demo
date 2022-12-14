/* eslint-disable @next/next/no-img-element */
import React from 'react'
import error404 from '../Assets/404.svg'
import { useRouter } from 'next/router'

const Page404 = () => {
  const router = useRouter()
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <img src={error404.src} alt="404" className="w-1/4" />
      <p className="my-10 font-bold text-2xl">Алдаатай хүсэлт...</p>
      <div
        className="transition-all duration-300 ease-in-out cursor-pointer py-2 pl-10 pr-12 border border-white/10 rounded-full flex items-center hover:border-white/20 hover:bg-white/5"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
        Буцах
      </div>
    </div>
  )
}

export default Page404
