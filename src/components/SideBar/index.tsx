import React from 'react'

import * as Styled from './styles'

interface MenuItem {
  id: string
  frontmatter: {
    title: string
  }
}

interface Props {
  children: React.ReactNode
  menuTitle: React.ReactNode
  menuItems: MenuItem[]
  currentItem: any
}

const SideBar: React.FC<Props> = ({
  children,
  menuTitle,
  menuItems,
  currentItem,
}) => {
  return (
    <Styled.SplitScreen>
      <Styled.SideBar>
        <Styled.SideBarTitle>{menuTitle}</Styled.SideBarTitle>
        <Styled.MenuSection>
          {menuItems.map((item) => (
            <Styled.MenuItem onClick={() => currentItem(item.id)}>
              {item.frontmatter.title}
            </Styled.MenuItem>
          ))}
        </Styled.MenuSection>
      </Styled.SideBar>
      <Styled.Content>{children}</Styled.Content>
    </Styled.SplitScreen>
  )
}

export default SideBar
