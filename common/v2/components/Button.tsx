import styled, { css } from 'styled-components';
import { Button } from '@mycrypto/ui';

interface ButtonProps {
  fullWidth?: boolean;
  disabled?: boolean;
}

const StyledButton = styled(Button)<ButtonProps>`
  ${props =>
    props.fullWidth === true &&
    css`
      width: 100%;
      margin-top: 1rem;
    `}

  :disabled {
    opacity: 0.4;
  }
`;

export default StyledButton;
