import { useRecoilValue } from 'recoil';
import { css, styled } from 'styled-components';
import { useCart } from '../../hooks/useCart';
import { quantitySelector } from '../../recoil';
import { Product } from '../../types';
import Button from '../common/Button';
import CartIcon from '../icons/CartIcon';
import Price from '../Price';
import QuantityButton from '../QuantityButton';

const ProductItem = ({ id, imageUrl, name, price }: Product) => {
  const quantity = useRecoilValue(quantitySelector(id));
  const { addToCart } = useCart(id);

  const handleCartClick = () => addToCart();

  return (
    <div>
      <S.ImageWrapper>
        <S.Image src={imageUrl} alt={name} loading='lazy' />
      </S.ImageWrapper>
      <S.InfoWrapper>
        <div>
          <S.Name htmlFor={name} title={name}>
            {name}
          </S.Name>
          <Price price={price} css={priceStyle} />
        </div>
        {quantity > 0 ? (
          <QuantityButton isEnabledAtMin productId={id} quantity={quantity} />
        ) : (
          <Button css={buttonStyle} onClick={handleCartClick}>
            <CartIcon css={svgStyle} />
          </Button>
        )}
      </S.InfoWrapper>
    </div>
  );
};

const S = {
  ImageWrapper: styled.div`
    width: 100%;
    overflow: hidden;
  `,

  Image: styled.img`
    width: 100%;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.08);
    }
  `,

  InfoWrapper: styled.fieldset`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 12px 6px 0;

    & div:nth-child(2) {
      height: 32px;
      margin: 0;
    }
  `,

  Name: styled.label`
    display: -webkit-box;
    margin-right: 4px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.5px;
    color: var(--text-color);
    opacity: 0.9;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    @media (max-width: 1270px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
};

const svgStyle = css`
  transform: scaleX(-1);
`;

const priceStyle = css`
  margin-top: 8px;
  font-weight: 500;
`;

const buttonStyle = css`
  align-self: start;
`;

export default ProductItem;
