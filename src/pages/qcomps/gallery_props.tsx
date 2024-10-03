import React from 'react';

export default function Gallery(): JSX.Element {
  // Define the Profile component inside Gallery
  const Profile = ({
    name,
    imageSrc,
    altText,
    profession,
    awards,
    discovery,
  }: {
    name: string;
    imageSrc: string;
    altText: string;
    profession: string;
    awards: string;
    discovery: string;
  }): JSX.Element => {
    return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={imageSrc}
          alt={altText}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>{profession}
          </li>
          <li>
            <b>Awards: </b>{awards}
          </li>
          <li>
            <b>Discovered: </b>{discovery}
          </li>
        </ul>
      </section>
    );
  };

  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* Use the Profile component within Gallery */}
      <Profile
        name="Maria Skłodowska-Curie"
        imageSrc="https://i.imgur.com/szV5sdGs.jpg"
        altText="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageSrc="https://i.imgur.com/YfeOqp2s.jpg"
        altText="Katsuko Saruhashi"
        profession="geochemist"
        awards="Miyake Prize for geochemistry, Tanaka Prize"
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}

