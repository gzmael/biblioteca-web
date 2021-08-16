import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`px-4 py-8 w-full text-gray-600 bg-blue-100`}
`
export const Content = styled.main`
  ${tw`max-w-screen-lg mx-auto flex flex-col items-center justify-start space-y-4`}
`

export const Header = styled.header`
  ${tw`flex flex-col space-y-2 items-center justify-center text-center`};

  h2 {
    ${tw`text-gray-700 font-extrabold text-4xl leading-10 font-bold font-body`}
  }

  span {
    ${tw`leading-5 text-lg`};
  }
`

export const BotaoCarregar = styled.button`
  ${tw`bg-red-400 text-white font-bold px-8 py-2 rounded-lg`}
`

export const Books = styled.ul`
  ${tw`mt-2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center`}
`

export const BookItem = styled.li`
  width: 228px;
  ${tw`cursor-pointer bg-red-100 relative h-80 md:h-60 md:w-44 overflow-hidden shadow-md`}
  a {
    ${tw`cursor-pointer relative h-80 md:h-60 md:w-44`}
    > div {
      width: 228px;
      ${tw`h-80 md:h-60 md:w-44`}
      img {
        ${tw`w-full`}
      }
    }
  }
`

export const Modal = styled(motion.div)`
  ${tw`z-50 bg-black bg-opacity-50 fixed w-screen h-screen flex justify-center items-center top-0 p-4`}
  .container {
    ${tw`p-4 bg-white rounded-lg shadow-lg w-full max-w-lg relative`}
    .close {
      ${tw`absolute right-2 -top-4 bg-gray-300 rounded-full p-2 shadow-md`}
    }

    .content {
      ${tw`w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-gray-900 sm:space-x-2 text-xs leading-4`}
      .cover {
        ${tw`relative w-44 h-52 sm:h-40`}
      }
      .description {
        ${tw`w-full flex flex-col sm:flex-col mt-2 sm:mt-0`}
        h4 {
          ${tw`text-xl sm:text-lg font-bold leading-5`}
        }
        span.author {
          ${tw`text-red-500 font-medium`}
        }
        p {
          ${tw`leading-4 m-0 mt-2`}
        }
        ul {
          ${tw`m-0 mt-2 grid grid-cols-2 gap-0`}
          li {
            ${tw`w-full`}
            span {
              ${tw`font-bold`}
            }
          }
        }
        footer {
          ${tw`w-full flex items-center justify-between mt-2`}
          span, a {
            ${tw`w-full flex justify-center items-center py-2`}
          }
          span {
            ${tw`text-gray-500`}
          }
          a {
            ${tw`bg-red-500 hover:bg-red-300 transition-all ease duration-300 text-white font-bold rounded`}
          }
          svg {
            ${tw`mr-2`}
          }
        }
      }
    }
  }
`
