import styled from '@emotion/styled';
import React, { FC } from 'react';

const RedText = styled.div`
  color: red
`

const DynamicText = styled.div`
font-size: ${(props) => (props.title?.length ?? 1) * 10}px
`

export const Hello: FC = ({ }) => {
  return <div>
    <RedText>Hello</RedText>
    <DynamicText title="a">A</DynamicText>
    <DynamicText title="aa">B</DynamicText>
    <DynamicText title="aaa">C</DynamicText>
  </div>;
}
