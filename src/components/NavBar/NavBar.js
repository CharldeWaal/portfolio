import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
    position: relative;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    max-height: 44px;
    padding: 6px 4px;
    margin: 0;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding-left: 0px;
    margin: 0;
`;

const ListItem = styled.li`
    display: flex;
    height: 32px;
    margin-right: 8px;
`;

const LogoLink = styled(Link)`
    letter-spacing: 0.15;
    color: #172b4d;
    font-family: 'Inter',Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 3px;
    transition: .3s;

    &:hover {
        color: rgba(0, 0, 0, 0.2);
    }
`;

const StyledLink = styled(Link)`
    color: #172b4d;
    font-family: 'Inter',Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 3px;
    transition: .3s;

    &:hover {
        color: rgba(0, 0, 0, 0.2);
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <List>
                <ListItem><LogoLink to="/">Charl de Waal</LogoLink></ListItem>
                <ListItem><StyledLink to="/portfolio">Projects</StyledLink></ListItem>
                <ListItem><StyledLink to="/surfing">Resume</StyledLink></ListItem>
                <ListItem><StyledLink to="/about">About Me</StyledLink></ListItem>
            </List>
        </Nav>
    )
};

export default NavBar;