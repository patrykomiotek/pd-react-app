import {forwardRef} from 'react';
import styled from 'styled-components';

import colors from './colors';
// <TextBox value="123" className="ala" />
// <TextBox className="ola" value="123" className="ala" />

const TextBox = forwardRef(({className, ...restProps}, ref) => {
  return <input type="text" className={className} {...restProps} ref={ref} />;
});

// function TextBox({className, ...restProps}) {
//   return <input type="text" className={className} {...restProps} />;
// };

// const TextBox = ({className, ...restProps}) => {
//   return <input type="text" className={className} {...restProps} />;
// };

const TextBoxStyled = styled(TextBox)`
  background-color: ${colors.backgroundColor};
  color: ${colors.color};
  border: ${colors.borderColor} 1px solid;
  border-radius: 5px;
  padding: 4px;

  &::placeholder {
    color: ${colors.borderColor};
  }
`;

export {TextBox};
export default TextBoxStyled;
