import React from 'react'

import { Config } from '@utils/Config'

import { Container } from './styles'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Container>
      <p>
        © Copyright {date}
        {' - '}
        {Config.defaultTitle}. Desenvolvido com{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        por <a href="https://baitasolucoes.com.br">Baita Soluções</a>.
      </p>
    </Container>
  )
}

export { Footer }
