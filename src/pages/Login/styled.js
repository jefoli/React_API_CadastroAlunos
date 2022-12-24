//o styled componentes é realizado dentro de um arquivo JS e não CSS.

//PARA UTILIZAR O STYLED COMPONENTES, TEMOS QUE INSTALAR styled-components do no app do vsCode e instalar ele no terminal npm i styled-components

//após instalado, devemos importa-lo:

import styled from 'styled-components';

//para estilizarmos h1, temos que exportar um componente:
//tem que ser uma const ao invés de default

/*Desse modo, podemos escrever uma função dentro do styled:

export const Title = styled.h1 `
    color: ${props => (props.isRed ? 'red': 'blue')};
`;
*/

//para configuar as tags dentro do Title -> colocar dentro do da const a tag e configuraria ela:

//desse modo, pedimos para o styled component criar um H1 através do styled.h1

export const Title = styled.h1 `
    //configuração do title:
    background: green;

    //configuração do title:
    small{
        font-size: 12pt;
        margin-left: 15px;
        color: #999;
    }

`;

//desse modo, pedimos para o styled component criar um p através do styled.p

export const Paragrafo = styled.p `


`
