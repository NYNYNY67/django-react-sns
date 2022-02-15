import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// JSX定義
// Reactプロジェクトではまずindex.jsが実行される
const Index = () => {
  return (
    <React.StrictMode>
      // Cookieの利用範囲を指定
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </React.StrictMode>
  )
}

export default Index;