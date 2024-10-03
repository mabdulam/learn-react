import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState(''); // Moved this outside the if-else block

  if (isSent) {
    return <h1>Thank you!</h1>; // If the message is sent, display a thank you message
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true); // Set isSent to true after form submission
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update message state
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
