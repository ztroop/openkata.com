import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto`};
`

export const Text = styled.h1`
  ${tw`text-lg`};
`

export const Image = styled.figure`
  ${tw`w-20 mr-3`};
`
