import React from 'react'

import { ComoUsar } from './ComoUsar'
import { Hero } from './Hero'
import { Icones } from './Icones'
import { Parceiros } from './Parceiros'
import { Usuario } from './Usuario'

const Sections = () => {
  return (
    <>
      <Hero />
      <Icones />
      <Usuario />
      <ComoUsar />
      <Parceiros />
    </>
  )
}

export { Sections }
