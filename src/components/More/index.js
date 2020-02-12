import React from 'react';

import { Container } from './styles';

export default function More() {
    return (
        <Container>
            <div>
                <h1>FORMAÇÃO, CURSOS E HABILIDADES</h1>
            </div>
            <ul>
                <li>
                    <strong>Bootcamp (Rocketseat)</strong>
                    <small>Em andamento</small>
                    <span>
                        Treinamento online imersivo nas tecnologias NodeJS,
                        ReactJS e React Native.
                    </span>
                </li>
                <li>
                    <strong>Pós-graduação (UFSCar)</strong>
                    <small>Em andamento</small>
                    <span>
                        Desenvolvimento de Software para Web. Treinamento
                        profissional amplo e profundo, objetivando proporcionar
                        uma formação em engenharia de software para o
                        desenvolvimento de aplicações voltadas para a Web,
                        empregando metodologias, ferramentas, linguagens e
                        ambientes computacionais presente nos dias atuais das
                        grandes empresas.
                    </span>
                </li>
                <li>
                    <strong>Graduação (Anhanguera)</strong>
                    <small>Concluído em 2017</small>
                    <span>
                        Graduação no curso de ciência da computação na faculdade
                        Anhanguera de Bauru. Curso realizado entre o período de
                        2014 e 2017.
                    </span>
                </li>
            </ul>
        </Container>
    );
}
