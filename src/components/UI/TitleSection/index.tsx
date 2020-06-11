import React from 'react'

import * as Styled from './styles'

interface Props extends Styled.StyledProps {
    title: string
}

const TitleSection: React.FC<Props> = ({ center, title }) => (
    <Styled.TitleSection>
        <Styled.Title center={center}>{title}</Styled.Title>
    </Styled.TitleSection>
)

export default TitleSection
