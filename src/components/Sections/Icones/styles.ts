import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`px-4 py-8 max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-16 text-gray-600`}
`

export const Header = styled.header`
  ${tw`flex flex-col space-y-2 items-center justify-center text-center`};

  h2 {
    ${tw`text-purple-500 font-extrabold text-4xl leading-10 font-bold font-body`}
  }

  span {
    ${tw`leading-5 text-lg`};
  }
`

export const Icons = styled.ul`
  ${tw`list-none grid grid-cols-1 md:grid-cols-2 gap-4`};

  li {
    ${tw`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center`};

    .icon {
      ${tw`w-24 h-24 flex items-center justify-center text-pink-500`};
    }

    .texts {
      ${tw`text-center md:text-left leading-5 text-gray-600`};

      h4 {
        ${tw`text-purple-500 font-extrabold text-lg leading-7 font-bold font-body`};
      }
    }
  }
`
