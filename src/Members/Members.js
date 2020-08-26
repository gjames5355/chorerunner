import React from 'react';

export default function Members(props) {
  const id = props.household_id;
  const members = props.members;

  return members.map(member => {
    return <span>{member.name}</span>;
  });
}
