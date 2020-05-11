import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13752053?s=460&u=265ad33c6890d536345060e1fcaf701f34d49434&v=4"
            alt="Guilherme Konell"
          />
          <div>
            <strong>guilhermekonell/fastfeet</strong>
            <p>Aplicacao para uma distribuidora ficticia</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
