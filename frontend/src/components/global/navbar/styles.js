import styled from "styled-components";
import { colors } from "../../../styles/global";

// Upper Container
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  margin-left: 15px;
`

export const RegistrationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const FirstOption = styled.a`
  margin-left: 15px; 
  margin-right: 15px; 
  text-decoration: none;
  position: relative;
  color: ${colors.darkPurple}; /* Cor inicial */

  &:hover,
  &:active {
    color: ${colors.darkPurple}; /* Cor ao passar o mouse */
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%; /* Inicia com largura 0% */
    height: 2px;
    background-color: ${colors.darkPurple}; /* Cor da linha */
    bottom: -5px;
    left: 50%; /* Começa do centro */
    transition: width 0.4s ease, left 0.4s ease; /* Transição suave */
  }

  &:hover::after,
  &:active::after {
    width: 50%; /* Expande para 50% */
    left: 25%; /* Centraliza a linha */
  }
`;

export const SecondOption = styled.a`
  margin-left: 15px; 
  margin-right: 15px; 
  text-decoration: none;
  position: relative;
  color: ${colors.darkPurple}; 

  &:hover,
  &:active {
    color: ${colors.darkPurple}; 
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%; /* Inicia com largura 0% */
    height: 2px;
    background-color: ${colors.darkPurple}; /* Cor da linha */
    bottom: -5px;
    left: 50%; /* Começa do centro */
    transition: width 0.4s ease, left 0.4s ease; /* Transição suave */
  }

  &:hover::after,
  &:active::after {
    width: 50%; /* Expande para 50% */
    left: 25%; /* Centraliza a linha */
  }
`;


// Navbar Container
export const NavContainer = styled.div`
margin-top: 15px;
  padding: 20px 20px;
  border-top: 1px solid ${colors.white}; 
  border-bottom: 1px solid ${colors.white}; 
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 20px; 
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-weight: ${(props) => (props.active ? "bold" : "normal")}; /* Negrito no item ativo */
  position: relative;
  color: ${colors.darkPurple};
  transition: color 0.2s ease;

  &:hover{
    color: ${colors.darkPurple}; 
  }

  &:after {
    content: ""; 
    position: absolute;
    width: ${(props) => (props.active ? "50%" : "0")}; /* Sub-linha visível apenas no item ativo */
    height: 2px;
    background-color: ${colors.darkPurple};
    bottom: -5px;
    left: 50%; /* Começa do centro */
    transform: translateX(-50%); /* Ajusta a linha para centralizar */
    transition: width 0.4s ease, left 0.4s ease; /* Suaviza a animação */
  }

  &:hover:after {
    width: 50%; /* Mostra a linha ao passar o mouse */
    left: 50%; /* Garante que a linha fique centralizada */
  }
`;

