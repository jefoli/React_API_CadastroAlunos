import React, { useState } from "react";

import { toast } from 'react-toastify';

import { Container } from "../../styles/GlobalStyles";

import { Form } from "./styled";

import { isEmail } from "validator";

import Loading from '../../components/Loading';

import { useSelector, useDispatch } from "react-redux";

import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const  isLoading = useSelector(state => state.auth.isLoading);


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if(!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e){
    e.preventDefault();
    //console.log(nome);
    let formErrors = false;

    if(nome.length < 3 || nome.length > 50){
      formErrors = true;
      toast.error('Seu nome precisa ter entre 3 e 50 caracteres');
    }

    if(!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Sua senha precisa ter entre 6 e 50 caracteres');
    }

    if(!isEmail(email)){
      formErrors = true;
      toast.error('Email inválido');
    }

    if(formErrors) return;

    dispatch(actions.registerRequest({nome, email, password, id}));
  }


  return(
    <Container >
      <Loading isLoading={isLoading}/>
      <h1>{id ? 'Editar Dados ' : "Crie sua conta"}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          />
        </label>
        <button type="submit">{id ? 'Salvar ': 'Criar conta'}</button>
      </Form>
    </Container>
  );
}
