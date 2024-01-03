import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {

    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid '#5843E4';
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate};
  animation-duration: 100ms;
  animation-iteration-count: 3;
  animation-timing-function: linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`
//    ${(props) =>
//      props.$isFullLink &&
//      `color: white;
//      border-radius: 30px;
//      background-color: '#5843E4';`}
// `
