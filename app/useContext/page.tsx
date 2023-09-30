'use client'
import { Con } from "./conx";
import { createContext, useContext, useState } from 'react'
import { Context } from "./context";

// Pages in Next.js are Server Components by default
export default function Cu() {
  const [cuDatChoChau, setcuDatChoChau] = useState('Cụ')
  const value = {
    cuDatChoChau, setcuDatChoChau
  }

  return (
    <>
      <div >
        <h1>Tao là Cụ</h1>
        <div className=' space-x-2'>
          <button className='btn btn-sm btn-primary' onClick={() => setcuDatChoChau('Cụ Bà')}>Cụ Bà</button>
          <button className='btn btn-sm btn-secondary' onClick={() => setcuDatChoChau('Cụ Ông')}>Cụ Ông</button>
        </div>

        <Context.Provider value={value}>
          <Ong name={"Cụ"}></Ong>

        </Context.Provider>
      </div>
    </>
  )
}


export function Ong(props: any) {
  const ongDat = "Ong"
  return (
    <>
      <div >
        <h1>Ông tên do <strong> {props.name}</strong> đặt</h1>
        <Cha name={ongDat}></Cha>
      </div>
    </>
  )
}

export function Cha(props: any) {
  const chaDat = "Cha"
  return (
    <>
      <div >
        <h2>Cha tên do <strong> {props.name}</strong> đặt</h2>
        <Con name={chaDat} ></Con>
      </div>
    </>
  )
}

// export function Con(props: any) {
//   const {cuDatChoChau,setcuDatChoChau }= useContext(Context)


//   return (
//     <>
//       <div >
//         <h3>Con tên do <strong> {props.name}</strong> đặt</h3>
//         <h3>Con tên do <strong> {cuDatChoChau}</strong> đặt</h3>
//         <button onClick={() => setcuDatChoChau("heheh")}>xxxxx</button>
//       </div>
//     </>
//   )
// }
<Con></Con>