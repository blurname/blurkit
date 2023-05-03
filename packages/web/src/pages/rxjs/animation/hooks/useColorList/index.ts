import { useState } from 'react'
import { getRandomColor } from './colors.js'

const useColorList = (amount: number) => {
  const [list, setList] = useState(() => {
    return Array(amount).fill(0).map(getRandomColor)
  })
  return [list, setList] as const
}
export {
  useColorList
}
