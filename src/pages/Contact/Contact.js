import { useState, useRef } from 'react';

import api from '../../api';
import Button from '../../components/Button';

function Contact() {
  const [name, setName] = useState('Patryk');
  const [surname, setSurname] = useState('O');

  const nameInputRef = useRef(null);
  const nameInputErrorLabelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'name') { // TODO: refactor
      setName(value);
    } else if (name === 'surname') {
      setSurname(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    nameInputRef.current.style.border = '#f00 1px solid';
    nameInputRef.current.value = '>!>!>!>!';
    if (name === '') {
      nameInputErrorLabelRef.current.style.display = 'block';
    } else {
      api.post('/users', {
        name,
        surname
      });

      // fetch(`${process.env.REACT_APP_API_URL}/users.json`, { // TODO: fixme
      //   method: 'POST',
      //   body: JSON.stringify({ name, surname }),
      //   headers: {
      //     'Content-type': 'application/json'
      //   }
      // });
    }
  };

  return (
    <div>
      <h1>Hi {name} {surname}!</h1>
        <form onSubmit={handleSubmit}>

          {/* <Field type="text" name="name" required /> */}

          <input
            type="text"
            name="name"
            ref={nameInputRef}
            defaultValue={name}
            onChange={handleChange} />
          <div ref={nameInputErrorLabelRef} style={{ display: 'none' }}>Field is required</div>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={handleChange} />
          <Button
            type="submit"
            ref={buttonRef}
            onMouseOver={() => buttonRef.current.style.backgroundColor = '#00f'}
            onMouseOut={() => buttonRef.current.style.backgroundColor = '#0f0'}>
            Send me
          </Button>

        </form>
    </div>
  );
}

export default Contact;
