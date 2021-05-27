import Head from 'next/head'
import styled from 'styled-components'

const NavBar = styled.nav`
  color: green;
`
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Uriel Alvarez Portafolio</title>
      </Head>
      <NavBar>
        nav
      </NavBar>
      {children}
    </>
  )
}

export default Layout
