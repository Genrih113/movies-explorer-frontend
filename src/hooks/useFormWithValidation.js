import React from 'react';
import isEmail from 'validator/lib/isEmail';

export function useFormWithValidation(){
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  // function handleInputChange(evt) {
  //   const input = evt.target;
  //   const name = input.name;
  //   const value = input.value;
  //   setValues({...values, [name]: value});
  //   setErrors({...errors, [name]: input.validationMessage});
  //   setIsFormValid(input.closest('form').checkValidity());
  // };

  function handleInputChange(evt) {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    if (name === 'userEmail') {
      isEmail(value)
      ? input.setCustomValidity('')
      : input.setCustomValidity('Введите корректный e-mail.');
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage});
    setIsFormValid(input.closest('form').checkValidity());
  };

  return {values, errors, isFormValid, handleInputChange};
}