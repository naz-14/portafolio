import styled, { keyframes } from 'styled-components'
import { ArrowDown } from '@styled-icons/bootstrap'
import Link from 'next/link'

import { Container, PrimaryButton } from '../../styles/globals'

const HeroSection = styled.section`
  min-height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
`
const HeroWrapper = styled(Container)`
  width: max-content;
  transform: translateY(-5rem);
`
const Uriel = styled.p`
  width: max-content;
  font-size: 5rem;
  color: #eeeeee;
  @media (min-width: 768px) {
    font-size: 8rem;
  }
`
const Frase = styled.p`
  width: max-content;
  font-size: 2rem;
  font-weight: 300;
  color: #eeeeee;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  `
const jump = keyframes`
  \ 0% {
    transform: translate(-50%, 0);
  }
  \ 50% {
    transform: translate(-50%, -10%);
  }
  \ 100%{
    transform: translate(-50%, 0);
  }
`
const Arrow = styled(ArrowDown)`
  color: #32e0c4;
  position: absolute;
  bottom: 0;
  width: 5rem;
  left: 50%;
  animation: ${jump};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`
const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <Uriel>
          Uriel<br/><span>Alvarez</span>
        </Uriel>
        <Frase>
          {'"El conocimiento se comparte"'}
        </Frase>
        <Link href='#portafolio'>
          <PrimaryButton>
            Portafolio
          </PrimaryButton>
        </Link>
      </HeroWrapper>
      <Link href='#acerca'>
        <Arrow />
      </Link>
    </HeroSection>
  )
}

export default Hero
