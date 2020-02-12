import React from 'react';

import { Container } from './styles';

import profile from '../../assets/images/profile.jpg';
import email from '../../assets/images/gmail.svg';
import linkedin from '../../assets/images/din.svg';
import github from '../../assets/images/git.svg';
import smartphone from '../../assets/images/smartphone.svg';
import location from '../../assets/images/location.svg';

export default function Profile() {
    return (
        <Container>
            <aside>
                <img src={profile} alt="Profile" />
                <strong>Leonardo Henrique Lopes</strong>
                <span>23 anos.</span>
                <span>Desenvolvedor Web, full stack.</span>
                <h3>
                    Olá! Meu nome é Leonardo e eu sou um desenvolvedor de
                    sistemas e estudante de tecnologia. Sou apaixonado por
                    desenvolvimento Web e todas as tecnologias que englobam esse
                    ambiente. Busco sempre conhecer novas tecnologias e práticas
                    de desenvolvimento.
                </h3>
            </aside>
            <ul>
                <li>
                    <img src={smartphone} alt="Cellphone" />
                    (14) 9.8143-4599
                </li>
                <li>
                    <img src={location} alt="Location" />
                    Barra Bonita, SP. Brasil.
                </li>
                <li>
                    <img src={email} alt="E-mail" />
                    leonardoo.lopes126@gmail.com
                </li>
                <li>
                    <img src={linkedin} alt="Linkedin" />
                    <a href="https://www.linkedin.com/in/leonardolopes23">
                        https://www.linkedin.com/in/leonardolopes23
                    </a>
                </li>

                <li>
                    <img src={github} alt="GitHub" />
                    <a href="https://github.com/lhlleonardo">
                        https://github.com/lhlleonardo
                    </a>
                </li>
            </ul>
        </Container>
    );
}
