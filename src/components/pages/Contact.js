import React, {useState} from 'react';


export default function Contact() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [message, setMessage] = useState('');
let message
let lastName
let firstName


function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const handleChange = (event) => {
  if (!isValidEmail(event.target.value)) {
    setError('Email is invalid');
  } else {
    setError(null);
  }

  setEmail(event.target.value);
};

const handleInputChange = event => {
  
  let target = event.target.value

  if (target === "") {
    alert('All fields are required');
  } else {
    };
    return
  }

const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();

  // Alert the user their first and last name, clear the inputs
  alert(`Form Sent`);
  
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');
};

  return (
    <div>
    <p>
      Please Enter Your Information
    </p>
    <form className="form">
      <input
        value={firstName}
        name="firstName"
        on={handleInputChange}
        type="text"
        placeholder="First Name"
      /> <br></br>
      <input
        value={lastName}
        name="lastName"
        onBlur={handleInputChange}
        type="text"
        placeholder="Last Name"
      />
      <br></br>
      <input
        value={email}
        name="email"
        onChange={handleChange}
        onBlur={handleInputChange}
        type="text"
        placeholder="Email"
      />
      {error && <h2 style={{color: 'red'}}>{error}</h2>}
      <br></br>
      <input
        value={message}
        name="message"
        onBlur={handleInputChange}
        type="text"
        placeholder="Message"
      />
      <br></br>
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  </div>
  );
}

