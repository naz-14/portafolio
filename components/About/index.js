import styled from 'styled-components'
import { SectionTitle, Container, Section, NormalText } from '../../styles/globals'

const AboutWrapper = styled(Container)`

`
const Tecnologias = styled.ul`
  list-style: circle;
  padding-left: 2rem;
`
const Tecnologia = styled.li`
  color: #eeeeee;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  span {
    color: #32e0c4;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
const About = () => {
  return (
    <Section id="acerca">
      <AboutWrapper>
        <SectionTitle>
          Acerca de mi
        </SectionTitle>
        <NormalText>
          Soy un Web Developer que ha aprendido todo lo que sabe de forma autodidacta,
          Me especializo en JavaScript con conicimientos enfocados al frontend pero tambien he hecho proyectos completos con Backend (Proyectos FullStack)
        </NormalText>
        <NormalText>
          De momento las tecnologias que manejo son:
        </NormalText>
        <Tecnologias>
          <Tecnologia>
            React JS: <span>Avanzado</span>
          </Tecnologia>
          <Tecnologia>
            Next JS: <span>Medio</span>
          </Tecnologia>
          <Tecnologia>
            Express JS: <span>Medio</span>
          </Tecnologia>
          <Tecnologia>
            Node Js: <span>Medio</span>
          </Tecnologia>
          <Tecnologia>
            HTML5: <span>Avanzado</span>
          </Tecnologia>
          <Tecnologia>
            CSS3: <span>Avanzado</span>
          </Tecnologia>
          <Tecnologia>
            TypeScript: <span>Medio</span>
          </Tecnologia>
          <Tecnologia>
            MySQL: <span>Basico</span>
          </Tecnologia>
          <Tecnologia>
            Google FireStore: <span>Medio</span>
          </Tecnologia>
        </Tecnologias>
      </AboutWrapper>
    </Section>
  )
}

export default About
