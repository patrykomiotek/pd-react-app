import {forwardRef} from 'react';
import styled from 'styled-components';

import colors from './colors';
// <TextBox value="123" className="ala" />
// <TextBox className="ola" value="123" className="ala" />

const Textarea = forwardRef(({name, label, errors, className, ...restProps}, ref) => {
  return (
    <div>
      <div><label>{label}</label></div>
      <textarea data-testid={name} name="name" className={className} {...restProps} ref={ref} />
      {errors && errors[name] && <span style={{ color: '#c0392b' }}>{errors[name].message}</span>}
    </div>
  );
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
