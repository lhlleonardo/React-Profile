import React from 'react';

import { Container } from './styles';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';

export default function Projects() {
    return (
        <Container>
            <ul>
                <li>
                    <div>
                        <strong>Interface do Twitter</strong>
                        <span>
                            Desenvolvimento da interface do twitter, utilizando
                            apenas HTML e CSS. Curso realizado na Rocketseat,
                            aplicando os conceitos do flex-box.
                        </span>
                        <a href="https://lhl-twitter-interface.netlify.com/">
                            Clique para acessar!
                        </a>
                    </div>
                    <img src={twitter} alt="Twitter" />
                </li>
                <li>
                    <div>
                        <strong>Repositórios GitHub</strong>
                        <span>
                            Desenvolvimento de uma aplicação com conexão direta
                            a API do GitHub. Utilizando a biblioteca do React.
                            Um curso oferecido pela Rocketseat no Bootcamp.
                        </span>
                        <a href="https://lhl-github.netlify.com/">
                            Clique para acessar!
                        </a>
                    </div>
                    <img src={facebook} alt="Twitter" />
                </li>
            </ul>
        </Container>
    );
}
