import styled from "styled-components";
import { colors } from "../../../styles/global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top:0;
  padding: 5px;
  background-color: ${colors.black};
  z-index: 1000;
`

export const Call = styled.p`
  font-weight: bold;
  color: ${colors.white};
`