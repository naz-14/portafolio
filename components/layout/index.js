import Head from 'next/head'
import HeaderBar from '../Header'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Uriel Alvarez Portafolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <HeaderBar />
      {children}
    </>
  )
}

export default Layout
