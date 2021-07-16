import React from 'react'

import { Variants, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Authors from '../../../../public/assets/images/authors.svg'
import Finding from '../../../../public/assets/images/finding.svg'
import { Container, Content, Header, Grid } from './styles'

const ComoUsar = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 300
  })
  const variants: Variants = {
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.75,
        ease: 'easeOut',
        duration: 0.3
      }
    }),
    hidden: { opacity: 0, scale: 0.85 }
  }
  return (
    <Container id="como-usar" ref={ref}>
      <Content>
        <Header>
          <h2>Como Funciona?</h2>
        </Header>
        <Grid>
          <motion.li
            custom={0}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className="finding"
          >
            <div className="texts">
              <h4>Domínio Público</h4>
              <p>
                Os livros que são sugeridos aqui em nossa página é de Domínio
                Público e está disponibilizado para ser baixado e livro a
                qualquer momento por qualquer pessoa.
              </p>
            </div>
            <div className="icon">
              <Finding />
            </div>
          </motion.li>
          <motion.li
            custom={1}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className="authors"
          >
            <div className="icon">
              <Authors />
            </div>
            <div className="texts">
              <h4>Autores Locais</h4>
              <p>
                Nossa base também conta com livros autorais de personalidades de
                Várzea Alegre.
              </p>
            </div>
          </motion.li>
        </Grid>
      </Content>
    </Container>
  )
}

export { ComoUsar }
