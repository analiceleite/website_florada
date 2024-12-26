import React from 'react';
import * as S from './styles'

const Input = () => {
  return (
    <S.StyledWrapper>
      <div className="InputContainer">
        <input placeholder="Pesquisar.." id="input" className="input" name="text" type="text" />
      </div>
    </S.StyledWrapper>
  );
}

export default Input;