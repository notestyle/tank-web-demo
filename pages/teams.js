/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Header from '../components/header'
import { Teams } from '../Data/Teams'
import logo from '../Assets/hackateen.png'

const TeamsPage = () => {
  return (
    <div className="flex justify-center">
      <Header />
      <div className="p-20 grid grid-cols-4 gap-10 mt-20">
        {Teams.map((row, index) => (
          <div key={index} className="flex items-center justify-center flex-col p-10 border border-white/20 rounded-md">
            <div className="w-20 h-20 flex justify-center items-center bg-red-100/0">
              <img src={row.logo ? row.logo : logo.src} alt={row.name} className="max-w-12 max-h-12" />
            </div>
            <p className="font-medium text-lg">{row.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamsPage
