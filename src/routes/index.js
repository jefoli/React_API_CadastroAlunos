//209. React Router DOM (roteamento) -> responsavel por fazer o roteamento da aplicação,
//vai apontar para onde usuário vai quando clicarmos em algum link

import React from "react";

import { Switch } from 'react-router-dom'; //tiramoso Route daqui, pois criamos uma rota Routes.js

//criamos MyRoute para substituir Routes do react-router-dom
import MyRoute from "./MyRoutes";


//import { toast } from 'react-toastify'; //criamos

import Login from '../pages/Login';

import Page404 from '../pages/Page404';

export default function Routes (){
    //testando as msgs do toastfy (podemos ver que o botão pode ser utilizado em qualquer pag)
    //toast.success('sucesso');
    //toast.error('erro');

    return(
        //tudo que tivermos dentro, temos que envolver dentros de browser-Router
        //switch -> tem a função de permitir que somente uma rota seja chamada por vez
        //Route -> recebe o path(indica para onde) indicamos a raiz, e qual componente será renderizado (foi substituido por MyRoute)


        <Switch>
            <MyRoute exact path='/' component={Login} isClosed/>

            {/* isClosed por padrão fechará a rota e vai redirecionar para /login para usuário fazer login*/}

            {/* vai ser renderizado o login aqui
            O path vai checar se esse path existe na rota
            quando queremos uma rota exata -> colocar exact = queremos a exata rota da home para renderizar o login
            */}
            {/* qualquer rota que não existir vai cair na pag 404 */}
            <MyRoute path='*' component={Page404}/>
        </Switch>

    );
};
