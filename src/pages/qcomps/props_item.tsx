import React from 'react';
import { ItemProps } from "@/types/item";

function Item({ name, isPacked }: ItemProps): JSX.Element {
  return (
    <li className="item">
      {isPacked ? <del>{name}</del> : name}
    </li>
  );
}

export default function PackingList(): JSX.Element {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
