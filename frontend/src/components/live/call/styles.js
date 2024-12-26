import styled from "styled-components";
import { colors } from "../../../styles/global";

export const CallContainer = styled.footer`
  margin-top: 30px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${colors.darkPurple};
  }

  p {
    font-size: 14px;
    color: #555;
    max-width: 700px;
  }
`;