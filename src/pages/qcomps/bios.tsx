import React from 'react';

export default function Bio(): JSX.Element {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of people!
      </p>
    </div>
  );
}

