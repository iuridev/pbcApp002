import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import LogoTeste from '../../assets/product.jpg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* <img src={LogoCompany} alt="Logo Public App" /> */}
      <Title>Public App</Title>
      <Form>
        <input placeholder="Digite o nome do produto" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src={LogoTeste} alt="Foto do Produto" />
          <div>
            <strong>Produto</strong>
            <p>Descrição do Produto</p>
          </div>
          <FiChevronRight size={40} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
