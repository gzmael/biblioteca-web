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
          <h2>Como usar o Desconto Mania</h2>
        </Header>
        <Grid>
          <motion.li
            custom={0}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="texts">
              <h4>Baixe o Aplicativo</h4>
              <p>Baixe gratuitamente o nosso app na App Store e Google Play.</p>
            </div>
            <div className="icon">
              <Finding />
            </div>
          </motion.li>
          <motion.li
            custom={1}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="icon">
              <Authors />
            </div>
            <div className="texts">
              <h4>Cashback Exclusivos</h4>
              <p>Receba dinheiro de volta durante o pagamento.</p>
            </div>
          </motion.li>
        </Grid>
      </Content>
    </Container>
  )
}

export { ComoUsar }
