import React from 'react';

import { All, Container } from './styles';

import Linkedin from '../../assets/images/linkedin.svg';
import GitHub from '../../assets/images/github.svg';

export default function Header() {
    return (
        <All>
            <Container>
                <a href="https://github.com/lhlleonardo">
                    <img src={GitHub} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/leonardolopes23/">
                    <img src={Linkedin} alt="Github" />
                </a>
            </Container>
        </All>
    );
}
