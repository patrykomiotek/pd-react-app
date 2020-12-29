import {forwardRef} from 'react';
import styled from 'styled-components';

import colors from './colors';
// <TextBox value="123" className="ala" />
// <TextBox className="ola" value="123" className="ala" />

const Textarea = forwardRef(({className, ...restProps}, ref) => {
  return <textarea className={className} {...restProps} ref={ref} />;
});

const TextareaStyled = styled(Textarea)`
  background-color: ${colors.backgroundColor};
  color: ${colors.color};
  border: ${colors.borderColor} 1px solid;
  border-radius: 5px;
  padding: 4px;
`;

export {Textarea};
export default TextareaStyled;
