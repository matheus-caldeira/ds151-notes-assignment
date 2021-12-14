import React from 'react'

import Context from './context'
import Routes from './routes'

function App() {
  return <>
    <Context>
      <Routes />
    </Context>
  </>
}

export default App;