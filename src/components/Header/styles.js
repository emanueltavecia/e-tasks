import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.5rem;
  padding: 1rem 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 2rem;
  }
`

export const Menu = styled.button`
  background: none;
  border: 0;
  display: none;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`
