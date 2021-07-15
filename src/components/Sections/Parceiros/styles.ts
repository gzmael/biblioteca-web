import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`px-4 py-8 max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-16 text-gray-600 bg-white`}

  .logos {
    ${tw`relative w-full h-96`}
  }
`

export const Header = styled.header`
  ${tw`flex flex-col space-y-2 items-center justify-center text-center`};

  h2 {
    ${tw`text-purple-500 font-extrabold text-4xl leading-10 font-bold font-body`}
  }

  p {
    ${tw`leading-5 text-lg`};
  }
`
