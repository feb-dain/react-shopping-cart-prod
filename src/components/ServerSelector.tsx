import { ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { SERVERS } from '../constants/url';
import { serverState } from '../recoil';

const ServerSelector = () => {
  const setServer = useSetRecoilState(serverState);

  const handleSeverChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setServer(SERVERS[value]);
  };

  return (
    <S.List name='서버' aria-label='서버 선택' onChange={handleSeverChange}>
      <option value='준팍'>준팍</option>
      <option value='도이'>도이</option>
      <option value='우르'>우르</option>
    </S.List>
  );
};

const S = {
  List: styled.select`
    margin: 0 16px 0 auto;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  `,

  Server: styled.li`
    align-self: center;
  `,
};

export default ServerSelector;
