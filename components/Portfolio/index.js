import styled from 'styled-components'
import Link from 'next/link'

import { Container, PrimaryButton, Section, SectionTitle } from '../../styles/globals'
import Loading from '../Loading'
import { useState } from 'react'

const ProyectsWrapper = styled.div`
  
`
const Wrapper = styled.div`
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    margin-bottom: 10rem;
  }
`
const Title = styled.h3`
  font-size: 1.8rem;
  color: #32e0c4;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-top: 5rem;
    font-size: 3rem;
  }
`
const ProyectWapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
`
const ProyectTitle = styled.div`
  font-size: 1.8rem;
  color: #eeeeee;
  margin-bottom: 2rem;
  align-self: center;
  @media (min-width:768px) {
    font-size: 3rem;
  }
`
const ProyectImageWrapper = styled.div`
  margin-bottom: 2rem;
  @media (min-width:768px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`
const ProyectImage = styled.img`
`
const ProyectDescription = styled.p`
  font-size: 1.5rem;
  color: #eeeeee;
  margin-bottom: 2rem;
  @media (min-width:768px) {
    font-size: 2rem;
  }
`

const Detalles = styled(PrimaryButton)`
  align-self: flex-end;
`
const Portfolio = () => {
  const [show, setShow] = useState(false)
  const handleShow = (e) => {
    console.log(e)
    setShow(true)
  }
  return (
    <>
    {show ? <Loading /> : null}
    <Section id="portafolio">
      <Container>
        <SectionTitle>
          Portafolio
        </SectionTitle>
        <ProyectsWrapper>
          <Title>
            Frontend
          </Title>
          <Wrapper>
          <ProyectWapper>
              <ProyectTitle>
                PitScript
              </ProyectTitle>
              <ProyectImageWrapper>
                <ProyectImage src="/images/pitscript.png"/>
              </ProyectImageWrapper>
              <ProyectDescription>
                Pagina de desarrollo web y desarrollo de marcas
              </ProyectDescription>
              <Link href="/proyecto/1" >
                <Detalles onClick={(e) => { handleShow(e) }}>
                  Ver Detalles
                </Detalles>
              </Link>
            </ProyectWapper>
            <ProyectWapper>
              <ProyectTitle>
                JobListingsReact
              </ProyectTitle>
              <ProyectImageWrapper>
                <ProyectImage src="/images/joblistings.png"/>
              </ProyectImageWrapper>
              <ProyectDescription>
                Pagina hecha en react cunsumiendo un archivo json con funcionalidad de filtrado
              </ProyectDescription>
              <Link href="/proyecto/2">
                <Detalles onClick={(e) => { handleShow(e) }}>
                  Ver Detalles
                </Detalles>
              </Link>
            </ProyectWapper>
            <ProyectWapper>
              <ProyectTitle>
                EasyBank Landing
              </ProyectTitle>
              <ProyectImageWrapper>
                <ProyectImage src="/images/easybank.png"/>
              </ProyectImageWrapper>
              <ProyectDescription>
                Landing page tomando como base un diseño de frontendMentor
              </ProyectDescription>
              <Link href="/proyecto/3">
                <Detalles onClick={(e) => { handleShow(e) }}>
                  Ver Detalles
                </Detalles>
              </Link>
            </ProyectWapper>
            <ProyectWapper>
              <ProyectTitle>
                Manage Landing Page
              </ProyectTitle>
              <ProyectImageWrapper>
                <ProyectImage src="/images/manage.png"/>
              </ProyectImageWrapper>
              <ProyectDescription>
                Landing page tomando como diseño un archivo psd
              </ProyectDescription>
              <Link href="/proyecto/4">
                <Detalles onClick={(e) => { handleShow(e) }}>
                  Ver Detalles
                </Detalles>
              </Link>
            </ProyectWapper>
          </Wrapper>
          <Title>
            FullStack
          </Title>
          <Wrapper>
            <ProyectWapper>
              <ProyectTitle>
                Aplicacion de notas con registro y login
              </ProyectTitle>
              <ProyectImageWrapper>
                <ProyectImage src="/images/journalapp.png"/>
              </ProyectImageWrapper>
              <ProyectDescription>
                Apliacion de notas con login y registro de nuevos usuarios
              </ProyectDescription>
              <Link href="/proyecto/5">
                <Detalles onClick={(e) => { handleShow(e) }}>
                  Ver Detalles
                </Detalles>
              </Link>
            </ProyectWapper>
          </Wrapper>
        </ProyectsWrapper>
      </Container>
    </Section>
    </>
  )
}

export default Portfolio
