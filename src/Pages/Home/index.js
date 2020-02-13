import React from 'react';

import { Container } from './styles';

import Profile from '../../components/Profile/index';
import More from '../../components/More/index';
import Projects from '../../components/Projects/index';

import Banner from '../../components/Banner/index';

export default function Home() {
    return (
        <>
            <Banner />
            <Container>
                <Profile />
                <Projects />
                <More />
            </Container>
        </>
    );
}
