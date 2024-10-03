import { useState } from 'react';

export default function Form() {
  // Use state to track the input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e: { target: { value: string } }) {
    setFirstName(e.target.value); // Update state
  }

  function handleLastNameChange(e: { target: { value: string } }) {
    setLastName(e.target.value); // Update state
  }

  function handleReset() {
    setFirstName(''); // Reset the state
    setLastName('');
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName} // Bind to state
        onChange={handleFirstNameChange} // Update state on input change
      />
      <input
        placeholder="Last name"
        value={lastName} // Bind to state
        onChange={handleLastNameChange} // Update state on input change
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

