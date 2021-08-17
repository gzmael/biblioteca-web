import tw, { styled } from 'twin.macro'

export const Container = styled.footer`
  ${tw`bg-blue-100 text-gray-500 text-center py-8 text-xs`}

  nav {
    ${tw`px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 justify-center items-center md:items-start py-4 max-w-screen-lg mx-auto`}

    .logo {
      ${tw`relative h-16 w-40 mx-auto`}
    }

    ul {
      ${tw`mt-4 md:mt-0`}
      a {
        ${tw`cursor-pointer text-sm text-gray-500 flex justify-center`}
      }
    }
  }

  p {
    ${tw`w-2/3 pt-4 sm:w-full mx-auto border-t border-gray-400`}
    span {
      ${tw`text-red-700`}
    }

    a {
      ${tw`text-blue-400 hover:text-blue-600`}
    }
  }
`
