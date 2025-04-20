import React from 'react'
import Routing from './routing/Routing'
import "./app.css"
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
 
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  )
}
