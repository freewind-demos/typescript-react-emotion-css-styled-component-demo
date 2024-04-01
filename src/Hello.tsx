import styled from '@emotion/styled';
import React, { FC } from 'react';

const RedText = styled.div`
  color: red
`

const DynamicText = styled.div<{ baseSize: number }>`
font-size: ${(props) => props.baseSize * 10}px
`

export const Hello: FC = ({ }) => {
  return <div>
    <RedText>Hello</RedText>
    <DynamicText baseSize={10}>A</DynamicText>
    <DynamicText baseSize={20}>B</DynamicText>
  </div>;
}
