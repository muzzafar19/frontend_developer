import React from 'react';

function UserCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      width: '250px',
      margin: '10px auto',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default UserCard;
