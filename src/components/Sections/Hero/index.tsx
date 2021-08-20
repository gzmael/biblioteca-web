/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-scroll'
import { v4 as uuid } from 'uuid'

import { Container, Content } from './styles'

const Hero = () => {
  const arr = [...Array(6)].map((item, index) => {
    return {
      key: uuid(),
      class: `book${index + 1}`,
      image: `/assets/icons/book${(index % 3) + 1}.svg`
    }
  })

  const variants: Variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 3,
        repeat: Infinity,
        type: 'spring',
        stiffness: 50
      },
      marginTop: [-5, 5, -5]
    }),
    hidden: { opacity: 0 }
  }

  return (
    <Container id="hero">
      <h1>
        Biblioteca Digital da <br />
        Biblioteca Pública de Várzea Alegre
      </h1>
      <Content>
        <div className="texts">
          <blockquote>
            <em>
              &quot;A leitura dos bons livros é sempre um passeio por diferentes
              lugares, culturas diversas, modos de ser, visões de mundo, e a
              aprendizagem das formas e estilos singulares que materializam tudo
              isso em palavras, expressões e frases que educam, informando e,
              sobretudo, formando o ser humano. Quem lê conhece e produz ideias.
              Quem lê melhora a vida, prolonga. Essas possibilidades de uma nova
              vida, um novo olhar sobre nós mesmos e o mundo, estão bem próximos
              de todos nós, estão nos livros, nas palavras geradoras de
              conhecimento, espírito crítico e poder de transformação&quot;
            </em>{' '}
            &ndash; Dagoberto Diniz
          </blockquote>
          <div className="buttons">
            <Link to="busca" smooth offset={50} duration={1000}>
              <IoSearch size={24} /> Buscar Livro
            </Link>
          </div>
        </div>
        <div className="device">
          {arr.map((item, index) => (
            <motion.span
              custom={index}
              key={item.key}
              className={item.class}
              animate="visible"
              variants={variants}
            >
              <Image
                src={item.image}
                alt="Book Icon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </motion.span>
          ))}

          <img src="/assets/images/girl.svg" alt="Girl reading a book" />
        </div>
      </Content>
    </Container>
  )
}

export { Hero }
