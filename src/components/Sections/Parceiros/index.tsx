import React from 'react'

import Image from 'next/image'

import logoEscola from '../../../../public/assets/images/brasao.png'
import logoCurso from '../../../../public/assets/images/curso.png'
import { Container } from './styles'

const Parceiros = () => {
  return (
    <Container id="parceiros">
      <h2>Parceiros</h2>
      <div className="logos">
        <div className="logo">
          <Image
            src={logoEscola}
            alt="Logo EEEP Dr José Iran Costa"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
        </div>
        <div className="logo">
          <Image
            src={logoCurso}
            alt="Logo Curso Técnico em Informática"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  )
}
export { Parceiros }
