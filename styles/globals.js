import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Lato', sans-serif;
    background-color: #222831;
    padding-top: 5rem;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  a,h1,h2,h3,li,ul,p {
    margin: 0;
    padding: 0;
    text-decoration: none
  }
`

export const Container = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  width: 95%;
`
const Button = styled.button`
  padding: 1rem 1.5rem;
  margin: 0;
  background: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`
export const PrimaryButton = styled(Button)`
  border: 1px solid #32e0c4;
  color: #eeeeee;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: #32e0c4;
    color: #393e46;
  }
`

export default GlobalStyle
