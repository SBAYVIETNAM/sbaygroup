import { useContext } from 'react'

import { Context } from "./context";

export function Con(props: any) {
    const {cuDatChoChau,setcuDatChoChau }= useContext(Context)
    return (
      <>
        <div >
          <h3>Con tên do <strong> {props.name}</strong> đặt</h3>
          <h3>Con tên do <strong> {cuDatChoChau}</strong> đặt</h3>
          <button onClick={() => setcuDatChoChau("heheh")}> Tự đặt</button>
        </div>
      </>
    )
  }
  