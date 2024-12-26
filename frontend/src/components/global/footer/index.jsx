import React from "react";
import { TbCreditCard, TbLock, TbShoppingCart } from "react-icons/tb";
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      {/* Top Section */}
      <S.TopSection>
        <h3>
          Descubra uma das maiores lojas online de remessa e brechós do mundo.
        </h3>
        <p>
          Como uma das maiores plataformas de revenda on-line do mundo de
          roupas, sapatos e acessórios femininos e infantis, nossa missão é
          inspirar uma nova geração de compradores a pensar primeiro em roupas
          de segunda mão.
        </p>
      </S.TopSection>

      {/* Features */}
      <S.FeaturesContainer>
        <S.FeatureCard>
          <TbShoppingCart color="black" />
          <p>ENVIAMOS SUAS COMPRAS</p>
          <p>Entrega em todo país</p>
        </S.FeatureCard>
        <S.FeatureCard>
          <TbCreditCard color="black"/>
          <p>PAGUE COMO QUISER</p>
          <p>Pix, Boleto, Cartão</p>
        </S.FeatureCard>
        <S.FeatureCard>
          <TbLock color="black"/>
          <p>COMPRE COM SEGURANÇA</p>
          <p>Seus dados sempre protegidos</p>
        </S.FeatureCard>
      </S.FeaturesContainer>

      {/* Bottom Section */}
      <S.BottomSection>
        <S.Column>
          <h4>NAVEGAÇÃO</h4>
          <ul>
            <li>Início</li>
            <li>Produtos</li>
            <li>Pagar Live</li>
            <li>Sacolinha</li>
            <li>Dúvidas</li>
          </ul>
        </S.Column>
        <S.Column>
          <h4>MEIOS DE PAGAMENTO</h4>
          <p>Visa, Mastercard, Pix e mais</p>
        </S.Column>
        <S.Column>
          <h4>CONTATO</h4>
          <p>(47) 92002-9278</p>
          <p>@direct no Instagram</p>
          <p>Joinville - SC</p>
        </S.Column>
        <S.Column>
          <h4>REDES SOCIAIS</h4>
          <p>Instagram</p>
          <p>Facebook</p>
        </S.Column>
      </S.BottomSection>
    </S.FooterContainer>
  );
};


export default Footer;
