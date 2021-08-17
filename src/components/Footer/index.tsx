import React from 'react'

import Image from 'next/image'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { Link as LinkScroll } from 'react-scroll'

import { Config } from '@utils/Config'

import { Container } from './styles'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Container>
      <nav>
        <div className="logo">
          <Image
            src="/assets/images/logo-secretaria.svg"
            alt="Logo Biblioteca"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <ul>
          <li>
            <LinkScroll to="como-funciona" smooth duration={1000}>
              Como Funciona
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="busca" smooth offset={50} duration={1000}>
              Pesquisar
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="parceiros" smooth offset={50} duration={1000}>
              Parceiros
            </LinkScroll>
          </li>
          <li>
            <a href="http://www.dominiopublico.gov.br/">Domínio Público</a>
          </li>
          <li>
            <a href="https://www.biblivre.org.br/">Biblivre</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="mailto:bibliotecapublicava@gmail.com">Contate-nos</a>
          </li>
          <li>
            <a href="https://www.facebook.com/BibliotecaProfessorAlminoGabrielViana">
              <IoLogoFacebook size={24} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <IoLogoInstagram size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <p>
        © Copyright {date}
        {' - '}
        {Config.defaultTitle}. Desenvolvido com{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>{' '}
        pela{' '}
        <a href="https://www.facebook.com/eeepdoutorjoseirancosta">
          EEEP Dr José Iran Costa
        </a>
        .
      </p>
    </Container>
  )
}

export { Footer }
