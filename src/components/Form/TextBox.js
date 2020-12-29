import styled from 'styled-components';

// <TextBox value="123" className="ala" />
// <TextBox className="ola" value="123" className="ala" />

function TextBox({className, ...restProps}) {
  return <input type="text" className={className} {...restProps} />;
}

const green = '#27ae60';
const TextBoxStyled = styled(TextBox)`
  background-color: #ecf0f1;
  color: ${green};
  border: #2c3e50 1px solid;
  border-radius: 5px;
  padding: 4px;

  &::placeholder {
    color: #95a5a6;
  }
`;

export {TextBox};
export default TextBoxStyled;
