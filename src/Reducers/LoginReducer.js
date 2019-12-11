import *as ActionTypes from '../Actions/type';

const validate = val => {
    const errors = {};
    if (!val.UserName) {
      console.log('First Name is required');
      errors.firstName = 'Required';
    }
    return errors;
};