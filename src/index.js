import React from 'react'

import store from './store'

import { Provider } from 'react-redux'

// import Home from './pages/Home'

import Routes from './routes'

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}