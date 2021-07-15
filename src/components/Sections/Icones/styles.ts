import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`px-4 py-8 max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-16 text-gray-600 bg-white relative`}
`
export const Button = styled.button`
  ${tw`bg-white -mt-5 mx-auto w-40 h-10 flex items-center justify-center shadow-md rounded-full absolute top-0 text-purple-500 hover:text-pink-500 transition-all ease duration-300`}
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
  ${tw`list-none grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-md`};

  li {
    ${tw`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start items-center`};

    .icon {
      ${tw`w-24 h-24 flex items-center justify-center text-pink-500 `};
    }

    .texts {
      ${tw`text-center text-sm md:text-left leading-5 text-gray-600`};

      h4 {
        ${tw`text-purple-500 font-extrabold text-xl leading-7 font-bold font-body`};
      }
    }
  }
`
