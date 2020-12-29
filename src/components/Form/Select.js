import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from './colors';

// [{value: 12, label: 'Label for value 12'}]
function Select({items, className, ...restProps}) {
  return (
    <select className={className}>
      {items.map(elem => (
        <option key={elem.value} value={elem.value}>
          {elem.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  items: PropTypes.array.isRequired,
};

const SelectStyled = styled(Select)`
  background-color: ${colors.backgroundColor};
  color: ${colors.color};
  border: ${colors.borderColor} 1px solid;
  border-radius: 5px;
  padding: 4px;
`;

export {Select};
export default SelectStyled;
