// import React, { Component } from 'react';
// import './Login.css'
// import {} from '../Actions/Loginaction';
// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <form class="form">
//                 <label>UserName:</label>
// 		        <input type="text" name="UserName" placeholder="Enter username"></input><br></br><br></br>
//                 <label>Password:</label>
// 		        <input type="text" name="password" placeholder="Enter your password"></input><br></br><br></br>
//                 <button type="Login" value="Login">Login</button>
//                 <button type="Register" value="Register">Register</button>
//                 </form>
//             </div>
//         );
//     }
// }
// const mapStoreToProps=(state)=>
// {
// const {UserName, password}=state.LoginReduce;
// return {UserName, password};
// };
// export default connect(mapStoreToProps,{})(Login);


// import React, { Component } from 'react';
// // import { Field, reduxForm } from 'redux-form';

// const validate = values => {
//     const errors = {}
//     if (!values.firstName) {
//       errors.firstName = 'Required'
//     } else if (values.firstName.length < 2) {
//       errors.firstName = 'Minimum be 2 characters or more'
//     }
//     if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }
//     if (!values.lastName) {
//         errors.lastName = 'Required'
//       } else if (values.lastName.length < 2) {
//         errors.lastName = 'Minimum be 2 characters or more'
//       }
//     return errors
//   }

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//     <div>
//       <label className="control-label">{label}</label>
//       <div>
//         <input {...input} placeholder={label} type={type} className="form-control" />
//         {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
//       </div>
//     </div>
//   )

// let FormCode = props => {
//   const { handleSubmit, pristine, submitting } = props;
//   return (
//     <form onSubmit={ handleSubmit }>
//       <div className="form-group">
//         <Field name="firstName" component={renderField} label="First Name" />
//       </div>
//       <div className="form-group">
//         <Field name="lastName" component={renderField} label="Last Name" />
//       </div>
//       <div className="form-group">
//         <Field name="email" component={renderField} label="Email" />
//       </div>
//       <div className="form-group">
//         <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
//       </div>
//     </form>
//   )
// }
// FormCode = reduxForm({
//   form: 'contact',
//   validate,
// })(FormCode);

// export default FormCode;


const isEmail = (val) => /* check if val is email */

// HTML5 validation
// Works with any HTML5 constraint validation attributes
<Control.text type="email" model="user.email" required />

// Keyed validation
<Control.text
  model="user.email"
  validators={{
    required: (val) => val && val.length,
    isEmail, // ES6 property shorthand
  }}
/>

// Keyed errors
<Control.text
  model="user.email"
  errors={{
    required: (val) => !val || !val.length,
    isEmail: (val) => !isEmail(val),
  }}
/>

// Form-level validation
const longEnough = (val) => val && val.length > 8;

<Form
  model="user"
  validators={{
    '': {
      // Form-level validator
      passwordsMatch: (vals) => vals.password === vals.confirmPassword,
    },
    // Field-level validators
    password: { longEnough },
    confirmPassword: { longEnough },
  }}
/>