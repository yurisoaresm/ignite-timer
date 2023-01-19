import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

type ButtonContainerProps = {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0px;
  margin: 8px;

  background-color ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
/*
  ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }}*/
  `
 