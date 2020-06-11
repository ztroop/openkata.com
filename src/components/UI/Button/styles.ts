import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export interface StyledProps {
    primary?: boolean
    block?: boolean
}

export const Button = motion.custom(styled.button<StyledProps>`
    outline: none !important;
    ${tw`py-2 px-8 rounded-full border border-orange-500 text-gray-100`};

    ${({ primary }) => (primary ? tw`bg-orange-500` : tw`text-orange-600`)};

    ${({ block }) => block && tw`w-full`};
`)
