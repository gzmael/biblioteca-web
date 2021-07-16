import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`relative flex items-center justify-center`}
`

export const Content = styled.div`
  ${tw`px-4 py-8 max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-around`}

  .texts {
    ${tw`flex flex-col items-center space-y-4 md:w-2/5`};

    .logoBiblio {
      ${tw`relative w-1/2 h-24`}
    }
    h1 {
      ${tw`font-bold text-3xl text-red-300 text-center leading-10`};
    }
    p {
      ${tw`text-center leading-5 text-gray-600`}
    }

    .buttons {
      a {
        ${tw`cursor-pointer flex items-center justify-center h-10 px-10 py-2 bg-red-400 hover:bg-red-300 text-white font-bold w-full rounded`};
        svg {
          ${tw`mr-2`}
        }
      }
    }
  }

  .device {
    ${tw`relative w-2/3 sm:w-1/2 md:w-80 h-80 md:h-96 flex justify-center items-center z-0 `};

    > img {
      ${tw`h-72 md:h-96 mx-auto z-10 absolute bg-opacity-50`};
    }

    span {
      ${tw`absolute h-16 w-16 flex items-center justify-center z-10 origin-center`};

      &.book1 {
        ${tw`z-0 h-14 w-14 left-0`};
      }

      &.book2 {
        ${tw`top-20 h-10 w-10 left-4 transform -rotate-90`};
      }

      &.book3 {
        ${tw`top-10 h-10 w-10 left-16 transform rotate-180`};
      }

      &.book4 {
        ${tw`top-10 h-12 w-12 right-8 transform rotate-45`};
      }

      &.book5 {
        ${tw`top-20 h-12 w-12 right-2`};
      }

      &.book6 {
        ${tw`right-0 h-14 w-14`};
      }

      img {
        ${tw`h-8`};
      }
    }
  }
`
