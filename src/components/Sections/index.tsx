import React from 'react'

import { ComoUsar } from './ComoUsar'
import { Hero } from './Hero'
import { Icones } from './Icones'
import { Usuario } from './Usuario'

const Sections = () => {
  return (
    <>
      <Hero />
      <Icones />
      <Usuario />
      <ComoUsar />
    </>
  )
}

export { Sections }
