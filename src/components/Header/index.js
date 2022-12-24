import React from "react";

import { FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from "./styled"; //styled-component

import { Link } from "react-router-dom"; //importamos para trocar o <A> para Link
//OBS, quando usamos Link, trocamos href para 'to'

import { useSelector } from "react-redux"; //o outro hook do react


export default function Header(){

  //importamos ele para ver se o botao foi clicado ou não (ele pertence a app geral, por issopodemos usar aqui o store (useSelector) do redux)
  const botaoClicado = useSelector(state => state.botaoClicado);

    return <Nav> {/*seria Navbar do site*/}

        <Link to="/"><FaHome size={24}/></Link>
        <Link to="/login"><FaSignOutAlt size={24}/></Link>
        <Link to="/ddd"><FaUserAlt size={24}/></Link>
          {botaoClicado ? 'Clicado' : 'Não clicado'}
        </Nav>;
        // dessa forma, quebrou a pagina, pois usamos o link fora do Browser (que está em routes)
        //desse modo, precisamos alterar o browser no header.js e trazer ele para lá (tiramos o BrowserRouter do routes e enviamos para header para encapsular), para isso, vamos importar no App.js (pois o header está la)
}

//TROCAMOS O A  <a href="/"><FaHome size={24}/></a>, POR LINK

