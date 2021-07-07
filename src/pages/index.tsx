import React from 'react'

import { Sections } from '@components/Sections'
import { SEO } from '@components/SEO'
import { Main } from '@layouts/Main'

const Home = () => {
  return (
    <Main>
      <SEO title="Outro" />
      <Sections />
    </Main>
  )
}

export default Home
