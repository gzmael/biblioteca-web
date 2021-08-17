import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-x-4 md:space-y-0 my-2`}

  .wrapper {
    ${tw`w-full flex flex-col-reverse md:flex-row justify-between items-center md:space-x-2 `}
    input {
      ${tw`mb-2 md:mb-0 px-4 py-2 bg-white w-full rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50`}
    }
  }
`

export const DropDown = styled.div`
  ${tw`relative w-full md:w-1/2`}

  > button {
    ${tw`w-full bg-gray-400 text-gray-600 font-semibold py-2 rounded-full flex items-center justify-center text-sm shadow-md transition-all ease duration-300`}
  }

  ul {
    ${tw`mt-1 absolute z-10 w-full bg-gray-400 py-2 flex flex-col justify-center items-center rounded-lg opacity-0 invisible transition-all ease duration-300 overflow-hidden`}
    li {
      button {
        ${tw`cursor-pointer w-full text-center text-gray-600 hover:text-gray-700 transition-all ease duration-300 text-sm py-1`}
      }
    }
  }

  &:hover {
    > button {
      ${tw`bg-gray-500 text-gray-200`}
    }
    > ul {
      ${tw`opacity-100 visible`}
    }
  }
`

export const Button = styled.button`
  ${tw`w-full sm:w-52 bg-red-400 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded-full flex justify-center items-center text-sm shadow-md transition-all ease duration-300`}
  svg {
    ${tw`mr-1`}
  }
`
