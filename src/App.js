import React from 'react'
import Counter from './Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './reducer'

let store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Counter />
      </div>
    </Provider>
  )
}

export default App
