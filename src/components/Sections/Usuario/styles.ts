import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`flex flex-col items-center justify-end overflow-hidden`}
  background: linear-gradient(358.11deg, #EC008C 1.58%, #833184 45.93%, #833184 98.44%);
  min-height: 26rem;
`

export const Content = styled.div`
  ${tw`px-4 max-w-screen-lg mx-auto flex flex-col md:flex-row justify-evenly items-end`}
`

export const Texts = styled.div`
  ${tw`h-96 flex flex-col justify-center space-y-4 w-full md:w-1/3`}

  h2 {
    ${tw`text-4xl font-extrabold text-white leading-10`}
  }

  p {
    ${tw`leading-5 font-medium text-pink-200`}
  }
`
export const Girl = styled(motion.div)`
  ${tw`h-96 flex flex-col justify-end items-center w-full md:w-1/2 relative`}
`
