const validation = (userData) => {
  const errors = {};
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(userData.email)) {
    errors.email = "El correo electrónico no es válido";
  }
  if (!userData.email) {
    errors.email = "El correo electrónico es obligatorio";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no debe superar los 35 caracteres";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  return errors;
};

export default validation;
