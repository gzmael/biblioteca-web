import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`bg-gray-100 flex flex-col items-center justify-center py-10`}
`

export const Content = styled.div`
  ${tw`px-8 md:px-0 max-w-screen-lg mx-auto flex flex-col justify-center items-center space-y-8`}
`

export const Header = styled.header`
  ${tw`flex flex-col space-y-2 items-center justify-center text-center`};

  h2 {
    ${tw`font-extrabold text-4xl leading-10 font-bold font-body`}
  }
`

export const Grid = styled.ul`
  ${tw`list-none flex flex-col w-full space-y-8 max-w-screen-md`};

  li {
    ${tw`flex flex-col sm:flex-row space-y-2 sm:space-x-8 justify-center items-center`};

    &.finding {
      ${tw`flex-col-reverse sm:flex-row`}
    }
    .icon {
      ${tw`w-full sm:w-1/3 flex items-center justify-center`};
      svg {
        ${tw`w-full`}
      }
    }

    .texts {
      ${tw`w-full sm:w-1/2 text-center text-sm leading-5 text-gray-600`};

      h4 {
        ${tw`font-extrabold text-lg leading-7 font-bold font-body`};
      }
    }
  }
`
