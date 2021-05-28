import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Menu } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/evaicons-solid'

import { Container } from '../../styles/globals'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`
const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
`
const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: #222831;
  transform: ${({ showMenu }) => showMenu ? 'translateX(0)' : 'translateX(100%)'};
  transition: ${({ showMenu }) => showMenu ? 'transform .3s ease-in' : 'none'};
  @media (min-width: 768px) {
    position: relative;
    min-height: unset;
    background-color: transparent;
    transform: none;
    transition: none;
  }
`
const Logo = styled.p`
  color: #eeeeee;
  font-weight: 700;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`
const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: unset;
  }
`
const NavLink = styled.a`
  color: #eeeeee;
  font-weight: 700;
  transition: color .3s ease;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  &:hover {
    color: #32e0c4;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    min-width: max-content;
    margin-right: 2rem;
    font-size: 1.7rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`
const MenuMobileIcon = styled(Menu)`
  color: #eeeeee;
  height: 3rem;
  @media (min-width: 768px) {
    display: none;
  }
`
const CloseMenu = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  @media (min-width: 768px) {
    display: none;
  }
`
const CloseMenuIcon = styled(Close)`
  height: 3rem;
  color: #eeeeee;
`
const HeaderBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <Header>
        <HeaderWrapper>
          <Logo>
            Uriel Alvarez V.
          </Logo>
          <NavBar showMenu={showMenu}>
            <NavUl>
              <CloseMenu onClick={() => {
                handleShowMenu()
              }}>
                <CloseMenuIcon />
              </CloseMenu>
              <Link prefetch href="#acerca" passHref>
                <NavLink>Acerca de mi</NavLink>
              </Link>
              <Link prefetch href="#portafolio" passHref>
                <NavLink>Portafolio</NavLink>
              </Link>
              <Link prefetch href="#contacto" passHref>
                <NavLink>Contacto</NavLink>
              </Link>
            </NavUl>
          </NavBar>
          <MenuMobileIcon onClick={() => {
            handleShowMenu()
          }}/>
        </HeaderWrapper>
      </Header>
  )
}

export default HeaderBar
