import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Animates';
import { useFetch, useTheme } from '../../utils/hooks';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

function Products() {
    const { theme } = useTheme();
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/products`
    );
    const productList = data?.productList;

    if (error) {
        return <span>An error occured...</span>;
    }

    return (
        <div>
            <PageTitle theme={theme}>We got you 😉</PageTitle>
            <PageSubtitle theme={theme}>The most fresh greens.</PageSubtitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {productList?.map((product) => (
                        <Link
                            key={`product-${product.id}`}
                            to={`/product/${product.id}`}
                        >
                            <Card
                                title={product.name}
                                picture={product.picture}
                                theme={theme}
                            />
                        </Link>
                    ))}
                </CardsContainer>
            )}
        </div>
    );
}

export default Products;
