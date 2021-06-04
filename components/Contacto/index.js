import styled from 'styled-components'
import { Container, Section, SectionTitle } from '../../styles/globals'
import { Facebook, Twitter } from '@styled-icons/bootstrap'
const ContactWrapper = styled.nav`
  @media (min-width: 768px) {
    margin: 3rem 0;
  }
`
const ContactLink = styled.a`
  color: #eeeeee;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover{
    color: #32e0c4;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`
const ContactUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`
const ContactLi = styled.li`

`
const Fb = styled(Facebook)`
  width: 3rem;
  color: #eeeeee;
  margin-right: 1rem;
  @media (min-width: 768px) {
    width: 5rem;
  }
`
const Tw = styled(Twitter)`
  width: 3rem;
  color: #eeeeee;
  margin-right: 1rem;
  @media (min-width: 768px) {
    width: 5rem;
  }
`
const Contacto = () => {
  return (
    <Section id="contacto">
      <Container>
        <SectionTitle>
          Contacto
        </SectionTitle>
        <ContactWrapper>
          <ContactUl>
            <ContactLi>
              <ContactLink href="https://www.facebook.com/just.pwnaz" target="_blank"><Fb />/pwnaz</ContactLink>
            </ContactLi>
            <ContactLi>
              <ContactLink href="https://twitter.com/pWnaz" target="_blank"><Tw />@pwnaz</ContactLink>
            </ContactLi>
          </ContactUl>
        </ContactWrapper>
      </Container>
    </Section>
  )
}

export default Contacto
