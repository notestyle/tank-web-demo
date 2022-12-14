/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import React, { useEffect } from 'react'
import { Matches, Teams } from '../Data/Teams'
import Header from '../components/header'
function Home() {
  const Match = Matches
  const count = (row, id) => {
    let c = 0
    if (row === undefined || row === null) {
      return c
    }
    row.results.forEach((element) => {
      if (element.winner === id) {
        c++
      }
    })
    return c
  }

  return (
    <div className="">
      <Header />
      <div className="flex h-full overflow-x-scroll">
        {Matches.map((r, i) => (
          <div key={i} className="mt-20 p-20 flex flex-col max-w-fit justify-around ">
            {/* <div className="text-lg font-bold"> {r.length > 2 ? 'Шөвгийн ' + r.length * 2 : r.length == 2 ? 'Хагас финал' : 'Финал'}</div> */}
            {r.map((row, index) => (
              <div key={index} className="flex flex-col max-w-fit my-8 rounded-lg relative ">
                {/* DATE */}
                <p className="text-white/60 font-medium my-2">
                  {row.start_date ? row.start_date.format('HH:mm, MM-DD-YYYY ') : 'Тун удахгүй'}
                </p>
                {/* CONTAINER */}
                <div className="transition-all duration-200 ease-in-out flex flex-col border border-white/20 cursor-pointer px-8 py-2 rounded-md hover:bg-white/5">
                  {/* TEAM 1 */}
                  <div className="flex items-center my-2 justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        {Teams[row.team1_id] && Teams[row.team1_id].logo ? (
                          <img src={Teams[row.team1_id].logo} className="w-8 mr-4" alt="team logo" />
                        ) : (
                          <div className="w-4 h-4 bg-blue-500 rounded-md" />
                        )}
                      </div>
                      <span
                        className={`w-40 text-ellipsis 
                   ${row.winner && row.winner === row.team1_id ? 'text-white font-medium ' : 'text-gray-500'}`}
                      >
                        {Teams[row.team1_id] ? Teams[row.team1_id].name : 'Цэнхэр баг'}
                      </span>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center">
                      <span className={`text-xl ${row.winner && row.winner === row.team1_id ? 'text-white font-bold' : 'text-gray-500'}`}>
                        {count(row, row.team1_id)}
                      </span>
                    </div>
                  </div>
                  {/* TEAM 2 */}
                  <div className="flex items-center my-2 justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        {Teams[row.team2_id] && Teams[row.team2_id].logo ? (
                          <img src={Teams[row.team2_id].logo} className="w-8 mr-4" alt="team logo" />
                        ) : (
                          <div className="w-4 h-4 bg-red-500 rounded-md" />
                        )}
                      </div>
                      <span
                        className={`w-40 text-ellipsis ${
                          row.winner && row.winner === row.team2_id ? 'text-white font-medium ' : 'text-gray-500'
                        }`}
                      >
                        {Teams[row.team2_id] ? Teams[row.team2_id].name : 'Улаан баг'}
                      </span>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center">
                      <span className={` text-xl ${row.winner && row.winner === row.team2_id ? 'text-white font-bold' : 'text-gray-500'}`}>
                        {count(row, row.team2_id)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-20 h-0.5  bg-white/20 scale-y-75 absolute -right-20 top-28"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

// <div className="p-20 flex flex-col max-w-fit justify-around">
//           {/* MATCHES LOOP */}
//           {Matches_1.map((row, index) => (
//             <div key={index} className="flex flex-col max-w-fit my-8 rounded-lg relative ">
//               {/* DATE */}
//               <p className="text-white/60 font-medium my-2">{row.start_date.format('HH:mm, MM-DD-YYYY ')}</p>
//               {/* CONTAINER */}
//               <div className="transition-all duration-200 ease-in-out flex flex-col border border-white/20 cursor-pointer px-8 py-2 rounded-md hover:bg-white/5">
//                 {/* TEAM 1 */}
//                 <div className="flex items-center my-2 justify-between">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 flex justify-center items-center">
//                       {Teams[row.team1_id].logo ? (
//                         <img src={Teams[row.team1_id].logo} className="w-8 mr-4" />
//                       ) : (
//                         <div className="w-4 h-4 bg-blue-500 rounded-md" />
//                       )}
//                     </div>
//                     <span
//                       className={`w-40 text-ellipsis
//                   ${row.winner && row.winner === row.team1_id ? 'text-white font-medium ' : 'text-gray-500'}`}
//                     >
//                       {Teams[row.team1_id].name}
//                     </span>
//                   </div>
//                   <div className="w-12 h-12 flex justify-center items-center">
//                     <span className={`text-xl ${row.winner === row.team1_id ? 'text-white font-bold' : 'text-gray-500'}`}>
//                       {count(row, row.team1_id)}
//                     </span>
//                   </div>
//                 </div>
//                 {/* TEAM 2 */}
//                 <div className="flex items-center my-2 justify-between">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 flex justify-center items-center">
//                       {Teams[row.team2_id].logo ? (
//                         <img src={Teams[row.team2_id].logo} className="w-8 mr-4" />
//                       ) : (
//                         <div className="w-4 h-4 bg-red-500 rounded-md" />
//                       )}
//                     </div>
//                     <span className={`w-40 text-ellipsis ${row.winner === row.team2_id ? 'text-white font-medium ' : 'text-gray-500'}`}>
//                       {Teams[row.team2_id].name}
//                     </span>
//                   </div>
//                   <div className="w-12 h-12 flex justify-center items-center">
//                     <span className={` text-xl ${row.winner === row.team2_id ? 'text-white font-bold' : 'text-gray-500'}`}>
//                       {count(row, row.team2_id)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-20 h-0.5  bg-white/20 scale-y-75 absolute -right-20 top-28"></div>
//             </div>
//           ))}
//         </div>
//         <div className="p-20 flex flex-col max-w-fit justify-around">
//           {/* MATCHES LOOP */}
//           {Matches_2.map((row, index) => (
//             <div key={index} className="flex flex-col max-w-fit my-8 rounded-lg relative ">
//               {/* DATE */}
//               <p className="text-white/60 font-medium my-2">{row.start_date.format('HH:mm, MM-DD-YYYY ')}</p>
//               {/* CONTAINER */}
//               <div className="transition-all duration-200 ease-in-out flex flex-col border border-white/20 cursor-pointer px-8 py-2 rounded-md hover:bg-white/5">
//                 {/* TEAM 1 */}
//                 <div className="flex items-center my-2 justify-between">
//                   {console.log(row)}
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 flex justify-center items-center">
//                       {Teams[row.team1_id] && Teams[row.team1_id].logo ? (
//                         <img src={Teams[row.team1_id].logo} className="w-8 mr-4" />
//                       ) : (
//                         <div className="w-4 h-4 bg-blue-500 rounded-md" />
//                       )}
//                     </div>
//                     <span
//                       className={`w-40 text-ellipsis
//                   ${row.winner && row.winner === row.team1_id ? 'text-white font-medium ' : 'text-gray-500'}`}
//                     >
//                       {Teams[row.team1_id] && Teams[row.team1_id].name && Teams[row.team1_id].name}
//                     </span>
//                   </div>
//                   <div className="w-12 h-12 flex justify-center items-center">
//                     <span className={`text-xl ${row.winner === row.team1_id ? 'text-white font-bold' : 'text-gray-500'}`}>
//                       {count(row, row.team1_id)}
//                     </span>
//                   </div>
//                 </div>
//                 {/* TEAM 2 */}
//                 <div className="flex items-center my-2 justify-between">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 flex justify-center items-center">
//                       {Teams[row.team2_id] && Teams[row.team2_id].logo ? (
//                         <img src={Teams[row.team2_id].logo} className="w-8 mr-4" />
//                       ) : (
//                         <div className="w-4 h-4 bg-red-500 rounded-md" />
//                       )}
//                     </div>
//                     <span className={`w-40 text-ellipsis ${row.winner === row.team2_id ? 'text-white font-medium ' : 'text-gray-500'}`}>
//                       {Teams[row.team2_id] && Teams[row.team2_id].name}
//                     </span>
//                   </div>
//                   <div className="w-12 h-12 flex justify-center items-center">
//                     <span className={` text-xl ${row.winner === row.team2_id ? 'text-white font-bold' : 'text-gray-500'}`}>
//                       {count(row, row.team2_id)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-20 h-0.5  bg-white/20 scale-y-75 absolute -right-20 top-28"></div>
//             </div>
//           ))}
//         </div>
//         <div className="p-20 flex flex-col max-w-fit justify-around">
//           {/* MATCHES LOOP */}
//           {Matches_3.map((row, index) => (
//             <div key={index} className="flex flex-col max-w-fit my-8 rounded-lg relative ">
//               {/* DATE */}
//               <p className="text-white/60 font-medium my-2">{row.start_date.format('HH:mm, MM-DD-YYYY ')}</p>
//               {/* CONTAINER */}
//               <div className="transition-all duration-200 ease-in-out flex flex-col border border-white/20 cursor-pointer px-8 py-2 rounded-md hover:bg-white/5">
//                 {/* TEAM 1 */}
//                 <div className="flex items-center my-2 justify-between">
//                   {console.log(row)}
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 flex justify-center items-center">
//                       {Teams[row.team1_id] && Teams[row.team1_id].logo ? (
//                         <img src={Teams[row.team1_id].logo} className="w-8 mr-4" />
//                       ) : (
//                         <div className="w-4 h-4 bg-blue-500 rounded-md" />
//                       )}
//                     </div>
//                     <span
//                       className={`w-40 text-ellipsis
//                   ${row.winner && row.winner === row.team1_id ? 'text-white font-medium ' : 'text-gray-500'}`}
//                     >
//                       {Teams[row.team1_id] && Teams[row.team1_id].name && Teams[row.team1_id].name}
//                     </span>
//                   </div>
//                   <div className="w-12 h-12 flex justify-center items-center">
//                     <span className={`text-xl ${row.winner === row.team1_id ? 'text-white font-bold' : 'text-gray-500'}`}>
//                       {count(row, row.team1_id)}
//                     </span>
//                   </div>
//                 </div>
//                 {/* TEAM 2 */}
//                 <div className="flex items-center my-2 justify-between">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 flex justify-center items-center">
//                       {Teams[row.team2_id] && Teams[row.team2_id].logo ? (
//                         <img src={Teams[row.team2_id].logo} className="w-8 mr-4" />
//                       ) : (
//                         <div className="w-4 h-4 bg-red-500 rounded-md" />
//                       )}
//                     </div>
//                     <span className={`w-40 text-ellipsis ${row.winner === row.team2_id ? 'text-white font-medium ' : 'text-gray-500'}`}>
//                       {Teams[row.team2_id] && Teams[row.team2_id].name}
//                     </span>
//                   </div>
//                   <div className="w-12 h-12 flex justify-center items-center">
//                     <span className={` text-xl ${row.winner === row.team2_id ? 'text-white font-bold' : 'text-gray-500'}`}>
//                       {count(row, row.team2_id)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-20 h-0.5  bg-white/20 scale-y-75 absolute -right-20 top-28"></div>
//             </div>
//           ))}
//         </div>
