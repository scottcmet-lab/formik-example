import React from "react";
import { useFormik} from 'formik'

function App() {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'field required';
      else if(!validateEmail(values.email)) errors.email = 'username should be an email';
      if(!values.password) errors.password = 'field required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username:</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}

export default App;
