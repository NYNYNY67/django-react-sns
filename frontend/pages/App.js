import React from 'react'
import Navbar from '/components/Navbar'
import Login from './components/Login';
import ApiContextProvider from './api/ApiContext'
import { withCookies } from 'react-cookies'

// JSXを定義
const App = () => {
  return (
    // ApiContentファイルで定義したAPIメソッドの使用範囲を宣言
    <ApiContextProvider>
      <Navbar />
      <Login />
    </ApiContextProvider>
  )
}

export default withCookies(App);