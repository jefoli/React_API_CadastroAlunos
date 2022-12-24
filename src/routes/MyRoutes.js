//chamamos isso de MyRoute ou PrivateRoute

//iremos criar as rotas -> tudo que criamos aqui foi para substituir o Route do react-router-dom -> desse modo, iremos tirar o Routes de index.js

import React, { Component } from "react";

import {Route, Redirect} from 'react-router-dom';

import propTypes from 'prop-types';

//aqui, vamos receber o component através da desestruturação,
//convertemos component para C maíusculo

//isClosed <- essa varivel que irá dizer se essa rota será aberta ou fechada(isso que nó estamos criando)
//...rest -> é o resto das propriedades que precisamos

//Component > esse componente pode ser um compeente do react ou uma função (componenete funcional ) -> para validar ele (ver no final myRoute)
export default function MyRoute( {component: Component, isClosed, ...rest }){
    // 1 primeiro -> iremos ver se o usuário está logado:
    //vamos usar uma var isLoggedIn = false;  -> setamos na mão pois ela vai estar dentro do estado do redux(o estado do redux, vai ser acessivel de toda aplicação) -> como ainda não configuramos o estado, vamos setar ela na mão:

    const isLoggedIn = true; //se colocarmos como true(simula que usuário está logado e abre a porta isClosed)

    // = se a rota está fechada e o usuário não esta logado: Não podemos deixar o usuário passar daqui e será redirecionado para login
    if(isClosed && !isLoggedIn){
        return (
            <Redirect
                //colocamos um objeto dentro de to falando que o pathname(para onde ele está indo) irá redirecionar para './login

                //para termos os dados da rota anterior, colocamos , e prevPath: rest.location.pathname

                // teremos dentro do login a chave prevPath => para que possamos acessar para sabermos qual era o caminho antigo que ele estava, porque qunado ele fizer login irá redirecionar ao caminho que ele estava tentando acessar


                to={{pathname: '/login', prevPath: rest.location.pathname}}
            />
        );
    }

    //passou do if acima, quer dizer que a rota não está fechada ou o usuário ESTÁ logado:
    //vamos retornar a rota normal, o resto que estava lá
    return < Route {...rest} component={Component} />


}

//setamos o valor falso para Isclosed
MyRoute.defaultProps = {
    isClosed: false,
}

MyRoute.propTypes = {

    //validando Component
    component: propTypes.oneOfType([propTypes.element, propTypes.func]).isRequired, //ele pode ser um elemento uma função aqui

    //validar isClosed -> ele é um boolean
    //o isClosed ele não é requirido, não precisa enviar ele, logo precisamos dar um valor padrão para ele -> valor Falso

    // por padrão a rota é aberta,
    isClosed: propTypes.bool,
}
