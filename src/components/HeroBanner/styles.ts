import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Hero = styled.div`
  ${tw`flex flex-auto`};
`

export const HeroSection = styled.div`
  ${tw`w-full sm:w-1/2`};
`

export const WowText = styled.div`
  margin-left: 15px;
  position: relative;
  top: 40%;
  -ms-transform: translateY(-40%);
  transform: translateY(-40%);
  font-size: 30px;

  @media screen and (max-width: 700px) {
    top: 0%;
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }
`

export const WowSubText = styled(WowText)`
  font-size: 20px;
`

export const WowImg = styled.div``
