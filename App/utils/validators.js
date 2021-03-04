export const isNumberValidPhoneNo = s => /^05\d{8,8}$/.test(s);
export const isValidEmail = email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export const isValidPassword = s =>
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,14}$/i.test(s);
export const isValidNumber = s => /^[0-9]+$/i.test(s);
export const isAlphabetsWithSpaces = s => /^[A-Za-z\s]+$/i.test(s);

export const validateEmail = value => {
  let _value = value && value.trim();
  return _value &&
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      _value,
    )
    ? 'Email is not valid.'
    : undefined;
};
export const validatePassword = value =>
  value && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,14}$/.test(value)
    ? 'Password not correct.'
    : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? `Password has at leaset ${min} characters.`
    : undefined;

export const maxLength = max => value =>
  value && value.length > max
    ? `Password at most ${max} characters.`
    : undefined;

export const textOnly = value =>
  value && !/^[\u0600-\u06FFa-zA-Z\s]{1,}$/.test(value)
    ? 'Only text allowed.'
    : undefined;

export const numbersOnly = value =>
  value && !/^[\d]{1,}$/.test(value) ? 'Only number allowed.' : undefined;

export const passwordsMustMatch = (value, allValues) =>
  value !== allValues.password ? 'Password not match' : undefined;

export const required = value => (value ? undefined : 'Required *');

export const minLength7 = minLength(7);

export const maxLength14 = maxLength(14);
