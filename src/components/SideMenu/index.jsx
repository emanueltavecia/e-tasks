import {
  CheckCircle,
  Folder,
  House,
  Note,
  PlusSquare,
  SignOut,
  X,
} from '@phosphor-icons/react'

import { Button, Container, Footer, Header, Nav, Title } from './styles'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          <CheckCircle /> e-Tasks
        </Title>

        {menuIsOpen && (
          <Button onClick={onCloseMenu}>
            <X />
          </Button>
        )}
      </Header>

      <Nav>
        <a href="#" data-menu-active="true">
          <House /> Home
        </a>
        <a href="#">
          <PlusSquare /> Nova tarefa
        </a>
        <a href="#">
          <Folder /> Projetos
        </a>
        <a href="#">
          <Note /> Relatórios
        </a>
      </Nav>

      <Footer>
        <img
          src="https://github.com/emanueltavecia.png"
          alt="Foto do usuário"
        />
        <div>
          <strong>Emanuel Tavecia</strong>
          <small>emanuel@mail.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  )
}
