import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './Form';

const initialFormValue = {
  name:'',
  email:'',
  role:''
}
function App() {
  const [formValues, setFormValues] = useState(initialFormValue);
    
  const updateForm = (name, value) => {
      setFormValues({...formValues, [name]:value});
  }
  const submit = () => {
    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      role:formValues.role
    }
    setFormValues(initialFormValue);
  }
  return (
    <div className = 'container'>
      <Form
        change= {updateForm}
        submit={submit}
        values={formValues}
      />

    </div>
  );
}

export default App;
//making intial commit
