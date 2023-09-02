import { getDataLocal, validateForms } from "..";

describe('validateForms', () => {
  it('check return empty object for valid inputs', () => {
    const inputs = {
      email: 'khanh@email.com',
      password: '123456@K!',
      firstName: 'Khanh',
      lastName: 'Nguyen',
    };
    const result = validateForms(inputs);
    expect(result).toEqual({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    });
  });

  it('check return error for invalid inputs', () => {
    const inputs = {
      email: 'not-email',
      password: '123',
      firstName: '',
      lastName: 'Nguyen',
    };
    const result = validateForms(inputs);
    expect(result).toEqual({
      email: 'The email is not valid.',
      password: 'The password must be between 6-18 characters',
      firstName: 'The first name is required.',
      lastName: '',
    });
  });
});

describe('getDataLocal', () => {
  it('check return data', () => {
    const data = { username: 'khanh' };
    localStorage.setItem('authUser', JSON.stringify(data));
    const result = getDataLocal();
    expect(result).toEqual(data);
  });

  it('check handle errors', () => {
    localStorage.setItem('authUser', 'invalid-json');
    const result = getDataLocal();
    expect(result).toBeUndefined();
  });
});
