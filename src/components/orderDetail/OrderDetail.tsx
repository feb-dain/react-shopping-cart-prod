import { BsCreditCardFill } from 'react-icons/bs';
import { css, styled } from 'styled-components';
import { Coupon } from '../../types';
import Price from '../Price';

interface Props {
  totalPrice: number;
  deliveryFee: number;
  coupon: Coupon | null;
  totalPayments: number;
}

const OrderDetail = ({ totalPrice, deliveryFee, coupon, totalPayments }: Props) => {
  return (
    <S.Wrapper tabIndex={0}>
      <S.Title>
        <BsCreditCardFill />
        결제 정보
      </S.Title>
      <li>
        총 상품금액 <Price price={totalPrice} />
      </li>
      <li>
        배송비 <Price price={deliveryFee} />
      </li>
      <li>
        할인쿠폰 <Price price={coupon ? -coupon : 0} css={priceStyle} />
      </li>
      <li>
        총 결제금액 <Price price={totalPayments} />
      </li>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.ul`
    flex: 0.5;
    max-height: 330px;
    margin-top: 30px;
    font-size: 18px;
    color: var(--text-color);
    border: 1px solid var(--gray-color-300);
    border-radius: 4px;

    & li {
      display: flex;
      align-items: center;

      & svg {
        margin: 4px 12px 0 0;
      }
    }

    & > li:not(li:first-child) {
      padding: 28px 28px 0;
      justify-content: space-between;
      font-weight: 500;

      & + li:last-child {
        padding: 52px 28px 48px;
        font-weight: 600;
      }
    }
  `,

  Title: styled.li`
    margin-bottom: 8px;
    padding: 22px 28px 24px;
    font-size: 20px;
    font-weight: 700;
    color: var(--white-color);
    background: var(--text-color);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  `,
};

const priceStyle = css`
  font-size: 18px;
`;

export default OrderDetail;
