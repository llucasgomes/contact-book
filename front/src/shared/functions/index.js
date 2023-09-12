/**
 *
 * @param  (usersSize, user) Irá receber o tamanho da lista e os dados dos "imputs"
 * @description Function ira criar um objeto com os dados do usuario, pronto para envio
 * @returns Objeto
 */
export const templateContact = (usersSize, user) => {
  return {
    name: user.name.value,
    email: user.email.value,
    phone: user.phone.value,
    dateBirth: user.dateBirth.value,
  };
};

/**
 *
 * @param  users Irá receber os dados dos "imputs"
 * @description Function para limpar os campos
 */
export const clearInputs = ({ name, email, phone, dateBirth }) => {
  name.value = "";
  email.value = "";
  phone.value = "";
  dateBirth.value = "";
};

/**
 *
 * @param  users Irá receber os dados dos "imputs"
 * @description Function para fazer a validação de todos os inputs
 * @returns true || false
 */
export const isAllValues = ({ name, email, phone, dateBirth }) => {
  if (!name.value || !email.value || !phone.value || !dateBirth.value) {
    return false;
  }
  return true;
};
