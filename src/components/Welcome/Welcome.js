import React from "react";
import styled from 'styled-components';

import { Avatar } from "../Avatar/Avatar";

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 16px;
    height: calc(100vh - 44px);
    margin: 16px auto;
    max-width: 860px;
`;

const Title = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 42px;
    text-align: center;
    margin-bottom: 16px;
`;

const SubTitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 18px;
    margin-bottom: 42px;
`;

export const Welcome = () => {
    return (
        <WelcomeContainer>
            <Title>Full Stack Developer</Title>
            <SubTitle>I enjoy creating beatiful, functional web apps</SubTitle>
            <Avatar/>
        </WelcomeContainer>
    )
};