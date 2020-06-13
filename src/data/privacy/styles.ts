import styled from 'styled-components'
import tw from 'tailwind.macro'

export const TextField = styled.div`
  ${tw`text-base w-full pb-4`};
`

export const Title = styled(TextField)`
  ${tw`text-xl font-semibold`};
`

export const SubTitle = styled(TextField)`
  ${tw`text-lg font-semibold`};
`

export const SmallTitle = styled(TextField)`
  ${tw`font-semibold`};
`

export const LastUpdated = styled(TextField)`
  ${tw`text-sm text-orange-600`};
`

export const DefinitionList = styled.ul`
  ${tw`p-2 pl-4`};
`

export const DefinitionItem = styled.li`
  ${tw`p-1 pl-4 list-disc`};
`
