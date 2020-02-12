import React from 'react';

import { Container, Projects } from './styles';

import Profile from '../../components/Profile/index';
import More from '../../components/More/index';

import Banner from '../../components/Banner/index';

export default function Home() {
    return (
        <>
            <Banner />
            <Container>
                <Profile />
                <Projects>
                    <ul>
                        <li>
                            <div>
                                <strong>Título</strong>
                                <span>Descrição</span>
                                <a href="">Clique para acessar!</a>
                            </div>
                            <img src="" alt="" />
                        </li>
                    </ul>
                </Projects>
                <More />
            </Container>
        </>
    );
}
