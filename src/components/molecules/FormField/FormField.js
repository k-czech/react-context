import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FormField.styles';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';

const FormField = ({ id, type = 'text', name, label, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Wrapper onClick={() => setIsFocused(true)}>
      <Label isFocused={isFocused} htmlFor={id}>
        {label}
      </Label>
      <Input type={type} name={name} value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </Wrapper>
  );
};

FormField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default FormField;
