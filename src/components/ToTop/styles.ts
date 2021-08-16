import React from 'react'

import tw, { styled, theme } from 'twin.macro'

interface Props {
  children?: React.ReactNode
}

export const ButtonScroll = styled.button<Props>`
  ${tw`rounded-full w-12 h-12 shadow-lg text-white flex items-center justify-center`};
  background: ${theme`colors.red.500`};
  background: -webkit-linear-gradient(
    to top,
    ${theme`colors.red.500`} 0%,
    ${theme`colors.red.400`} 100%
  );
  background: -moz-linear-gradient(
    to top,
    ${theme`colors.red.500`} 0%,
    ${theme`colors.red.400`} 100%
  );
  background: linear-gradient(
    to top,
    ${theme`colors.red.500`} 0%,
    ${theme`colors.red.400`} 100%
  );
`
