import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#F8F6F5',
  black: '#111',
  lightPurple: '#D3C6E3',
  mediumPurple: '#863584',
  darkPurple: '#4B2C6E'
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Comfortaa, sans-serif;
    list-style: none;
    }

  body {
    background-color: ${colors.lightPurple};
    color: ${colors.darkPurple};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`