import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`bg-blue-100 text-gray-500 text-center py-2 text-xs`}

  p {
    ${tw`w-2/3 sm:w-full mx-auto`}
    span {
      ${tw`text-red-700`}
    }

    a {
      ${tw`text-blue-400 hover:text-blue-600`}
    }
  }
`
