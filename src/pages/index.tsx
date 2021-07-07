import React from 'react'

import { SEO } from '@components/SEO'
import { Sections } from '@components/Sections'
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
