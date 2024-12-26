import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 80%; 
  margin: 0 auto; 
  padding: 20px;

  .slick-prev,
  .slick-next {
    color: #333; 
  }

  .slick-dots li button:before {
    color: #6b46c1; /* Cor dos indicadores */
  }

  .slick-dots li.slick-active button:before {
    color: #9b5de5; /* Cor do indicador ativo */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
`;
