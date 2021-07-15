import React from 'react'

import Image from 'next/image'

import { Container, Header } from './styles'

const Parceiros = () => {
  return (
    <Container id="parceiros">
      <Header>
        <h2>Conheça alguns de nossos parceiros</h2>
        <p>24 mil estabelecimentos em todo o país</p>
      </Header>
      <div className="logos">
        <Image
          src="/assets/images/empresas.png"
          layout="fill"
          objectFit="contain"
          alt="Logos Empresas parceiras"
        />
      </div>
    </Container>
  )
}

export { Parceiros }
