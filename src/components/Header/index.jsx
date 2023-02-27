import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/GlobalStyle';
import LightLogo from '../../assets/logo.png';
import DarkLogo from '../../assets/logo.png';
import { useTheme } from '../../utils/hooks';

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    height: 80px;
`;

const LogoName = styled.h1`
    font-size: 24px;
    color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
`;

function Header() {
    const { theme } = useTheme();

    return (
        <NavContainer>
            <LogoContainer>
                <Link to="/">
                    <LogoImage src={theme === 'light' ? DarkLogo : LightLogo} />
                </Link>
                <LogoName $theme={theme}>Super Fresh</LogoName>
            </LogoContainer>
            <div>
                <StyledLink $theme={theme} to="/">
                    Welcome
                </StyledLink>
                <StyledLink $theme={theme} to="/products" $isFullLink>
                    Fruits & Veggies
                </StyledLink>
            </div>
        </NavContainer>
    );
}

export default Header;
