import { FormInputWrapper } from './styles';

const FormInput = ({
  name,
  label = 'input',
  type = 'text',
  length = 10,
  value = '',
  onChange = () => {},
  ...otherProps
}) => {
  const handleInput = ({ target }) => {
    const rawValue = target.value || '';
    const value =
      rawValue.length <= length ? rawValue : rawValue.slice(0, length);
    onChange(name, value);
  };

  return (
    <FormInputWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={handleInput}
        {...otherProps}
      />
    </FormInputWrapper>
  );
};

export default FormInput;
