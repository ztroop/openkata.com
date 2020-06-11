import styled from 'styled-components'
import tw from 'tailwind.macro'

export interface StyledProps {
    center?: boolean
}

export const InfoBlock = styled.div<StyledProps>`
    ${tw`flex items-stretch my-4 mx-3 p-4 bg-gray-100 rounded-lg border border-gray-300`};
    ${({ center }) => center && tw`items-center`};
`

export const Icon = styled.span`
    font-size: 35px;
    ${tw`flex items-center justify-center w-20 h-20 text-orange-500 bg-white border border-gray-300 rounded-full mb-2 border-2 p-10`};
`

export const Wrapper = styled.div<StyledProps>`
    ${tw`px-4`};
`

export const Title = styled.h3`
    ${tw`text-md mt-1 font-semibold`};
`

export const Content = styled.p`
    ${tw`mt-1`};
`
