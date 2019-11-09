import React from 'react'
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'
import counterReducer from './reducer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'


let store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Counter />
        <DisplayCounter />
      </div>
    </Provider>
  )
}

export default App
