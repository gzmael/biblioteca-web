import React from 'react'

import Image from 'next/image'

import { Container, Content, Texts, Girl } from './styles'

const Usuario = () => {
  return (
    <Container>
      <Content>
        <Texts>
          <h2>Economize em Produtos e Serviços!</h2>
          <p>
            Clientes Desconto Mania contam com mais de 24 mil estabelecimentos
            com descontos para que que você economize nas compras do dia a dia.
          </p>
        </Texts>
        <Girl>
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
