import React, {FC} from 'react';
import styled from '@emotion/styled';
import './index.css';

const Text = styled.div`
  color: red
`

export const Hello: FC = ({}) => {

  return <div>
    <Text>Hello</Text>
  </div>;
}
