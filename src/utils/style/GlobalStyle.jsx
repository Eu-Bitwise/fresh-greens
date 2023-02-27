import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${(props) =>
            props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`;

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    ${(props) =>
        props.$isFullLink &&
        `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`;

function GlobalStyle() {
    const { theme } = useTheme();

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
