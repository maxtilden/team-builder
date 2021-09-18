import React from 'react';

export default function team(props){
const {submit, change, values} = props;
const onSubmit =  evt => {
   evt.preventDefault();
   submit();
}
const onChange = evt => {
    const {name, value} = evt.target;
    change(name, value);
}
return(
    <form onSubmit={onSubmit}>
        <label>Name 
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
          />
        </label>
        <label>Username
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
          />
        </label>
        <label>Role
        <select value={values.role} name="role" onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value="Student">Student</option>
            <option value="TL">Team Lead</option>
            <option value="Instructor">Instructor</option>
            <option value="Alumni">Alumni</option>
          </select>
        </label>
        <button>Submit</button>
    </form>
)
}