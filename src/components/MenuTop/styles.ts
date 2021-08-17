import tw, { styled } from 'twin.macro'

export const Container = styled.header`
  ${tw`relative w-full flex justify-between items-center max-w-screen-lg mx-auto py-1 bg-white`}

  .logo {
    ${tw`w-48 h-16 md:w-52 flex items-center justify-center outline-none relative overflow-hidden px-2`}
    > div {
      ${tw`w-full`}
    }
  }

  button {
    ${tw`text-gray-800 px-2 w-16 h-16 flex justify-center items-center md:hidden hover:text-gray-600`}
  }

  .collapse {
    ${tw`bg-white shadow-lg md:shadow-none w-full pt-2 pb-4 absolute -mt-2 top-20 invisible transition-all ease-linear duration-300 opacity-0 md:opacity-100 md:relative md:p-4 md:visible md:block md:bg-transparent md:m-0 md:top-0 z-10`}

    nav {
      ${tw`flex flex-col md:flex-row justify-end items-center md:space-x-8`}

      .menu_links {
        ${tw`flex flex-col md:flex-row justify-end items-center md:space-x-4 p-2 text-center`}
      }

      .social_links {
        ${tw`flex justify-center items-center space-x-4 p-2`}
      }

      ul li a {
        ${tw`cursor-pointer text-gray-500 hover:text-red-400 border-none text-base font-semibold transition-all ease-linear duration-300`}
      }
    }

    &.show {
      ${tw`visible opacity-100`}
    }
  }
`
