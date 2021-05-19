import React from 'react';

export function useFormWithValidation(){
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleInputChange(evt) {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage});
    setIsFormValid(input.closest('form').checkValidity());
  };

  // // экспериментальная функция
  // function handleValidationStatesReset() {
  //   setValues({});
  //   setErrors({});
  //   setIsFormValid(false);
  //   console.log('reset form');
  // }

  // // еще одна экспериментальная функция
  // function setFormWithValidationStatesManualy(validatedFieldsObject) {
  //   setValues(validatedFieldsObject);
  // }

  // React.useEffect(() => {
  //   setFormWithValidationStatesManualy(validatedFieldsObject);
  // }, []);

  return {values, errors, isFormValid, handleInputChange};
}