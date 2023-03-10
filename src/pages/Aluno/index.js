import React, {useState, useEffect} from "react";
//import { useParams } from "react-router-dom";

import { Container } from "../../styles/GlobalStyles";

import { get } from "lodash";

import PropTypes from 'prop-types';

import { Form, ProfilePicture, Title } from "./styled";

import { toast } from "react-toastify";

import { isEmail, isInt, isFloat } from "validator";

import Loading from '../../components/Loading';

import axios from '../../services/axios';

import history from '../../services/history';

import { useDispatch } from "react-redux";

import * as actions from '../../store/modules/auth/actions';

import { Link } from "react-router-dom";

import { FaEdit, FaUserCircle } from 'react-icons/fa';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', '');
  const dispacth = useDispatch();
  //const {id} = useParams;
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;
    async function getData(){
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'fotos[0].url', '');
        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);


        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if(status === 400) errors.map(error => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    let formErrors = false;

    if(nome.length < 3 || nome.length > 50){
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 50 caracteres');
    }

    if(sobrenome.length < 3 || sobrenome.length > 50){
      formErrors = true;
      toast.error('Sobrenome precisa ter entre 3 e 50 caracteres');
    }

    if(!isEmail(email)){
      formErrors = true;
      toast.error('E-mail inv??lido');
    }

    if(!isInt(String(idade))){
      formErrors = true;
      toast.error('Idade inv??lida');
    }

    if(!isFloat(String(peso))){
      formErrors = true;
      toast.error('Peso inv??lido');
    }

    if(!isFloat(String(altura))){
      formErrors = true;
      toast.error('Altura inv??lida');
    }

    if(formErrors) return;

    try {
      setIsLoading(true);
      if(id){
        //Se tiver id - Editando
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso!');
      } else{
        //Criando usu??rio

        const {data} = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso!');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'responde.data', {});
      const errors = get(data, 'errors', []);

      if(errors.length > 0) {
        errors.map(error => toast.error(error));
      } else {
        toast.error('Error desconhecido');
      }

      if(status === 401){
        dispacth(actions.loginFailure());
      }
    }
  }

  return(
    <Container >
      <Loading isLoading={isLoading} />
      <Title> {id ? 'Editar aluno' : 'Novo Aluno'}</Title>
      {id && (
        <ProfilePicture>
          {foto ? (
            <img src={foto} alt={nome} />
          ) :
            <FaUserCircle size={180} />
          }
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <input type='text' value={nome} onChange={e => setNome(e.target.value)} placeholder='Nome'/>
        <input type='text' value={sobrenome} onChange={e => setSobrenome(e.target.value)} placeholder='Sobrenome'/>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
        <input type='number' value={idade} onChange={e => setIdade(e.target.value)} placeholder='Idade'/>
        <input type='text' value={peso} onChange={e => setPeso(e.target.value)} placeholder='Peso'/>
        <input type='text' value={altura} onChange={e => setAltura(e.target.value)} placeholder='altura'/>
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
