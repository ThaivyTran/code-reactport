import React from 'react';
import '../styles/App.css';
import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

function Contact() {
	const [ formState, setFormState ] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitted!')
    const { name, email, message } = e.target.elements
    let formValue = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(formValue)
  }

	return (
    <div className="container mt-5">
      <h1 className="mb-3">- Contact -</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name :</label>
          <br></br>
          <input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
            <br></br>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email :</label>
          <br></br>
          <input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
            <br></br>
        </div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="message">Message :</label>
          <br></br>
          <textarea name="Message"
							defaultValue={message}
							onBlur={handleBlank}/>
        </div>
        {errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit" class="btn btn-primary"> {formStatus}</button>
        <br></br>
        </form>
    </div>
  )
}

export default Contact;