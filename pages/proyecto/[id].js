import styled from 'styled-components'
import Layout from '../../components/layout/index.js'
import { proyects } from '../../public/data.js'
import { Container, PrimaryButton, Section, SectionTitle } from '../../styles/globals.js'

export const getStaticPaths = async () => {
  const paths = proyects.map(proyect => {
    return {
      params: { id: proyect.id }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id
  const info = proyects.find(proyectObj => proyectObj.id === id)
  return {
    props: {
      proyect: info
    }
  }
}

const ImageWrapper = styled.div`
margin-bottom: 2rem;
`
const Image = styled.img`
`
const DetailsWrapper = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`
const Details = styled.p`
  font-size: 1.8rem;
  color: #eeeeee;
  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`
const ButtonsWrapper = styled.div`

`
const ButtonLink = styled.a`
  margin-right: 2rem;
`
const Proyecto = ({ proyect }) => {
  return (
    <Layout>
      <Section>
        <Container>
          <SectionTitle>
            { proyect.title }
          </SectionTitle>
          <ImageWrapper>
            <Image src={proyect.image} alt={`${proyect.title}image`}/>
          </ImageWrapper>
          <DetailsWrapper>
            <Details>
              { proyect.details }
            </Details>
          </DetailsWrapper>
          <ButtonsWrapper>
            {
              proyect.git
                ? <ButtonLink href={proyect.git} target="_blank"><PrimaryButton>Visitar el Git</PrimaryButton></ButtonLink>
                : null
            }
            <ButtonLink href={proyect.link} target="_blank">
              <PrimaryButton>
                Visitar Pagina
              </PrimaryButton>
            </ButtonLink>
          </ButtonsWrapper>
        </Container>
      </Section>
    </Layout>
  )
}

export default Proyecto
