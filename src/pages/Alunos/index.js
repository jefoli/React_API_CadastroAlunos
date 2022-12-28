import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Setar um valor padrão para alunos que não possuem foto.
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';

import { Container } from "../../styles/GlobalStyles";

import { AlunoContainer, ProfilePicture } from "./styled";

import axios from "../../services/axios";

import Loading from "../../components/Loading";
//import { func } from "prop-types";
import { toast } from "react-toastify";


export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData(){
      setIsLoading(true);
      const response = await axios.get('/alunos');
      //console.log(response.data);
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (er) => {
    er.preventDefault();
    //trocar icones:
    const exclamation = er.currentTarget.nextSibling;
    //console.log(e.currentTarget.nextSubling);
    exclamation.setAttibute('display', 'block');
    er.currentTarget.remove();
  }

  const handleDelete = async(e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);

    } catch (error) {
      const status = get(error, 'response.data.errors', []);
      if(status === 401){
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  return(
    <Container >
      <Loading isLoading={isLoading}/>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'aluno.fotos[0].url', false) ? (
                <img src={aluno.fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16}/>
            </Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16}/>
            </Link>
            <FaExclamation size={24} display='none' cursor='pointer' onClick={e => handleDelete(e, aluno.id, index)}/>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
