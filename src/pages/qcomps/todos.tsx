import React from 'react';

const baseUrl: string = 'https://i.imgur.com/';

interface Person {
  name: string;
  imageId: string;
  imageSize: string;
  theme: {
    backgroundColor: string;
    color: string;
  };
}

const person: Person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1> {/* Display person's name */}
      <img
        className="avatar"
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`} // Corrected template literal
        alt={person.name} // Set alt attribute dynamically
      />
    </div>
  );
}
