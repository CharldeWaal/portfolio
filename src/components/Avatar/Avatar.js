import React from "react";
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image'

const AvatarContainer = styled.div`
    display: flex;
    width: 240px;
    height: 240px;
`;

export const Avatar = () => {
    return (
        <AvatarContainer>
            <StaticImage style={{borderRadius:'50%'}} alt='Photo of Charl de Waal' src='../../images/charl.jpg'/>
        </AvatarContainer>   
    )
};