import React from "react";

import { Container } from "../../styles/GlobalStyles";

import { Form } from './styled';

import { toast } from 'react-toastify';

import { isEmail } from 'validator';

import { useDispatch, useSelector } from "react-redux";

import { get } from 'lodash';

import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Login(props) {

  //disparador de ações:
  const dispatch = useDispatch();

  //vai chegar e redirecionar para home:
  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector(state => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(email);


  let formErrors = false;

  if(!isEmail(email)) {
    formErrors = true
    toast.error('Email inválido');
  }

  if(password.length < 5 || password.length > 50){
    toast.error('Senha inválida');
    formErrors = true

  }

  if(formErrors) return;

  //console.log('teste');
  dispatch(actions.loginRequest({email, password, prevPath}));
  };


  return(
    <Container >
      <Loading isLoading={isLoading} />
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange ={(e) => setEmail(e.target.value)} placeholder="Seu digite seu email" />
        <input type="password" value={password} onChange ={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
