import React from 'react'
import { RandomPress } from './page/RandomPress'
import { Lock } from './page/Lock'
import { createUrlInit } from '@blurname/core/src/browser/url'
import { Paste } from './page/Paste'
import { Buffer } from './page/Buffer'
const urlConfig = {
  'lock': () => 'lock',
  'press': () => 'press',
  'paste': () => 'paste',
  'buffer': () => 'buffer'
}
const urlInit = createUrlInit(urlConfig)
const page = urlInit()
function App () {
  return (
    <div style={{ width: '100vw', height: '100vh', boxSizing: 'border-box' }} className="App">
      {(page === undefined || page === 'lock') && <Lock/>}
      {page === 'buffer' && <Buffer/>}
      {page === 'press' && <RandomPress/>}
      {page === 'paste' && <Paste/>}
    </div>
  )
}

export {
  App
}
