import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useTheme } from '../../utils/hooks';
import DefaultPicture from '../../assets/profile.png';

const CardLabel = styled.span`
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
`;

const CardTitle = styled.div`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 22px;
    font-weight: normal;
    align-self: center;
    height: 25px;
    display: flex;
    align-items: center;
`;

const CardImage = styled.img`
    height: 250px;
    width: 250px;
    align-self: center;
    border-radius: 25%;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 15px;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    &:hover {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
        transform: scale(1.02);
    }
`;

function Card({ label, title, picture }) {
    const { theme } = useTheme();
    return (
        <CardWrapper theme={theme}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="product" />
            <CardTitle theme={theme}>{title}</CardTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
};

export default Card;
