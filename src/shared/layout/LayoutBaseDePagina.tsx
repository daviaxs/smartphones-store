import React from 'react'
import styled from 'styled-components'
import { Header } from './utils/Header'

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`

export function LayoutBaseDePagina({ children }: ILayoutBaseDePaginaProps) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}