import * as S from './styles'
import Input from '../input';
import { TbHanger, TbShoppingCart } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <TbHanger size={24} color="black" />
          <S.Title>Florada Brechó</S.Title>
        </S.TitleContainer>
        <Input />
        <S.RegistrationContainer>
          <TbShoppingCart size={24} color="black" />
          <S.FirstOption href="#">Cadastrar-se</S.FirstOption >
          <S.SecondOption href="#">Iniciar Sessão</S.SecondOption>
        </S.RegistrationContainer>
      </S.MainContainer>
      <S.NavContainer>
        <S.NavList>
          <S.NavItem>
            <S.NavLink href="/home">
              Início
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#">Produtos</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/live">Pagar Live</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#">Sacolinhas</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#">Dúvidas</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.NavContainer>
    </>
  )
}

export default Navbar;