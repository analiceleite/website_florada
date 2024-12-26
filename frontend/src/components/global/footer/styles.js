import styled from "styled-components";
import { colors } from "../../../styles/global";

export const FooterContainer = styled.footer`
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

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 20px;
`;

export const FeatureCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 200px;
  text-align: center;

  p {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }

  svg {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const BottomSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const Column = styled.div`
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 14px;
    margin: 5px 0;
    color: #555;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 14px;
    margin: 5px 0;
    color: #555;
  }
`;