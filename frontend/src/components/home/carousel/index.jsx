import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles"; 

const Carousel = () => {
  const settings = {
    dots: true, // Mostra os indicadores abaixo
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantas imagens mostrar de cada vez
    slidesToScroll: 1, // Quantas imagens rolar de cada vez
    autoplay: true, // Carrossel automático
    autoplaySpeed: 3000, // Velocidade do autoplay
  };

  return (
    <S.CarouselContainer>
      <Slider {...settings}>
        <div>
          <S.Image src="https://via.placeholder.com/800x300" alt="Imagem 1" />
        </div>
        <div>
          <S.Image src="https://via.placeholder.com/800x300" alt="Imagem 2" />
        </div>
        <div>
          <S.Image src="https://via.placeholder.com/800x300" alt="Imagem 3" />
        </div>
      </Slider>
    </S.CarouselContainer>
  );
};

export default Carousel;
