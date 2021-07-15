import React from 'react'

import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { Container, Content, Texts, Girl } from './styles'

const Usuario = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    delay: 300
  })
  const variantsText: Variants = {
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.75,
        ease: 'easeOut',
        duration: 0.3
      }
    }),
    hidden: { opacity: 0, x: -100 }
  }

  const variantsGirl: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.75 * 2,
        ease: 'easeOut',
        duration: 0.4
      }
    },
    hidden: { opacity: 0, x: 50 }
  }
  return (
    <Container ref={ref}>
      <Content>
        <Texts>
          <motion.h2
            custom={0}
            animate={inView ? 'visible' : 'hidden'}
            variants={variantsText}
          >
            Economize em Produtos e Serviços!
          </motion.h2>
          <motion.p
            custom={1}
            animate={inView ? 'visible' : 'hidden'}
            variants={variantsText}
          >
            Clientes Desconto Mania contam com mais de 24 mil estabelecimentos
            com descontos para que que você economize nas compras do dia a dia.
          </motion.p>
        </Texts>
        <Girl animate={inView ? 'visible' : 'hidden'} variants={variantsGirl}>
          <Image
            src="/assets/images/girl.png"
            alt="Garota com smartphone usando o Desconto Mania"
            objectFit="contain"
            layout="fill"
            quality={85}
          />
        </Girl>
      </Content>
    </Container>
  )
}

export { Usuario }
