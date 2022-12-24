import styled, { createGlobalStyle } from 'styled-components';

//styled -> tem a função de permitir que possamos criar atributos na pag jsx = html

//import { primaryColor, primaryDarkColor, errorColor, successColor } from '../config/colors';
//quando temos muita coisa importada, podemos trocar por * (asterisco):

import * as colors from '../config/colors'


import 'react-toastify/dist/ReactToastify.css'; //vem do proprio toastfy

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        outline:0;
    }

    body {
        font-family: sans-serif;
        //background: {rimaryDarkColor};
        //como alteramos,pois tinha muita coisa importada, é necessário inserira palavra colors que importamos

        background: ${colors.primaryDarkColor};

        color: ${colors.primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background:${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px;
        border-radius: 4px;
        font-weight: 700;

    }

    a {
        text-decoration: none; //tira o traço debaixo do link
        color:${colors.primaryColor};
    }

    ul {
        list-style: none; //tira as bolinhas da UL
    }

    //alter cor do toastyfy:

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background-color: ${colors.successColor};
        color: #fff
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background-color: ${colors.errorColor};
        color: #fff
    }


`;

//OBS: PARA VERMOS AS ALTERAÇÕES, DEVEMOS IMPORTAR NO APP.JS

//CRIAMOS O CONTAINER QUE FOI EXPORTADO NA PAG INDEX.JS <- LOGIN:
//importamos o styled para criar um container para todas aplicações:

//container será o conteúdo principal, pode ser main o section
export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);

`



