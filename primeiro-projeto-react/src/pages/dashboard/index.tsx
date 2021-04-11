import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoTeste from '../../assets/product.jpg';
import { Title, Form, Repositories } from './styles';
import LogoCompany from '../../assets/logocompany.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoCompany} alt="Logo Public App" />
      <Title>Encontre o que precisa, bem perto de você!</Title>
      <Form>
        <input placeholder="Digite o nome do produto" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <Link to="teste">
          <img src={LogoTeste} alt="Foto do Produto" />
          <div>
            <strong>Produto</strong>
            <p>Descrição do Produto</p>
          </div>
          <FiChevronRight size={40} />
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
