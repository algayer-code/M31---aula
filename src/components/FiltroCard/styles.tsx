import styled from 'styled-components'

import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#b760ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border-radius: 8px;
  color: ${(props) => (props.ativo ? '#b760ff' : '#5e5e5e')};
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
