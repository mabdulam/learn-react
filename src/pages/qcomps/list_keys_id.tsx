export const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'szV5sdG',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'YfeOqp2',
  },
];

function getImageUrl(imageId: string): string {
  return 'https://i.imgur.com/' + imageId + 's.jpg';
}

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}> {/* Use person.id as the unique key */}
      <img
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={100} /* Set width to 100px for a reasonable image size */
        height={100}
      />
      <p>{person.name}</p> {/* Optionally display person's name */}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
