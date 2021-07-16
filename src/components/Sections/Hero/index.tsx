/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from 'react-scroll'

import { Container, Content } from './styles'

const Hero = () => (
  <Container id="hero">
    <Content>
      <div className="texts">
        <Image
          src="/assets/images/logo-vertical.svg"
          alt="Logo Biblioteca Pública Municipal de Várzea Alegre"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
        <h1>Cupons de Descontos para todas as manias!</h1>
        <p>
          Ficou ainda mais fácil encontrar aquele livro que tanto estava
          querendo ler. Encontre aqui as principais obras que estão no Domínio
          Público.
        </p>
        <Link to="busca">Buscar Livro</Link>
      </div>
      <div className="device">
        <motion.span
          className="cart"
          animate={{ right: [-34, -30, -34], y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img src="/assets/images/books.svg" alt="Books" />
        </motion.span>
        <img src="/assets/images/girl.svg" alt="Girl reading a book" />
      </div>
    </Content>
  </Container>
)

export { Hero }
