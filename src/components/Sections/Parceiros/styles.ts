import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`flex flex-col justify-center items-center space-y-4 py-8 `}
  h2 {
    ${tw`font-extrabold text-4xl leading-10 font-bold font-body`}
  }
  .logos {
    ${tw`flex flex-col sm:flex-row justify-center items-center sm:space-x-4`}
    .logo {
      ${tw`relative h-48 w-44`}
    }
  }
`
