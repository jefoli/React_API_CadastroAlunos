import React, { useState } from "react";

import { toast } from 'react-toastify';

import { Container } from "../../styles/GlobalStyles";

import { Form } from "./styled";

import axios from '../../services/axios';

import history from '../../services/history';

import { isEmail } from "validator";

import { get } from "lodash";

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    //console.log(nome);
    let formErrors = false;

    if(nome.length < 3 || nome.length > 50){
      formErrors = true;
      toast.error('Seu nome precisa ter entre 3 e 50 caracteres');
    }

    if(password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Sua senha precisa ter entre 6 e 50 caracteres');
    }

    if(!isEmail(email)){
      formErrors = true;
      toast.error('Email inválido');
    }

    if(formErrors) return;

    try {
      await axios.post('/users/', {
        nome,
        password,
        email
    });
      toast.success('Cadastro realizado com sucesso');
      history.push('/login');
      //console.log(response.data);
    } catch (err) {
      //const status = get(e, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);
      //console.log(status);
      //podemos ver o error do back-end:
      errors.map(error => toast.error(error));
    };
  }


  return(
    <Container >
      <h1>Crie sua conta</h1>
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
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
