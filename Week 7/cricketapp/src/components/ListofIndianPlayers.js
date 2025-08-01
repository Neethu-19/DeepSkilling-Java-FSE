import React from 'react';

const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      <ul>
        {IndianPlayers.map((player, index) => {
          return (
            <li key={index}>
              Mr. {player}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListofIndianPlayers; 