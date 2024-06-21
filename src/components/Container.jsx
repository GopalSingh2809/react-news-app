// components/StyledComponent.js
import styled from 'styled-components';
import { media } from '../utils/media';

const Container = styled.div`
  padding: 20px;
  background-color: lightgray;

  ${media.mobile`
    background-color: lightblue;
  `}

  ${media.tablet`
    background-color: lightgreen;
    padding: 40px;
  `}

  ${media.desktop`
    background-color: lightcoral;
    padding: 60px;
  `}

  ${media.largeDesktop`
    background-color: lightgoldenrodyellow;
    padding: 80px;
  `}
`;

export default Container;