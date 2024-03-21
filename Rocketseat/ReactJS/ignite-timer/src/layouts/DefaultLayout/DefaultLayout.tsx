import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LayoutContainer } from './style'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header></Header>
      {/* Conteúdo com outlet */}
      <Outlet></Outlet>
    </LayoutContainer>
  )
}
