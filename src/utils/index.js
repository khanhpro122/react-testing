export const validateForms = (inputs) => {
  const result = {};
  const objField = {
    firstName : 'first name',
    lastName : 'last name'
  }
  try {
    Object.keys(inputs) &&
      Object.keys(inputs).forEach((key) => {
        if (key === "email") {
          const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!inputs[key]) {
            result[key] = "The email is required";
          } else if (!regexEmail.test(inputs[key])) {
            result[key] = "The email is not valid.";
          } else {
            result[key] = "";
          }
        } else if (key === "password") {
          const regexCha = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]+$/;
          if (!inputs[key]) {
            result[key] = "The password is required";
          } else if (inputs[key]?.length < 6 || inputs[key]?.length > 18) {
            result[key] = "The password must be between 6-18 characters";
          } else if(!regexCha.test(inputs[key])){
            result[key] = 'The password must contain at least one digit, one special character, and one letter.'
          }else {
            result[key] = "";
          }
        } else if (
          key === "firstName" ||
          key === "lastName"
        ) {
          if (!inputs[key]) {
            result[key] = `The ${objField[key]} is required.`;
          } else {
            result[key] = "";
          }
        }
      });
    return result;
  } catch (e) {
    return result;
  }
};

export const getDataLocal = () => {
  try{
    const dataLocal = localStorage.getItem('authUser')
    const data = JSON.parse(dataLocal)
    return data
  }catch(e) {
    console.log(e)
  }
}
