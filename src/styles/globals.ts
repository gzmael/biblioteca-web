import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const CustomStyles = createGlobalStyle`
* {
  ${tw`m-0 p-0 outline-none box-border`};
}
*:focus{
  ${tw`outline-none`};
}
*::selection{
  ${tw`bg-blue-500 bg-opacity-25`};
}
button {
  ${tw`outline-none focus:outline-none`}
}
html, :root{
  ${tw`h-screen w-screen antialiased`}
}

body {
  ${tw`antialiased w-screen bg-white text-gray-700 overflow-x-hidden font-body`};
}

a {
  ${tw`text-red-500 font-bold`};
}

a:hover {
  ${tw`text-red-300`};
}

.content p {
  ${tw`my-4`};
}

.content p {
  ${tw`my-4 leading-7`};
}

.content h1, .content h3{
  ${tw`font-bold text-gray-900`};
}

.content h1 {
  ${tw`text-3xl text-center`};
}

.content h3 {
  ${tw`text-2xl`};
}

.content h5 {
  ${tw`text-lg text-blue-500 font-bold`};
}

.content ul {
  ${tw`my-6`};
}

section {
  min-height: 80vh;
}

section#hero {
  min-height: 550px;
}

`
