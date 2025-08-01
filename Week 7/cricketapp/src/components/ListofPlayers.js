import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      <ul>
        {players.map((item) => {
          return (
            <li key={item.name}>
              Mr. {item.name} <span> {item.score} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListofPlayers; 