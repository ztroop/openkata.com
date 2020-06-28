import styled from 'styled-components'
import tw from 'tailwind.macro'

export const SplitScreen = styled.div`
  ${tw`min-h-screen md:flex`};
`

export const SideBar = styled.div`
  ${tw`flex-none w-full md:max-w-xs bg-gray-100 border border-gray-200 p-8`};
`

export const SideBarTitle = styled.div`
  ${tw`text-gray-600 text-sm font-hairline tracking-widest`};
`

export const Content = styled.div`
  ${tw`flex-1 bg-blue text-gray-800 p-8`};
`

export const MenuSection = styled.div`
  ${tw`pt-3`};
`

export const MenuItem = styled.div`
  ${tw`text-gray-800 relative border-b border-transparent hover:text-gray-600 py-1`};
  width: max-content;

  &.active {
    ${tw`border-orange-500`};
  }

  &:before {
    ${tw`absolute w-full bg-orange-500 h-px left-0 invisible`};
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`
