import React from 'react'

import { Sections } from '@components/Sections'
import { SEO } from '@components/SEO'
import { ToTop } from '@components/ToTop'
import { Main } from '@layouts/Main'

const Home = () => {
  return (
    <Main>
      <SEO title="BPM Professor Almino Gabriel Viana" />
      <Sections />
      <ToTop />
    </Main>
  )
}

export default Home
