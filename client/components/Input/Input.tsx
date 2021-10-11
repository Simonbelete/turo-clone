import React, { ReactElement } from 'react';

interface InputProps {
  /**
   * Input type
   */
  type: 'text' | 'number' | 'password';
  /**
   * Input Id
   */
  id?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
}

const defaultProps = {
  id: '',
  placeholder: '',
};

const Input = ({ ...props }: InputProps): ReactElement => {
  return <input className="px-1 py-1" {...props} />;
};

Input.defaultProps = defaultProps;
export default Input;
