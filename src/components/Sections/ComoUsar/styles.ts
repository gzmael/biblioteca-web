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
    ${tw`text-purple-500 font-extrabold text-4xl leading-10 font-bold font-body`}
  }
`

export const Grid = styled.ul`
  ${tw`list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-md`};

  li {
    ${tw`flex flex-col space-y-2 justify-center items-center`};

    .icon {
      ${tw`h-auto flex items-center justify-center`};
    }

    .texts {
      ${tw`text-center text-sm leading-5 text-gray-600`};

      h4 {
        ${tw`text-purple-500 font-extrabold text-lg leading-7 font-bold font-body`};
      }
    }
  }
`
