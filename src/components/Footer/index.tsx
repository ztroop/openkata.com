import Container from 'components/UI/Container'
import React from 'react'

import * as Styled from './styles'

const Footer: React.FC = () => (
    <Styled.Footer>
        <Container>
            <Styled.Links>
                <Styled.Link
                    href="https://github.com/openkata"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    GitHub
                </Styled.Link>
                <Styled.Link
                    href="https://github.com/openkata/incubator"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Incubator
                </Styled.Link>
                <Styled.Link
                    href="https://discord.gg/QTfjVzv"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Discord
                </Styled.Link>
            </Styled.Links>
        </Container>
    </Styled.Footer>
)

export default Footer
