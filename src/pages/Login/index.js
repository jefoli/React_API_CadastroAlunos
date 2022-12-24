import React from "react";

import { useDispatch } from "react-redux"; // isso é hook e jogamos em uma var

import { Title, Paragrafo } from "./styled"; //styled-components -> tivemos que fazer a desestruturação do componente, pois ele não foi exportado como DEFAULT.

//Podemos mandar propriedades no Title

import { Container } from "../../styles/GlobalStyles";

//SOMENTE TESTE:
//import axios from "../../services/axios"; //importamos para testa-lo, podemos fazer requisições com ele agora -> o axios retorna uma promisse, pois ele é asincrono

import * as exampleActions from '../../store/modules/example/actions';



//função Login que será exportada:
export default function Login() {

    const dispatch = useDispatch(); // esse aqui pode disparar quantas ações quisermos

    function handleClick(e){

      e.preventDefault();
      //console.log('botao clicado')
      //colocamos o dispatch para que, quando clicarmos, ele dispare uma ação (essas ações são o que vai descrever ao redux o que ele tem que fazer) -> a ação vai ser disparada, ela vai ter um tipo e esse tipo vai falar ao redux que ação foi clicada. Ele vai ser responsável por mudar o estado baseado na ação que ele foi executada ->


      //OBS: NÃO É COMUM DISPARAR ISSO DE MANEIRA MANUAL:
      //criamos um arquivo actions.js em modules para não exportar o dispacth de forma literal como está abaixo

      //a ação é um OBJETO {} que terá um type
      //OBS: por convenção as ações são escritas com letra maíuscula
      // dispatch({
      //   type: 'BOTAO_CLICADO',
      //   //ela pode receber dados tbm:
      //   //payload: {email, senha} // email e senha dos usuário que está tentando fazer o login
      // });

      //importamos dentro de dispach a action do arquivo action.js
      dispatch(exampleActions.clicaBotao());

      // //outra ação(podemos disparar quantas quisermos)
      // dispatch({
      //   type: 'BOTAO_CLICADO2',
      // });


      //console.log('botão clicado') -> para testar se está pegando o click

    }


      // //testando o axios:
      // //usamos o useEffect para isso:
      // //não podemos usar uma função async dentro dele, para isso, temos que criar uma função
      // React.useEffect(() => {
      //     async function getDate(){
      //         //jogamos a resposta da API dentro de uma variavel
      //         //como estamos utilizando o axios do arquivo que configuramos na url de base -> podemos passar /alunos que ele retorna os dados dos alunos
      //       const response = await axios.get('/alunos');
      //       //console.log(response);
      //       const { data } = response;
      //       console.log(data);
      //     }

      //     getDate();
      // }, []);

    return(
        <Container >
            {/* React.Fragment = <></> */}
        {/* <Title isRed={false}> -> exp utilizado do styled components com variavel*/}
          <Title>
              Login
              <small>Oie</small>
          </Title>
          <Paragrafo> Lorem</Paragrafo>
          <button type="button" onClick={handleClick}>
            Enviar
          </button>
        </Container>
    );
}
