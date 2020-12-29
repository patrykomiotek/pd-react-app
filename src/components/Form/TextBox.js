import {forwardRef} from 'react';
import styled from 'styled-components';

import './styles.css';
import colors from './colors';
// <TextBox value="123" className="ala" />
// <TextBox className="ola" value="123" className="ala" />

const TextBox = forwardRef(({name, label, errors, className, ...restProps}, ref) => {

  const hasErrors = Reflect.has(errors, name);
  const classes = `${className} ${hasErrors ? 'error' : ''}`;
  let styles = {};
  if (hasErrors) {
    styles.backgroundColor = '#e74c3c';
  }

  return (
    <div>
      <div><label>{label}</label></div>
      <div>
        <input type="text" name={name} style={styles}
          className={classes} {...restProps} ref={ref} />
        {' '}
        {errors && errors[name] && <span style={{ color: '#c0392b' }}>{errors[name].message}</span>}
      </div>
    </div>
  );
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
