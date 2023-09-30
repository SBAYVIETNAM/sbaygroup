import { createContext } from 'react'

export const Context = createContext({
  cuDatChoChau: "Cụ",
  setcuDatChoChau: function (value:any) {
    return value
  }
})