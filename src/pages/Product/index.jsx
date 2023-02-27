import styled from 'styled-components';
import { Loader } from '../../utils/style/Animates';
import { useParams } from 'react-router-dom';
import { useFetch, useTheme } from '../../utils/hooks';

const Card = styled.div`
    width: 650px;
    max-height: 600px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;

const ProductDiv = styled.div`
    padding: 16px;
`;

const Title = styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const ProductDetails = styled.div`
    padding-bottom: 10px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const Description = styled.div`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const Price = styled.p`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

function productDetails(productList) {
    if (productList) {
        const displayString =
            productList.slice(0, -1).join(', ') +
            ' and ' +
            productList.slice(-1);

        return displayString;
    }
}

function Product() {
    const { theme } = useTheme();
    const { productId } = useParams();

    const { data, isLoading, error } = useFetch(
        'http://localhost:8000/product/' + productId
    );

    const { name, picture, details, pricePerKilo, description } =
        data?.ProductData || {};

    console.log(productDetails(details));

    if (error) {
        return <span>An error occured...</span>;
    }

    return (
        <div>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <Card>
                    <Image src={picture} alt={name} />
                    <ProductDiv>
                        <Title theme={theme}>{name}</Title>
                        <ProductDetails theme={theme}>
                            {productDetails(details)}
                        </ProductDetails>
                        <Description theme={theme}>{description}</Description>
                        <Price theme={theme}>{pricePerKilo}$/kg</Price>
                    </ProductDiv>
                </Card>
            )}
        </div>
    );
}

export default Product;
